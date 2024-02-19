+ singular verb">
            <pattern case_sensitive="yes">
                <token inflected="yes" regexp="yes">brush|comb|cut|dye|lose|wash</token>
                <token postag="PRP$"/>
                <marker><token>hairs</token></marker>
            </pattern>
            <message>'Hair' is a mass noun: Use the singular, when you refer to someone's <suggestion><match no="3" regexp_match="s" regexp_replace=""/></suggestion> as an entity.</message>
            <url>https://jakubmarian.com/hair-is-vs-hair-are-vs-hairs-are-in-english/</url>
            <short>Possible typo</short>
            <example correction="hair">She cut her <marker>hairs</marker> yesterday.</example>
        </rule>
        <rule id="AU" name="au [astronomical unit] (Au=gold)">
            <antipattern case_sensitive="yes"><!-- both 'artiste' and 'travail' are English words. Thus, this AP is necessary. -->
                <token>l</token>
                <token spacebefore="no" regexp="yes">&apostrophe;</token>
                <token spacebefore="no">artiste</token>
                <token>au</token>
            </antipattern>
            <antipattern><!-- www.collinsdictionary.com/dictionary/english/lettre -->
                <token>lettre</token>
                <token>au</token>
            </antipattern>
            <antipattern case_sensitive="yes"><!-- https://en.wikipedia.org/wiki/Travels_in_the_Congo_(book) -->
                <token>Voyage</token>
                <token>au</token>
                <token>Congo</token>
            </antipattern>
            <antipattern><!-- www.lexico.com/en/definition/cafe_au_lait -->
                <token regexp="yes">café|cafe|sauce|invitation|port|suite|phrase|appliqués?</token>
                <token>au</token>
            </antipattern>
            <antipattern><!-- maybe French -->
                <token postag="UNKNOWN" regexp="yes">.*[a-z].*</token>
                <token>au</token>
            </antipattern>
            <antipattern><!-- maybe French -->
                <token>au</token>
                <token postag="UNKNOWN" regexp="yes">.*[a-z].*</token>
            </antipattern>
            <antipattern><!-- domain -->
                <token>.</token>
                <token spacebefore="no">au</token>
            </antipattern>
            <antipattern><!-- French -->
                <token />
                <token spacebefore="no" regexp="yes">&apostrophe;|_</token>
                <token spacebefore="no">au</token>
            </antipattern>
            <antipattern>
                <token>au</token>
                <token regexp="yes">pairs?</token>
            </antipattern>
            <antipattern>
                <token>/</token>
                <token>au</token>
                <token>/</token>
            </antipattern>
            <antipattern>
                <token skip="-1">au</token>
                <token regexp="yes">astronomic.*</token>
            </antipattern>
            <antipattern>
                <token skip="-1" regexp="yes">astronomic.*</token>
                <token>au</token>
            </antipattern>
            <antipattern><!-- domain -->
                <token>au</token>
                <token spacebefore="no">.</token>
                <token spacebefore="no">com</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">\d+</token>
                <token>au</token>
            </antipattern>
            <pattern case_sensitive="yes">
                <token>au
                    <exception scope="next" regexp="yes">beurre|courant|contraire|fait|fond|gratin|jus|naturel|revoir</exception><!-- French terms that are used in English -->
                </token>
            </pattern>
            <message>Make sure that '\1' means 'astronomical unit'. If you mean the chemical symbol for gold, use <suggestion>Au</suggestion>.</message>
            <url>https://en.wikipedia.org/wiki/Astronomical_unit</url>
            <short>Possible typo</short>
            <example correction="Au">The chemical symbol for gold is <marker>au</marker>.</example>
            <example>The chemical symbol for gold is <marker>Au</marker>.</example>
            <example>Are you <marker>au fait</marker> the LanguageTool?</example>
            <example>...Jonas or the Artist at Work" ("Jonas ou l’artiste au travail")</example>
            <example>... text, see also: Michot, Yahya, Ibn Sînâ: Lettre au vizir Abû Sa'd.</example>
            <example>My lover works as an au pair in Italy.</example>
            <example>However, evidence for the development of /au/ in medial syllables is lacking.</example>
            <example type="triggers_error">An astronomical unit (abbreviated as AU, au, a.u., or ua) is a unit of length equal to ...</example>
            <example>..., and the international standard ISO 80000, while au is recommended by the International Astronomical ...</example>
            <example type="triggers_error">... are named after individual scientists, while au or a.u. can also mean atomic unit or even...</example>
        </rule>
        <rule id="WORD_CONTAINS_UNDERSCORE" name="A word contains an underscore" tags="picky"><!-- Refer to https://github.com/languagetool-org/languagetool/issues/1204#issuecomment-443842446 -->
            <antipattern><!-- file name: https://github.com/languagetool-org/languagetool/issues/1535 -->
                <token regexp="yes" spacebefore="no">[a-z-]+</token>
                <token spacebefore="no">.</token>
                <token spacebefore="no" regexp="yes">[a-z0-9]{2,7}</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">['‘"“]</token>
                <token regexp="yes">[a-z-]+</token>
                <token spacebefore="no" min="1" max="-1">_<exception postag="NNP"/></token>
                <token regexp="yes" spacebefore="no">[a-z-]+</token>
                <token regexp="yes" spacebefore="no">['‘"“]</token>
            </antipattern>
            <antipattern>
                <token regexp="yes" skip="2">['‘"“]</token>
                <token regexp="yes">[a-z-]+</token>
                <token regexp="yes" spacebefore="no">[a-z-]+</token>
                <token regexp="yes" spacebefore="no">['‘"“]</token>
            </antipattern>
            <antipattern>
                <token skip="3" regexp="yes">=|\*|\/|\+|\-|%</token>
                <token>_</token>
            </antipattern>
            <antipattern>
                <token skip="3">_</token>
                <token regexp="yes">=|\*|\/|\+|\-|%</token>
            </antipattern>
            <antipattern><!-- https://www.computerhope.com/jargon/p/publicht.htm -->
                <token>public</token>
                <token>_</token>
                <token>html</token>
            </antipattern>
            <antipattern><!-- markdown backticks, used for code -->
                <token>`</token>
                <token />
                <token>_</token>
                <token />
                <token>`</token>
            </antipattern>
            <antipattern>
                <token>_</token>
                <token regexp="yes">id|token|name</token>
            </antipattern>
            <antipattern>
                <token>[</token>
                <token regexp="yes">[a-z-]+</token>
                <token spacebefore="no" min="1" max="-1">_<exception postag="NNP"/></token>
                <token regexp="yes" spacebefore="no">[a-z-]+</token>
            </antipattern>
            <pattern>
                <token regexp="yes">[a-z-]+</token>
                <token spacebefore="no" min="1" max="-1">_<exception postag="NNP"/></token>
                <token regexp="yes" spacebefore="no">[a-z-]+</token>
            </pattern>
            <message>An underscore (_) within a word is atypical (except in technical contexts, nicknames, etc.). Make sure that the word '\1\2\3' is correct.</message>
            <suggestion>\1 \3</suggestion>
            <suggestion>\1-\3</suggestion>
            <short>Possible typo</short>
            <example correction="test case|test-case">This <marker>test_case</marker> is not satisfactory.</example>
            <example>This <marker>test-case</marker> is satisfactory.</example>
            <example correction="for semi-colons|for-semi-colons">This test is <marker>for_semi-colons</marker>.</example>
            <example correction="not necessary|not-necessary">Some tests are <marker>not______necessary</marker>.</example><!-- The message does not show all the underscores. -->
            <example>Write your name here: <marker>______________________</marker></example>
            <example>Language Tests<marker>______________________</marker> 37</example>
            <example>Some More Language Tests <marker>_</marker> Appendix B</example>
            <example>Do only <marker>_this_</marker> test.</example>
            <example>Check out the attached file <marker>country_codes.csv</marker> before…</example>
            <example>But <marker>these_</marker> unlike other tests...</example><!-- TODO -->
            <example>Refer to <marker>_TESTS</marker>' on page 33.</example><!-- TODO -->
            <example>Status "payment_failed"</example>
            <example>my_variable = x</example>
            <example>Does it make sense to add `suppress_misspelled`?</example>
            <example>Public_html is a directory on computers running Apache web servers that stores all HTML files.</example>
        </rule>
        <rulegroup id="FR" name="fr [franc), Fr (Father, francium)">
            <url>https://www.collinsdictionary.com/dictionary/english/fr</url>
            <!-- Applicable to all locales. AmE 'fr' = franc, father, friar, from (https://www.merriam-webster.com/dictionary/fr), thus do not put 'fr' in removed.txt. If necessary, make a rule for AmE in /en-US. -->
            <antipattern>
                <token regexp="yes">[\|\[=:]</token>
                <token spacebefore="no">fr</token>
                <token regexp="yes" spacebefore="no">[\|=:]</token>
            </antipattern>
            <antipattern>
                <token>fr</token>
                <token spacebefore="no">:</token>
                <token spacebefore="no"/>
            </antipattern>
            <antipattern><!-- domains with .fr -->
                <token>.</token>
                <token spacebefore="no">fr</token>
            </antipattern>
            <rule><!-- fr -->
                <pattern>
                    <token case_sensitive="yes">fr<exception scope="previous" postag="CD"/></token>
                </pattern>
                <message>Make sure that '\1' means 'franc'. Did you mean <suggestion>for</suggestion>?</message>
                <short>Possible typo</short>
                <example correction="for">Do a test <marker>fr</marker> errors.</example>
                <example correction="for">What did you do that <marker>fr</marker>?</example>
                <example correction="for">... and also <marker>fr</marker>: cats, dogs, rabbits, and mice.</example>
                <example>Do a test <marker>for</marker> for errors.</example>
                <example>Out of scope. <marker>Fr</marker> this type of problem…</example>
                <example>The price of grapes shot up to 32 <marker>fr</marker> a kilo.</example>
                <example>...books.google.com/books?id=VpyjGdEsCA4C|language=fr|location=France|publisher=L'Harmattan...</example>
                <example>Eiffel presented his plans to the {{lang|fr|Société des Ingénieurs Civils}}; after...</example>
                <example>[[fr:Ludwig von Mises#Le calcul économique et l'...</example>
                <example>... [[:wikisource:fr:De Buonaparte et des Bourbons|&quot;De...</example>
                <example>Refer to www.example.fr for more information.</example>
                <example>I couldn't find a reference at larousse.fr</example>
                <example>bg:Население на Ангола es:Demografía de Angola <marker>fr</marker>:Démographie de l'Angola lt:Angolos demografija...</example>
                <example>...website = banque.sonore.breton.free.fr|access-date = 2016-01-14}}&lt;/ref&gt; It...</example>
            </rule>
            <rule><!-- Fr -->
                <antipattern>
                    <token>(</token>
                    <token spacebefore="no" case_sensitive="yes">Fr</token>
                    <token spacebefore="no">)</token>
                </antipattern>
<!--            <antipattern> Why does this not work?
                    <token postag="SENT_START" skip="-1" regexp="yes">elements?|francium</token>
                    <token postag="SENT_END"/>
                </antipattern>-->
                <antipattern>
                    <token skip="-1" case_sensitive="yes">Fr</token>
                    <token regexp="yes">elements?|francium</token>
                </antipattern>
                <antipattern>
                    <token skip="-1" regexp="yes">elements?|francium</token>
                    <token case_sensitive="yes">Fr</token>
                </antipattern>
                <antipattern><!-- #4662 18 Fr -->
                    <token postag="CD"/>
                    <token>Fr</token>
                </antipattern>
                <pattern>
                    <token case_sensitive="yes">Fr<exception scope="next">.</exception><exception scope="next" postag="NNP"/></token>
                </pattern>
                <message>Make sure that '\1' is an abbreviation for 'Father' or the element francium. Did you mean <suggestion>For</suggestion>?</message>
                <short>Possible typo</short>
                <example correction="For"><marker>Fr</marker> this type of problem…</example>
                <example><marker>For</marker> this type of problem…</example>
                <example><marker>Fr</marker> Simon makes me laugh.</example>
                <example>Do you know <marker>Fr</marker>. Silas?</example>
                <example>The element francium (<marker>Fr</marker>) has an atomic number of 87.</example>
                <example>The chemical symbol for francium is <marker>Fr</marker>.</example>
                <example>18 Fr [6 mm] outer diameter</example><!-- #4662 -->
            </rule>
        </rulegroup>

        <rulegroup id="THANKS_YOU" name="Thanks (Thank) you">
            <url>https://www.lexico.com/definition/thank_you</url>
            <antipattern>
                <token>you</token>
                <token regexp="yes">are|'re</token>
            </antipattern>
            <rule>
                <pattern>
                    <token postag="SENT_START|PCT" postag_regexp="yes" />
                    <marker>
                        <token>thanks</token>
                        <token>you</token>
                    </marker>
                </pattern>
                <message>Did you mean <suggestion><match no="2" regexp_match="(?i)(thank)s" regexp_replace="$1"></match> \3</suggestion>?</message>
                <short>Possible typo</short>
                <example correction="Thank you"><marker>Thanks you</marker> for your help.</example>
                <example correction="THANK YOU"><marker>THANKS YOU</marker>!</example>
                <example><marker>Thank you</marker> for your help.</example>
                <example correction="thank you">Great, <marker>thanks you</marker>.</example>
                <example>He <marker>thanks</marker> you for your help.</example>
                <example><marker>Thanks</marker>, you are good to me.</example>
                <example>Thanks you are the best.</example><!-- missing comma, different issue -->
                <example>Thanks you're the best.</example><!-- missing comma, different issue -->
            </rule>
            <rule>
                <pattern>
                    <token postag="CC" />
                    <marker>
                        <token>thanks</token>
                        <token>you</token>
                    </marker>
                    <token postag="SENT_END" regexp="yes">\p{P}</token>
                </pattern>
                <message>Did you mean <suggestion><match no="2" regexp_match="(?i)(thank)s" regexp_replace="$1"></match> \3</suggestion> or <suggestion>\2 to \3</suggestion>?</message>
                <short>Possible typo</short>
                <example correction="thank you|thanks to you">No, but <marker>thanks you</marker>.</example>
                <example>No, but thanks you douchebag.</example>
            </rule>
        </rulegroup>

        <rulegroup id="THANK_THANKS" name="Thank (Thanks)">
            <url>https://www.merriam-webster.com/dictionary/thanks</url>
            <rule>
                <pattern>
                    <token>thank</token>
                    <token regexp="yes" spacebefore="no" min="0">[\.\,\;\:\#\*]</token>
                    <token spacebefore="no" regexp="yes">s|'s</token>
                </pattern>
                <message>Did you mean <suggestion>thanks</suggestion>?</message>
                <example correction="Thanks"><marker>Thank's</marker> that was helpful.</example>
            </rule>
            <rule>
                <antipattern>
                    <token postag="W.+" postag_regexp="yes" skip="7" />
                    <token>thank</token>
                </antipattern>
                <antipattern>
                    <token>to</token>
                    <token>thank</token>
                </antipattern>
                <pattern>
                    <marker>
                        <token>thank</token>
                    </marker>
                    <token regexp="yes" spacebefore="no">
                        [\.\,\!\;]
                        <exception scope="next">you</exception>
                    </token>
                </pattern>
                <message>Something seems to be missing here. Did you maybe mean <suggestion>thanks</suggestion> or <suggestion>thank you</suggestion>?</message>
                <example correction="thanks|thank you">@tiff <marker>thank</marker>!</example>
                <example>Who can we thank?</example>
                <example correction="Thanks|Thank you"><marker>Thank</marker>, that certainly helps.</example>
                <example>I have you to thank.</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|PCT|UH" postag_regexp="yes">
                        <exception>why</exception>
                    </token>
                    <marker>
                        <token>thank</token>
                    </marker>
                    <token>?</token>
                </pattern>
                <message>Did you mean <suggestion>thanks</suggestion>?</message>
                <example correction="thanks">Ah <marker>thank</marker>?</example>
                <example>I have you to thank.</example>
                <example>Who can I thank?</example>
                <example>Why thanks?</example>
            </rule>
            <rule>
                <pattern>
                    <token>to</token>
                    <token>
                        thanks
                        <exception scope="next">to</exception>
                    </token>
                </pattern>
                <message>Did you mean <suggestion>\1 thank</suggestion>?</message>
                <example correction="to thank">I have <marker>to thanks</marker> Carl for the help.</example>
                <example>I totally agree, but since there is no other option I say yay for what we have access to thanks to awesome community members third party magic.</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|PCT|TO|CC" postag_regexp="yes" />
                    <marker>
                        <token>think</token>
                    </marker>
                    <token>you</token>
                    <token regexp="yes">for|\.|\,|\!|\?</token>
                </pattern>
                <message>Did you mean <suggestion>thank</suggestion>?</message>
                <example correction="thank">Tom, <marker>think</marker> you.</example>
                <example>You don't want Tom to think you're poor.</example>
            </rule>
            <rule>
                <pattern>
                    <token>
                        many
                        <exception scope="previous">how</exception>
                    </token>
                    <marker>
                        <token>thank</token>
                    </marker>
                    <token regexp="yes">,|\.|\!|for</token>
                </pattern>
                <message>Did you mean <suggestion>thanks</suggestion>?</message>
                <example correction="thanks">Many <marker>thank</marker> for helping me.</example>
            </rule>
            <rule>
                <antipattern>
                    <token regexp="yes">I|we|they|you</token>
                    <token postag="RB" min="0" />
                    <token>thank</token>
                </antipattern>
                <antipattern>
                    <token postag="NNPS" />
                    <token postag="RB" min="0" />
                    <token>thank</token>
                </antipattern>
                <pattern>
                    <marker>
                        <token>thank</token>
                    </marker>
                    <token>to</token>
                    <token postag="NNP|DT|PRP\$" postag_regexp="yes" />
                </pattern>
                <message>Did you mean <suggestion>thanks</suggestion>?</message>
                <example correction="Thanks"><marker>Thank</marker> to Google we now have more visitors on our website.</example>
                <example correction="thanks">I want say <marker>thank</marker> to our main sponsors.</example>
                <example>I thank to God.</example>
                <example>I thank to my parents, who supported me with money in the several past years.</example>
            </rule>
        </rulegroup>
        <rule id="HI_TIME" name="hi (his, high) time">
            <antipattern><!-- Assume initial caps is NNP -->
                <token case_sensitive="yes" regexp="yes">[A-Z][a-z].+</token>
                <token case_sensitive="yes" regexp="yes">[A-Z][a-z].+</token>
            </antipattern>
            <pattern>
                <marker>
                    <token>hi</token>
                    <token>time</token>
                </marker>
            </pattern>
            <message>Did you mean <suggestion>high \2</suggestion> or <suggestion>his \2</suggestion>?</message>
            <url>https://www.collinsdictionary.com/dictionary/english/high-time</url>
            <short>Possible typo</short>
            <example correction="high time|his time">It's <marker>hi time</marker> you did this work.</example>
            <example correction="high time|his time">During <marker>hi time</marker> with our organization, Jones made many improvements.</example>
            <example>It's <marker>high time</marker> you did this work.</example>
            <example><marker>Hi Time Wine Cellars</marker> is excited to introduce Mount Michael Wines to...</example>
        </rule>
        <rulegroup id="LANGUAGE_TOOL" name="Language Tool (LanguageTool)">
            <rule>
                <pattern>
                    <marker>
                        <token case_sensitive="yes">Language</token>
                        <token case_sensitive="yes">Tool</token>
                    </marker>
                </pattern>
                <message>Did you mean <suggestion>\1\2</suggestion> (product name)?</message>
                <url>https://en.wikipedia.org/wiki/LanguageTool</url>
                <short>Possible typo</short>
                <example correction="LanguageTool">… and does <marker>Language Tool</marker> work on mobile devices?</example>
                <example>… and does <marker>LanguageTool</marker> work on mobile devices?</example>
                <example>Is the <marker>language tool</marker> satisfactory?</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="IN|CC|SENT_START" postag_regexp="yes" />
                    <marker>
                        <token>Language</token>
                        <token>Tool</token>
                    </marker>
                </pattern>
                <message>Did you mean <suggestion>LanguageTool</suggestion> (product name)?</message>
                <url>https://en.wikipedia.org/wiki/LanguageTool</url>
                <short>Possible typo</short>
                <example correction="LanguageTool">What are the best features of <marker>Language Tool</marker>?</example>
            </rule>
        </rulegroup>
        <rule id="TR" name="tr (try)">
            <antipattern><!-- ed. and tr. -->
                <token>ed</token>
                <token spacebefore="no">.</token>
                <token>and</token>
                <token>tr</token>
                <token spacebefore="no">.</token>
            </antipattern>
            <antipattern>
                <token>tr</token>
                <token spacebefore="no">_</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">\p{P}</token>
                <token spacebefore="no">tr</token>
            </antipattern>
            <antipattern>
                <token postag="SENT_START" />
                <token postag="SENT_END">tr</token>
            </antipattern>
            <pattern>
                <token>
                    tr
                    <exception case_sensitive="yes">TR</exception>
                    <exception scope="next" spacebefore="no">:</exception>
                </token>
            </pattern>
            <message>Make sure that '\1' is an abbreviation for a word such as 'translator', 'treasurer' or 'trustee' and not a typing error. Did you mean <suggestion><match no="1"/>y</suggestion>?</message>
            <short>Possible typo</short>
            <example correction="Try"><marker>Tr</marker> this test:</example>
            <example correction="try">... but you can always <marker>tr</marker>.</example>
            <example correction="try">... but if necessary, <marker>tr</marker> R. Congreve on extension 345.</example>
            <example><marker>Try</marker> this test:</example>
            <example>fi:Ada sv:Ada <marker>tr</marker>:Ada (anlam ayrımı)</example>
            <example type="triggers_error">August Comte, Catechisme positiviste (1852) or Catechism of Positivism, <marker>tr</marker>. R. Congreve, (London: Kegan Paul, 1891).</example><!-- #2511 -->
            <example>Madelung, Wilferd and Toby Mayer (ed. and tr.), Struggling with the Philosopher: A Refutation ...</example>
            <example>Visit my website erdogan.com.tr for more information.</example>
        </rule>
        <rule id="NE" name="ne (né, me, no)">
            <antipattern>
                <token>ne</token>
                <token>plus</token>
                <token>ultra</token>
            </antipattern>
            <antipattern>
                <token postag="UNKNOWN" />
                <token>ne</token>
                <token postag="UNKNOWN" />
            </antipattern>
            <antipattern>
                <token>-</token>
                <token spacebefore="no">ne</token>
            </antipattern>
            <pattern>
                <token case_sensitive="yes">ne</token>
            </pattern>
            <message>Did you mean <suggestion>né</suggestion>, <suggestion>me</suggestion>, or <suggestion>no</suggestion>?</message>
            <url>https://www.lexico.com/definition/ne</url>
            <short>Possible typo</short>
            <example correction="né|me|no">Please send it to <marker>ne</marker> by fax.</example>
            <example>Please send it to <marker>me</marker> by fax.</example>
            <example>That town is in <marker>NE</marker> England.</example>
            <example>Neon (<marker>Ne</marker>) is a gas</example>
            <example>Jean-Pierre Melville, <marker>né</marker> Grumbach, took his name from his favourite author.</example>
            <example type="triggers_error">...сарын 6 nah:Tlanāuhti 6 nl:6 april nds-nl:6 april ne:६ अप्रिल new:अप्रिल ६ ja:4月6日 nap:</example> <!-- Clearly not standard text. Thus, this rule is not applicable and should not trigger an error. -->
        </rule>
        <rule id="OM" name="om (on)">
            <pattern>
                <token postag="SENT_START" skip="-1"><exception scope="next" regexp="yes">Hindu|Brahma|Vishnu|Siva|sacred|mystic</exception></token>
                <marker>
                     <token skip="-1" case_sensitive="yes">om<exception scope="next" regexp="yes">Hindu|Brahma|Vishnu|Siva|sacred|mystic</exception></token>
                </marker>
            <token postag="SENT_END"><exception scope="current" regexp="yes">Hindu|Brahma|Vishnu|Siva|sacred|mystic</exception></token>
            </pattern>
            <message>Make sure that '\2' refers to a mystic syllable and is not a spelling error. Did you mean <suggestion>on</suggestion>?</message>
            <url>https://www.lexico.com/definition/om</url>
            <short>Possible typo</short>
            <example correction="on">The test was <marker>om</marker> Thursday.</example>
            <example>The word <marker>om</marker> is a sacred Hindu word.</example>
        </rule>
        <rule id="APPSTORE" name="AppStore (App Store, Amazon Appstore)">
            <antipattern case_sensitive="yes">
                <token>Amazon</token>
                <token>Appstore</token>
            </antipattern>
            <pattern>
                <token>appstore</token>
            </pattern>
            <message>If you mean the Apple digital distribution platform, use <suggestion>App Store</suggestion>. For Amazon, use <suggestion>Amazon Appstore</suggestion>.</message>
            <url>https://www.apple.com/legal/intellectual-property/trademark/appletmlist.html</url><!-- https://en.wikipedia.org/wiki/Amazon_Appstore. I did not find trademark information on www.amazon.com/gp/help/customer/display.html/?nodeId=200738910. Amazon consistently uses 'Amazon Appstore', so I assume that that is the correct name. -->
            <short>Possible typo</short>
            <example correction="App Store|Amazon Appstore">For information about the <marker>Appstore</marker> from Amazon, refer to https://developer.amazon.com/apps-and-games/getting-started.</example>
            <example correction="App Store|Amazon Appstore">Get our app from the <marker>AppStore</marker>.</example>
            <example correction="App Store|Amazon Appstore">For information about the Amazon <marker>AppStore</marker>, refer to…</example>
            <example>For information about the <marker>Amazon Appstore</marker>, refer to…</example>
            <example>Get our app from the <marker>App Store</marker>.</example>
        </rule>
        <rule id="UR" name="Ur (You're)"><!-- #1826 -->
            <antipattern><!-- quoted text -->
                <token skip="-1" regexp="yes">['‘"“]</token>
                <token skip="-1">Ur</token>
                <token regexp="yes">['’"”]</token>
            </antipattern>
            <antipattern><!-- index entry -->
                <token>Ur</token>
                <token postag="CD"/>
                <token>,</token>
                <token postag="CD"/>
            </antipattern>
            <antipattern>
                <token>Royal</token>
                <token>Game</token>
                <token>of</token>
                <token>Ur</token>
            </antipattern>
            <pattern>
                <token postag="SENT_START" skip="-1"><exception scope="next" regexp="yes">archaelolog.*|cit(y|ies)|excavat.*|priest.*|temples?|Abraham|Akkad|Amorite|Assyrian?|Awal|Babylon.*|Basra|BC|Canaan|Chaldees|Dynasty|Egypt|Euphrates|Iraq|Ishtar|Isin|Israel|Kish|Larsa|Mesopotamia|Neo-Sumerian|Nippur|Shu-Sin|Sumer(ian)|Tigris|Zāriqum</exception></token>
                <marker>
                     <token skip="-1" case_sensitive="yes">Ur
                       <exception scope="next" regexp="yes">III|is|was</exception><!-- Keep the rule simple to prevent FP and do not use postags for lexical verbs. -->
                       <exception scope="next" regexp="yes">archaelolog.*|cit(y|ies)|excavat.*|priest.*|temples?|Abraham|Akkad|Amorite|Assyrian?|Awal|Babylon.*|Basra|BC|Canaan|Chaldees|Dynasty|Egypt|Euphrates|Iraq|Ishtar|Isin|Israel|Kish|Larsa|Mesopotamia|Neo-Sumerian|Nippur|Shu-Sin|Sumer(ian)|Tigris|Zāriqum</exception>
                       </token>
                </marker>
            <token postag="SENT_END"><exception scope="current" regexp="yes">archaelolog.*|cit(y|ies)|excavat.*|priest.*|temples?|Abraham|Akkad|Amorite|Assyrian?|Awal|Babylon.*|Basra|BC|Canaan|Chaldees|Dynasty|Egypt|Euphrates|Iraq|Ishtar|Isin|Israel|Kish|Larsa|Mesopotamia|Neo-Sumerian|Nippur|Shu-Sin|Sumer(ian)|Tigris|Zāriqum</exception></token>
            </pattern>
            <message>Make sure that '\2' refers to the ancient city in Iraq. Did you mean <suggestion>You’re</suggestion>?</message>
            <short>Possible typo</short>
            <example correction="You’re"><marker>Ur</marker> a nice guy.</example>
            <example correction="You’re"><marker>Ur</marker> a nice guy.</example>
            <example correction="You’re"><marker>Ur</marker> 37, aren't you?</example>
            <example>Ur was an ancient city.</example>
            <example>... and other cities, such as Ur in what is now Iraq.</example>
            <example>... between the Tigris and Euphrates under the Ur III ruler Shu-Sin.</example>
            <example>... when Missy Elliott released the folkhop-influenced song "Get Ur Freak On".</example>
            <example>Ur 357, 359</example><!-- Entry in an index. -->
        </rule>
        <rule id="BU" name="bu (by, bus, but)"><!-- #2233 -->
            <antipattern>
                <token>Bu</token>
                <token>Hasa</token>
            </antipattern>
            <antipattern>
                <token>Korle</token>
                <token>Bu</token>
            </antipattern>
            <pattern>
                 <token case_sensitive="yes" regexp="yes">[Bb]u</token><!-- https://en.wikipedia.org/wiki/BU -->
            </pattern>
            <message>Make sure that '\1' is an abbreviation (bureau, bushel). Did you mean <suggestion>by</suggestion>, <suggestion>but</suggestion>, <suggestion>bug</suggestion>, or <suggestion>bus</suggestion>?</message>
            <url>https://www.merriam-webster.com/dictionary/bu</url>
            <short>Possible typo</short>
            <example correction="by|but|bug|bus">I did it <marker>bu</marker> mistake.</example>
            <example correction="by|but|bug|bus">The food is cheap <marker>bu</marker> t delicious.</example><!-- The suggestion does not deal with the extra 't' -->
            <example correction="by|but|bug|bus">There is a subtle <marker>bu</marker> in the software.</example>
            <example correction="by|but|bug|bus">I was on the <marker>bu</marker> when I saw the accident.</example>
            <example correction="By|But|Bug|Bus"><marker>Bu</marker> is this correct?</example>
            <example>I did it <marker>by</marker> mistake.</example>
            <example>Which BU did you mean?</example>
            <example>Refer to https://www.bu.edu for more information.</example>
            <example type="triggers_error">Our <marker>bu</marker> is full.</example><!-- Possibly correct, possibly an error. -->
            <example type="triggers_error"><marker>Bu.</marker> is an abbreviation for bushel (www.lexico.com/definition/bu.).</example>
            <example type="triggers_error">It is an Ethiopian name of the Ge‘ez script, ’ä bu gi da, taken from four letters of that script...</example><!-- http://eastafricaschoolserver.org/Wikipedia/wp/a/Abugida.htm -->
        </rule>
        <rule id="IM_I_M" name="im (I'm)">
            <antipattern>
                <token postag="UNKNOWN"/>
                <token>IM</token>
                <token postag="UNKNOWN"/>
            </antipattern>
            <antipattern>
                <token/>
                <token spacebefore="no" regexp="yes">&apostrophe;</token>
                <token spacebefore="no">IM</token>
            </antipattern>
            <antipattern>
                <token>word</token>
                <token>IM</token>
            </antipattern>
            <antipattern><!-- IM caused -->
                <token>IM</token>
                <token chunk="B-VP" postag_regexp="yes" postag="VB.*|MD"/>
            </antipattern>
            <antipattern><!-- an IM -->
                <token chunk="B-NP-singular" postag_regexp="yes" postag="DT|PRP\$"/>
                <token>IM</token><!-- Not chunk:  of the IM. -->
            </antipattern>
            <antipattern><!-- an IM service -->
                <token chunk="I-NP-singular">IM</token>
                <token chunk="E-NP-singular" postag_regexp="yes" postag="NN(:UN?)?"/>
            </antipattern>
            <antipattern><!-- these IM services -->
                <token chunk="I-NP-plural">IM</token>
                <token chunk="E-NP-plural" postag="NNS"/>
            </antipattern>
            <antipattern case_sensitive="yes"><!-- as IM Arabic [https://en.wikipedia.org/wiki/Arabic] -->
                <token postag="IN"/>
                <token chunk="B-NP-singular">IM</token>
                <token chunk="E-NP-singular">Arabic</token>
            </antipattern>
            <antipattern>
                <token>MSN</token>
                <token>IM</token>
            </antipattern>
            <pattern>
                <marker>
                    <token case_sensitive="yes">IM<exception postag="NNP"/></token>
                </marker>
            </pattern>
            <message>Make sure that '\1' is an abbreviation (instant message, individual medley, infectious mononucleosis). Did you mean <suggestion>I'm</suggestion> or <suggestion>I am</suggestion>?</message>
            <short>Possible typo</short>
            <example correction="I'm|I am"><marker>IM</marker> curious.</example>
            <example correction="I'm|I am">... although <marker>IM</marker> not happy about it.</example>
            <example correction="I'm|I am">Did you know <marker>IM</marker> 18 next week?</example>
            <example correction="I'm|I am">YES, <marker>IM</marker> 100% IN ENE.</example>
            <example correction="I'm|I am"><marker>IM</marker> SO SICK OF IT</example>
            <example correction="I'm|I am"><marker>IM</marker> afraid we won’t be able to read the alert.</example>
            <example correction="I'm|I am">Hello, <marker>IM</marker> Arabic.</example>
            <example><marker>I'm</marker> curious.</example>
            <example>Im curious.</example><!-- The spell checker finds this. -->
            <example>... and im 18 next week.</example><!-- The spell checker finds this. -->
            <example>The word (IM) in parentheses is not likely to be an error.</example>
            <example>The word IM (usually) is an abbreviation for 'instant message'.</example>
            <example>This IM caused me much confusion.</example>
            <example>Did you send an IM?</example>
            <example>Chris Prouty offers a panoramic overview of the response in Italy to the news: Also, set up the MSN IM so we can talk.</example>
            <example>... which you use for your IM service.</example>
            <example>... you need an accompanying IM service.</example>
            <example>I sent you an IM yesterday.</example>
            <example>Some of these IM services are not very good.</example>
            <example>Attached is another redlined draft of the IM.</example>
            <example>JUBAYR IBN MUT'IM REPORTED THAT A WOMAN...</example>
            <example type="triggers_error">THE FAMILY MOVED TO <marker>KÖNIGSFELD IM SCHWARZWALD</marker>, BADEN-WÜRTTEMBERG, WHERE HE...</example>
            <example>Sitara shows HPLC IM Wellhead.</example>
            <example>Pidgin (IM client)</example>
            <example>...in these technologies by transliterating the Arabic text using the Latin script, sometimes known as IM Arabic.</example>
            <example type="triggers_error">Pidgin (IM client).</example><!-- Compare with the example that has no full stop. -->
            <example type="triggers_error">If you want to go ahead, then we can proceed via IM.</example>
            <example type="triggers_error">International Master (shortened as IM).</example>
            <example type="triggers_error">IM Read/Write 8.</example>
            <example type="triggers_error">Add FN IM View Management Information 10.</example>
            <example type="triggers_error">I am also attaching IM Canada.</example>
            <example type="triggers_error">Lead Energy Services IM PDM Quality Efforts.</example>
            <example type="triggers_error">Add FN IM View Management Information 1.</example>
            <example type="triggers_error">I use "steveatet" on IM.</example>
            <example type="triggers_error">Please change the desk on deal 680472 from IM ME TCO to IM NE GULF3.</example>
            <example type="triggers_error">returnMessage = (returnMessage + " IM Used");</example>
        </rule>

        <rule id="ER" name="er (her, err, Er)"><!-- #2822 -->
            <antipattern><!-- quoted text -->
                <token skip="-1" regexp="yes">&quote;</token>
                <token skip="-1">er</token>
                <token regexp="yes">["”]</token>
            </antipattern>
            <antipattern><!-- Find an error in standard text only -->
                <token postag="UNKNOWN"/>
                <token>er</token>
                <token postag="UNKNOWN"/>
            </antipattern>
            <antipattern><!-- throw err; // -->
                <token>throw</token>
                <token>er</token>
                <token>;</token>
                <token>/</token>
            </antipattern>
            <antipattern><!-- er/.rvm/ -->
                <token>er</token>
                <token spacebefore="no">/</token>
                <token spacebefore="no">.</token>
            </antipattern>
            <antipattern><!-- more er's -->
                <token postag_regexp="yes" postag="JJR?"/>
                <token>er</token>
                <token>'s</token>
            </antipattern>
            <antipattern><!-- Incomplete sentences (three dots: ...) -->
                 <token>er</token>
                 <token>.</token>
                 <token>.</token>
                <token postag="SENT_END">.</token>
            </antipattern>
            <pattern>
                <token spacebefore="yes" case_sensitive="yes">er
                    <exception scope="next">…</exception>
                    </token>
            </pattern>
            <message>Do not use '\1' in formal text. Use it only in quoted text to represent a hesitation. Did you mean <suggestion>her</suggestion>, <suggestion>err</suggestion> or <suggestion>Er</suggestion> (erbium)? Or possibly, there is an unnecessary space before or after '\1'.</message>
            <url>https://www.lexico.com/definition/er</url>
            <short>Possible typo</short>
            <example correction="her|err|Er">I worship <marker>er</marker>.</example>
            <example correction="her|err|Er">Is <marker>er</marker> the chemical symbol for erbium?</example>
            <example correction="her|err|Er">If you <marker>er</marker> on the side of caution, you will be safe.</example>
            <example correction="her|err|Er">She is a worship <marker>er</marker> in our local church.</example><!-- Do not give a suggestion, because 'worshiper' is not correct. Do not suppress misspelled, because then the rule will not find the problem. -->
            <example correction="her|err|Er">This was, <marker>er</marker>, the point of rotating events.</example>
            <example correction="her|err|Er">She was the only beneficiary of the will, <marker>er</marker> go, the prime suspect.</example>
            <example>I worship <marker>her</marker>.</example>
            <example>"I'm like, <marker>er</marker>, quite pleased with this rule," he said.</example>
            <example><marker>er</marker>… Great minds think alike</example><!-- The rule is to find spelling errors, not informal text. -->
            <example>So…<marker>er</marker>…what happened?</example>
            <example>Back 'er up.</example>
            <example>Heavenly ire / ne'er sent a pest more loathsome;</example>
            <example>Orange Spike Energy (the 16oz’er)</example>
            <example>MF’er is a polite salutation.</example>
            <example>Whoe'er yields properly to Fate is deemed...</example>
            <example>Suggest to do a basic battery alternator diy’er check too.</example>
            <example>The only one I would change by adding more er’s.</example>
            <example>Its driving me crazy(er).</example>
            <example>Most unusually, in some conditions with long sentences er…</example>
            <example>The issue: The er...</example>
            <example>er.operationComplete()</example>
            <example>er.png886×761 284 KB</example>
            <example>Top level domain: .er</example>
            <example>... spørgsmål om CVR er åben.</example>
            <example>She's an uppity n***er, I think</example>
            <example>throw er; // Unhandled ‘error’ event</example>
            <example>While not as Agile, this Thundercat is **Fast**er, and more Stealthy in his performance.</example>
            <example>... from /home/deploy er/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/tsort.rb:421</example>
            <example>When I try to actually use the CD player, it just says (er -2) error 2.</example>
            <example type="triggers_error">Det er et spørgsmål om CV.</example>
            <example type="triggers_error">The er in err?</example>
<!-- Not found --><example>er name is Mary.</example>
        </rule>

        <rulegroup id="NON_STANDARD_WORD" name="Non-standard word"><!-- #2833 -->
            <rule><!-- For 's etc. -->
                <antipattern>
                  <token>M</token>
                  <token>*</token>
                  <token>A</token>
                  <token>*</token>
                  <token>S</token>
                  <token>*</token>
                  <token>H</token>
                </antipattern>
                <antipattern>
                    <token spacebefore="no">(</token>
                    <token spacebefore="no" regexp="yes">s|d|ll|t|m|re|ve</token>
                    <token spacebefore="no">)</token>
                </antipattern>
                <antipattern>
                    <token spacebefore="no">[</token>
                    <token spacebefore="no" regexp="yes">s|d|ll|t|m|re|ve</token>
                    <token spacebefore="no">]</token>
                </antipattern>
                <antipattern>
                    <token spacebefore="no">(</token>
                    <token spacebefore="no">s</token>
                    <token spacebefore="no">)</token>
                </antipattern>
                <antipattern>
                    <token spacebefore="no">[</token>
                    <token spacebefore="no">s</token>
                    <token spacebefore="no">]</token>
                </antipattern>
                <antipattern>
                    <token>[</token>
                    <token spacebefore="no"/>
                    <token spacebefore="no">]</token>
                    <token spacebefore="no">s</token>
                </antipattern>
                <antipattern>
                    <token>"</token>
                    <token spacebefore="no"/>
                    <token spacebefore="no">"</token>
                    <token spacebefore="no">s</token>
                </antipattern>
                <antipattern>
                    <token regexp="yes">(non-)?\p{Lu}</token>
                    <token spacebefore="no">.</token>
                    <token spacebefore="no" case_sensitive="yes">S</token>
                </antipattern>
                <antipattern case_sensitive="yes"><!-- do not create false alarm for programming language constants: "FOO_S" -->
                    <token regexp="yes">[A-Z0-9]+</token>
                    <token regexp="yes">_|-</token>
                    <token>S</token>
                </antipattern>
                <antipattern><!-- Premium #845 compare(S,T) -->
                    <token/>
                    <token>(</token>
                    <token regexp="yes">[a-z]</token>
                    <token>,</token>
                    <token regexp="yes">[a-z]</token>
                    <token>)</token>
                </antipattern>
                <antipattern><!-- abbreviations (a.s.a.p. / v.s.)-->
                    <token regexp="yes">[a-z]</token>
                    <token spacebefore="no">.</token>
                    <token regexp="yes" spacebefore="no">[a-z]</token>
                    <token spacebefore="no">.</token>
                </antipattern>
                <antipattern><!-- domains like en.m.wikipedia.org-->
                    <token regexp="yes">[a-z]+</token>
                    <token spacebefore="no">.</token>
                    <token spacebefore="no" regexp="yes">s|d|ll|t|m|re|ve</token>
                    <token spacebefore="no">.</token>
                </antipattern>
                <antipattern>
                    <token>sh</token>
                    <token>*</token>
                    <token>t</token>
                </antipattern>
                <antipattern>
                    <token regexp="yes">\d+</token>
                    <token>.</token>
                    <token spacebefore="no" regexp="yes">s|d|ll|t|m|re|ve</token>
                </antipattern>
                <antipattern>
                    <token>-</token>
                    <token regexp="yes" spacebefore="no">[a-z]+</token>
                </antipattern>
                <pattern>
                    <token>
                        <exception postag_regexp="yes" postag="UNKNOWN|SYM"/>
                        <exception regexp="yes">&quote;|&apostrophe;</exception>
                    </token>
                    <token spacebefore="no" regexp="yes">.<exception regexp="yes">['’/]</exception></token>
                    <token spacebefore="no" regexp="yes">s|d|ll|t|m|re|ve</token>
                </pattern>
                <message>The word '\1\2\3' is not standard English. Did you mean <suggestion>\1’\3</suggestion> (curly apostrophe) or <suggestion>\1'\3</suggestion> (straight apostrophe)?</message>
                <short>Possible typo</short>
                <example correction="it’s|it's">… and <marker>it#s</marker> part of the test.</example>
                <example correction="book’s|book's">My <marker>book;s</marker> on the shelf.</example>
                <example correction="text’s|text's">Read your <marker>text(s</marker> very carefully.</example>
                <example correction="what’s|what's">The 'apostrophe' in "<marker>what´s</marker>" has the ANSI value 180. It is an acute accent: www.alanwood.net/demos/ansi.html.</example>
                <example correction="He’ll|He'll"><marker>He#ll</marker> take care of it once back from vacation.</example>
                <example>… and <marker>it's</marker> part of the test.</example>
                <example>Read the <marker>document(s)</marker> carefully.</example>
                <example>The <marker>U.S. Government</marker> will...</example>
                <example>The acronym <marker>A.B.S.</marker> can mean...</example>
                <example>... when he wrote, "<marker>[I]s</marker> this correct?"</example>
                <example>... against the dishes as she "… <marker>think[s]</marker> it an odd jumble of trash."</example>
                <example>... at approximately 10 cm/s on average.</example>
                <example>... distinguishes between dotted and dotless "I"s.</example>
                <example>... cardinal number system, e.g., ḫamsat ʾayyām →<marker>ḫam(a)s</marker> tiyyām, where certain words have a special plural...</example>
                <example>... including the first non-U.S. team (the Montreal Expos)</example><!-- Premium #815 -->
                <example>... with an operation compare(S,T) that checks whether the stacks S and T...</example>
<!-- False negative, because of the exception for /s --><example>...or complete connection loss of the Bluetooth <marker>device/s</marker> connected to a computer.</example>
<!-- False negative, out of scope --><example>If the <marker>result #s</marker> are incorrect, do the test again.</example>
                <example type="triggers_error">{{cite web |last=Simmons |<marker>first=S</marker> |title=Philosophical Dimension of Drawing In...</example>
                <example>a.s.a.p</example>
                <example>It's me v.s. them.</example><!-- TODO: needs different rule (suggesting "vs") -->
                <example>See en.m.wikipedia.org</example>
                <example>First come, first serve(d)</example>
                <example>It was defined under section 3.d of the 1989 agreement.</example>
                <example>A tab character is "\t"</example>
            </rule>
            <rule>
                <pattern>
                    <token regexp="yes">(I|you|he|she|it|we|they)[\d@](s|d|ll|t|m|re|ve)</token>
                </pattern>
                <message>Did you mean <suggestion><match no="1" regexp_match="(.*)[\d@](.*)" regexp_replace="$1'$2"/></suggestion>?</message>
                <example correction="They'll"><marker>They@ll</marker> take care of it once back from vacation.</example>
                <example correction="He'll"><marker>He4ll</marker> take care of it once back from vacation.</example>
            </rule>
            <rule>
                <antipattern>
                    <token>I</token>
                    <token>.</token>
                    <token>M</token>
                    <token>.</token>
                </antipattern>
                <pattern>
                    <token>I</token>
                    <token spacebefore="no"><exception regexp="yes">&apostrophe;</exception></token>
                    <token spacebefore="no">m</token>
                </pattern>
                <message>Did you mean <suggestion>I'm</suggestion>?</message>
                <example correction="I'm"><marker>I;m</marker> sorry.</example>
            </rule>
            <rule>
                <pattern>
                    <token regexp="yes">they|we|you</token>
                    <token spacebefore="no"><exception regexp="yes">&apostrophe;</exception></token>
                    <token spacebefore="no">re</token>
                </pattern>
                <message>Did you mean <suggestion>\1're</suggestion>?</message>
                <example correction="You're"><marker>You;re</marker> sorry.</example>
            </rule>
        </rulegroup>

        <rule id="TIS" name="tis (this)"><!-- #2821 -->
            <antipattern>
                 <token regexp="yes">&apostrophe;</token>
                 <token spacebefore="no">tis</token>
            </antipattern>
            <antipattern><!-- Incomplete sentences (three dots: ...) -->
                 <token>tis</token>
                 <token>.</token>
                 <token>.</token>
                <token postag="SENT_END">.</token>
            </antipattern>
            <antipattern><!-- Not English text -->
                 <token postag="UNKNOWN" regexp="yes">\p{L}\p{L}+</token>
                 <token>tis</token>
                 <token postag="UNKNOWN" regexp="yes">\p{L}\p{L}+</token>
            </antipattern>
            <antipattern>
                <token>Tis</token>
                <token>Hazari</token>
            </antipattern>
            <antipattern case_sensitive="yes"><!-- Washington... Tis Well www.mountvernon.org/library/digitalhistory/quotes/article/tis-well/ -->
                 <token skip="-1">Washington</token>
                 <token>Tis</token>
                 <token>well</token>
            </antipattern>
            <pattern>
                <token case_sensitive="yes" regexp="yes">[Tt]is
                    <exception scope="next">…</exception>
                    </token>
            </pattern>
            <message>Did you mean <suggestion>this</suggestion> or the literary contraction <suggestion>'\1</suggestion> (straight apostrophe) or <suggestion>’\1</suggestion> (curly apostrophe) as an alternative for <suggestion>it is</suggestion>?</message>
            <url>https://www.lexico.com/definition/'tis</url>
            <short>Possible typo</short>
            <example correction="this|'tis|’tis|it is">Is <marker>tis</marker> sentence correct?</example>
            <example correction="This|'Tis|’Tis|It is"><marker>Tis</marker> sentence contains an error.</example>
            <example correction="this|'tis|’tis|it is">What would the rule editor do on <marker>tis</marker> warning?</example>
            <example correction="This|'Tis|’Tis|It is"><marker>Tis</marker> a bright and sunny morn in the hamlet.</example>
            <example correction="this|'tis|’tis|it is">I think <marker>tis</marker> a difficult problem to solve.</example>
            <example correction="This|'Tis|’Tis|It is"><marker>Tis</marker> the season to be thankful.</example>
            <example correction="This|'Tis|’Tis|It is"><marker>Tis</marker> well is deep and dangerous.</example>
            <example correction="This|'Tis|’Tis|It is">... when Mike wrote, "<marker>Tis</marker> time it will work!"</example>
            <example correction="This|'Tis|’Tis|It is">..written at the same time, Brontë wrote "<marker>Tis</marker> bitter sometimes to recall/Illusions once deemed fair".</example><!-- 2020-05-04 MFU: Books of literary criticism that that I have seen with a Google search show that Brontë wrote 'Tis. -->
            <example>Is <marker>this</marker> sentence correct?</example>
            <example>The whole story is just a tis...</example>
            <example>The Gallipoli peninsula (Chersónisos tis Kallípolis) is located in the southern part of East Thrace.</example>
            <example>"I fled, 'tis true, and saved my life by flight, / bursting my bonds in frenzy of despair, / and hidden in a marish lay that night, / waiting till they should sail, if sail, perchance, they might."</example>
            <example>"Cyclops Skipper Teuton, 'Tis Said", The Washington Post, April 16, 1918.</example>
            <example>Other anthems that have used the same melody include Heil dir im Siegerkranz, Kongesangen, My Country, 'Tis of Thee, Rufst du, mein Vaterland, E Ola Ke Alii Ke Akua and The Prayer of Russians.</example>
            <example>Where ignorance is bliss, 'tis folly to be wise.</example>
            <example>In the United States, the melody is used for the patriotic song "My Country, 'Tis of Thee".</example>
            <example>...though the same melody was (and is) widely known in the United States to the lyrics "My country, 'tis of thee".</example>
            <example>Come, cheer up, my lads, 'tis to glory we steer,</example>
            <example>1831 – Samuel Francis Smith writes "My Country, 'Tis of Thee" for the Boston, Massachusetts July 4 festivities.</example>
            <example>Of course, 'tis the season, and the staff at Control Solutions wishes you a happy, healthy holiday, and a prosperous 2002.</example><!-- www.merriam-webster.com/words-at-play/why-we-say-tis-the-season -->
            <example>Washington said, "Tis well."</example>
            <example>Anyone, ‘tis all</example><!--  #2882 Incorrect. Should be an apostrophe, not a quote mark. -->
<!-- Not found --><example>When the manager said, '<marker>tis</marker> your problem, not mine,' I was angry.</example>
        </rule>

        <rule id="HAWAIIAN" name="Hawaiian">
            <pattern>
                <token regexp="yes">hawaii?</token>
                <token regexp="yes">&apostrophe;</token>
                <token regexp="yes">i?an</token>
            </pattern>
            <message>Did you mean <suggestion>Hawaiian</suggestion>?</message>
            <url>https://www.lexico.com/definition/hawaiian</url>
            <short>Possible typo</short>
            <example correction="Hawaiian">He is a <marker>Hawaii'an</marker> citizen.</example>
        </rule>

        <rule id="ALZHEIMERS" name="Alzheimers">
            <pattern>
                <token>Alzheimers</token>
            </pattern>
            <message>The name of this disease is always capitalized and spelled with a possessive apostrophe.</message>
            <suggestion>Alzheimer's</suggestion>
            <url>https://www.merriam-webster.com/dictionary/Alzheimers</url>
            <example correction="Alzheimer's">He was suffering from <marker>Alzheimers</marker> disease.</example>
            <example type="triggers_error">The Alzheimers moved when Alois was still young in order to give their children an opportunity to attend the Royal Humanistic Gymnasium.</example>
        </rule>

        <rulegroup id="MUS_MUST" name="mus (must)">
            <short>Possible typo</short>
            <rule><!-- Mid-sentence -->
                <pattern>
                    <token chunk_re="[IE]-NP-.*"/>
                    <marker>
                        <token spacebefore="yes" case_sensitive="yes">mus</token>
                    </marker>
                    <token spacebefore="yes" chunk_re=".-VP|B-ADVP|B-NP-.*"/>
                </pattern>
                <message>Did you mean the modal verb <suggestion>must</suggestion>? 'Mus' is the plural of the Greek letter µ (mu).</message>
                <example correction="must">This issue <marker>mus</marker> exist already.</example><!-- issue/I-NP-plural -->
                <example correction="must">These problems <marker>mus</marker> already have been corrected.</example>
                <example correction="must">You <marker>mus</marker> see my new car.</example><!-- Also found by PRP_MUS -->
                <example>This issue <marker>must</marker> exist already.</example>
                <example>Medically Unexplained Symptoms (MUS) Mental Health Treatment.</example>
                <example>How many mus are there in the sentence that follows?</example>
                <example>The number of mus was indeterminate.</example>
                <example>... in a traditional order established by medieval grammarians: mus (nominative), muris (genitive), muri (dative), murem (accusative), (O) mus (vocative).</example>
                <example>... by Giuseppe Maria Buini (mus.) and Claudio Nicola Stampa (libr.), first performed at the Teatro Ducale of Milan, Italy.</example>
                <example>... someone asks "ut mutus sit Quartus" and "erret fugiens ut mus".</example>
            </rule>
            <rule><!-- Sentence start-->
                <pattern>
                    <token postag="SENT_START"/>
                    <marker>
                        <token case_sensitive="yes">Mus</token>
                    </marker>
                    <token spacebefore="yes" chunk_re="B-NP-.*"/>
                </pattern>
                <message>Possible typo detected. Did you mean the modal verb <suggestion>must</suggestion>? 'Mus' is the plural of the Greek letter µ (mu).</message>
                <example correction="Must"><marker>Mus</marker> you do that now?</example>
                <example correction="Must"><marker>Mus</marker> the door be opened?</example>
                <example><marker>Must</marker> you do that now?</example>
                <example>The European version of this release, by La Vida Es Un Mus, contains the "Want Us Dead" record on side B.</example>
                <example>Mus, BMus, Mus.B, or Mus.Bac.</example>
                <example>Mus (genus), the genus of rodents containing many species of mice.</example>
                <example>Fawn-colored mouse, Mus cervicolor</example>
                <example>A decrease in the ratio has been found to increase the competitive ability of sperm in Mus species.</example>
                <example>... Ishaq ibn Ibrahim ibn Mus'ab, to deal with an expansion of the Khurramite rebellion.</example>
                <example>Gus Mus (born 1944), Islamic leader from Indonesia affiliated to Nahdlatul Ulama.</example>
                <example>Mus was famous for his paintings. (https://en.wikipedia.org/wiki/Italo_Mus)</example>
                <example>Mus is a city in France (https://en.wikipedia.org/wiki/Mus,_Gard)</example>
                <example>Mus carefully peels his grapes before eating them.</example>
                <example>Mus showed them how to do it.</example>
            </rule>
        </rulegroup>

        <rule id="ANTHER" name="anther (another)"><!-- #5531 -->
            <antipattern><!-- Ignore 'anther' in technical contexts 