lace(/\)[+*?]?/, '');
            }
            nlAfter = cleanAfter;
            const dollar = nlAfter === '' && isSub !== SUBPARSE ? '(?:$|\\/)' : '';
            re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        // if the re is not "" at this point, then we need to make sure
        // it doesn't match against an empty path part.
        // Otherwise a/* will match a/, which it should not.
        if (re !== '' && hasMagic) {
            re = '(?=.)' + re;
        }
        if (addPatternStart) {
            re = patternStart() + re;
        }
        // parsing just a piece of a larger pattern.
        if (isSub === SUBPARSE) {
            return [re, hasMagic];
        }
        // if it's nocase, and the lcase/uppercase don't match, it's magic
        if (options.nocase && !hasMagic && !options.nocaseMagicOnly) {
            hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
        }
        // skip the regexp for non-magical patterns
        // unescape anything in it, though, so that it'll be
        // an exact match against a file etc.
        if (!hasMagic) {
            return globUnescape(pattern);
        }
        const flags = options.nocase ? 'i' : '';
        try {
            const ext = fastTest
                ? {
                    _glob: pattern,
                    _src: re,
                    test: fastTest,
                }
                : {
                    _glob: pattern,
                    _src: re,
                };
            return Object.assign(new RegExp('^' + re + '$', flags), ext);
            /* c8 ignore start */
        }
        catch (er) {
            // should be impossible
            // If it was an invalid regular expression, then it can't match
            // anything.  This trick looks for a character after the end of
            // the string, which is of course impossible, except in multi-line
            // mode, but it's not a /m regex.
            this.debug('invalid regexp', er);
            return new RegExp('$.');
        }
        /* c8 ignore stop */
    }
    makeRe() {
        if (this.regexp || this.regexp === false)
            return this.regexp;
        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
        const set = this.set;
        if (!set.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar
            ? star
            : options.dot
                ? twoStarDot
                : twoStarNoDot;
        const flags = options.nocase ? 'i' : '';
        // regexpify non-globstar patterns
        // if ** is only item, then we just do one twoStar
        // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
        // if ** is last, append (\/twoStar|) to previous
        // if ** is in the middle, append (\/|\/twoStar\/) to previous
        // then filter out GLOBSTAR symbols
        let re = set
            .map(pattern => {
            const pp = pattern.map(p => typeof p === 'string'
                ? regExpEscape(p)
                : p === GLOBSTAR
                    ? GLOBSTAR
                    : p._src);
            pp.forEach((p, i) => {
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p !== GLOBSTAR || prev === GLOBSTAR) {
                    return;
                }
                if (prev === undefined) {
                    if (next !== undefined && next !== GLOBSTAR) {
                        pp[i + 1] = '(?:\\/|' + twoStar + '\\/)?' + next;
                    }
                    else {
                        pp[i] = twoStar;
                    }
                }
                else if (next === undefined) {
                    pp[i - 1] = prev + '(?:\\/|' + twoStar + ')?';
                }
                else if (next !== GLOBSTAR) {
                    pp[i - 1] = prev + '(?:\\/|\\/' + twoStar + '\\/)' + next;
                    pp[i + 1] = GLOBSTAR;
                }
            });
            return pp.filter(p => p !== GLOBSTAR).join('/');
        })
            .join('|');
        // must match entire pattern
        // ending in a * or ** will make it less strict.
        re = '^(?:' + re + ')$';
        // can match anything, as long as it's not this.
        if (this.negate)
            re = '^(?!' + re + ').*$';
        try {
            this.regexp = new RegExp(re, flags);
            /* c8 ignore start */
        }
        catch (ex) {
            // should be impossible
            this.regexp = false;
        }
        /* c8 ignore stop */
        return this.regexp;
    }
    slashSplit(p) {
        // if p starts with // on windows, we preserve that
        // so that UNC paths aren't broken.  Otherwise, any number of
        // / characters are coalesced into one, unless
        // preserveMultipleSlashes is set to true.
        if (this.preserveMultipleSlashes) {
            return p.split('/');
        }
        else if (isWindows && /^\/\/[^\/]+/.test(p)) {
            // add an extra '' for the one we lose
            return ['', ...p.split(/\/+/)];
        }
        else {
            return p.split(/\/+/);
        }
    }
    match(f, partial = this.partial) {
        this.debug('match', f, this.pattern);
        // short-circuit in the case of busted things.
        // comments, etc.
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f === '';
        }
        if (f === '/' && partial) {
            return true;
        }
        const options = this.options;
        // windows: need to use /, not \
        if (path.sep !== '/') {
            f = f.split(path.sep).join('/');
        }
        // treat the test path as a set of pathparts.
        const ff = this.slashSplit(f);
        this.debug(this.pattern, 'split', ff);
        // just ONE of the pattern sets in this.set needs to match
        // in order for it to be valid.  If negating, then just one
        // match means that we have failed.
        // Either way, return on the first hit.
        const set = this.set;
        this.debug(this.pattern, 'set', set);
        // Find the basename of the path by looking for the last non-empty segment
        let filename = ff[ff.length - 1];
        if (!filename) {
            for (let i = ff.length - 2; !filename && i >= 0; i--) {
                filename = ff[i];
            }
        }
        for (let i = 0; i < set.length; i++) {
            const pattern = set[i];
            let file = ff;
            if (options.matchBase && pattern.length === 1) {
                file = [filename];
            }
            const hit = this.matchOne(file, pattern, partial);
            if (hit) {
                if (options.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        // didn't get any hits.  this is success if it's a negative
        // pattern, failure otherwise.
        if (options.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return minimatch.defaults(def).Minimatch;
    }
}
minimatch.Minimatch = Minimatch;
//# sourceMappingURL=index.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                   // inventory, path, realpath, root, and parent
//
// node.root is a reference to the root module in the tree (ie, typically the
// cwd project folder)
//
// node.location is the /-delimited path from the root module to the node.  In
// the case of link targets that may be outside of the root's package tree,
// this can include some number of /../ path segments.  The location of the
// root module is always '.'.  node.location thus never contains drive letters
// or absolute paths, and is portable within a given project, suitable for
// inclusion in lockfiles and metadata.
//
// node.path is the path to the place where this node lives on disk.  It is
// system-specific and absolute.
//
// node.realpath is the path to where the module actually resides on disk.  In
// the case of non-link nodes, node.realpath is equivalent to node.path.  In
// the case of link nodes, it is equivalent to node.target.path.
//
// Setting node.parent will set the node's root to the parent's root, as well
// as updating edgesIn and edgesOut to reload dependency resolutions as needed,
// and setting node.path to parent.path/node_modules/name.
//
// node.inventory is a Map of name to a Set() of all the nodes under a given
// root by that name.  It's empty for non-root nodes, and changing the root
// reference will remove it from the old root's inventory and add it to the new
// one.  This map is useful for cases like `npm update foo` or `npm ls foo`
// where we need to quickly find all instances of a given package name within a
// tree.

const semver = require('semver')
const nameFromFolder = require('@npmcli/name-from-folder')
const Edge = require('./edge.js')
const Inventory = require('./inventory.js')
const OverrideSet = require('./override-set.js')
const { normalize } = require('read-package-json-fast')
const { getPaths: getBinPaths } = require('bin-links')
const npa = require('npm-package-arg')
const debug = require('./debug.js')
const gatherDepSet = require('./gather-dep-set.js')
const treeCheck = require('./tree-check.js')
const walkUp = require('walk-up-path')

const { resolve, relative, dirname, basename } = require('path')
const util = require('util')
const _package = Symbol('_package')
const _parent = Symbol('_parent')
const _target = Symbol.for('_target')
const _fsParent = Symbol('_fsParent')
const _loadDepType = Symbol('_loadDepType')
const _loadWorkspaces = Symbol('_loadWorkspaces')
const _reloadNamedEdges = Symbol('_reloadNamedEdges')
// overridden by Link class
const _loadDeps = Symbol.for('Arborist.Node._loadDeps')
const _root = Symbol('_root')
const _refreshLocation = Symbol.for('_refreshLocation')
const _changePath = Symbol.for('_changePath')
// used by Link class as well
const _delistFromMeta = Symbol.for('_delistFromMeta')
const _global = Symbol.for('global')
const _workspaces = Symbol('_workspaces')
const _explain = Symbol('_explain')
const _explanation = Symbol('_explanation')
const _meta = Symbol('_meta')

const relpath = require('./relpath.js')
const consistentResolve = require('./consistent-resolve.js')

const printableTree = require('./printable.js')
const CaseInsensitiveMap = require('./case-insensitive-map.js')

const querySelectorAll = require('./query-selector-all.js')

class Node {
  constructor (options) {
    // NB: path can be null if it's a link target
    const {
      root,
      path,
      realpath,
      parent,
      error,
      meta,
      fsParent,
      resolved,
      integrity,
      // allow setting name explicitly when we haven't set a path yet
      name,
      children,
      fsChildren,
      installLinks = false,
      legacyPeerDeps = false,
      linksIn,
      isInStore = false,
      hasShrinkwrap,
      overrides,
      loadOverrides = false,
      extraneous = true,
      dev = true,
      optional = true,
      devOptional = true,
      peer = true,
      global = false,
      dummy = false,
      sourceReference = null,
    } = options
    // this object gives querySelectorAll somewhere to stash context about a node
    // while processing a query
    this.queryContext = {}

    // true if part of a global install
    this[_global] = global

    this[_workspaces] = null

    this.errors = error ? [error] : []
    this.isInStore = isInStore

    // this will usually be null, except when modeling a
    // package's dependencies in a virtual root.
    this.sourceReference = sourceReference

    const pkg = sourceReference ? sourceReference.package
      : normalize(options.pkg || {})

    this.name = name ||
      nameFromFolder(path || pkg.name || realpath) ||
      pkg.name ||
      null

    // should be equal if not a link
    this.path = path ? resolve(path) : null

    if (!this.name && (!this.path || this.path !== dirname(this.path))) {
      throw new TypeError('could not detect node na