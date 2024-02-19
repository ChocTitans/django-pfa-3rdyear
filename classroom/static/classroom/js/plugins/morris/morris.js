aks French, but he speaks Spanish, too.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">you|we|they</token>
                        <token chunk_re="B-ADJP|B-ADVP">not</token>
                    </marker>
                    <token chunk_re=".-ADJP" postag="JJ.*" postag_regexp="yes" />
                </pattern>
                <message>It appears that a verb is missing.</message>
                <suggestion>\1 are \2</suggestion>
                <example correction="They are not"><marker>They not</marker> sure about it.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token>I</token>
                        <token chunk_re="B-ADJP|B-ADVP">not</token>
                    </marker>
                    <token chunk_re=".-ADJP" postag="JJ.*" postag_regexp="yes" />
                </pattern>
                <message>It appears that a verb is missing.</message>
                <suggestion>\1 am \2</suggestion>
                <example correction="I am not"><marker>I not</marker> sure about it.</example>
                <example>Am I not beautiful?</example>
                <example>Why was I not aware of this?</example>
            </rule>
        </rulegroup>
        <rule id="PLEASE_BE_VB" name="please be prepare (prepared)">
            <pattern>
                <token regexp="yes">please|maybe|perhaps|always|never</token>
                <token>be</token>
                <marker>
                    <token postag="VB" chunk_re=".-VP" />
                </marker>
                <token postag="IN|PCT|CC" postag_regexp="yes" />
            </pattern>
            <message>It seems the correct verb form here is <suggestion><match no="3" postag="VBN" /></suggestion>.</message>
            <example correction="prepared">Please be <marker>prepare</marker> for the next steps.</example>
        </rule>
        <rule id="I_M_MD" name="I'm might (I might) be">
            <antipattern><!-- #5263 It was might alone that -->
                <token>it</token>
                <token regexp="yes">is|was</token>
                <token chunk="B-NP-singular" postag_regexp="yes" postag="NN:UN?"/>
                <token postag="RB"/>
                <token postag="WDT"/>
            </antipattern>
            <pattern>
                <token postag="SENT_START|PCT" postag_regexp="yes" />
                <token regexp="yes" min="0">and|but</token>
                <marker>
                    <token regexp="yes">s?he|it|we|they|you|I</token>
                    <token inflected="yes">be</token>
                    <token postag="MD">
                        <exception postag="NNP" />
                        <exception>need</exception>
                    </token>
                </marker>
            </pattern>
            <message>It seems that only one verb should be used here.</message>
            <suggestion>\3 \6</suggestion>
            <example correction="I might"><marker>I'm might</marker> be going home soon.</example>
            <example>I'm Will.</example>
            <example>It was might alone that was important in the war.</example><!-- #5263 -->
        </rule>
        <rulegroup id="WAS_THERE_MANY" name="Was (were) there many ...">
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|W.*|PCT" postag_regexp="yes">
                        <exception>that</exception>
                    </token>
                    <marker>
                        <token>was</token>
                    </marker>
                    <token regexp="yes">t?here</token>
                    <token postag="RB" min="0" />
                    <token regexp="yes">many|few|lots</token>
                    <token min="0">of</token>
                    <token chunk_re=".-NP-plural" />
                </pattern>
                <message>The singular verb form '\2' doesn't seem to match '\7'.</message>
                <suggestion>were</suggestion>
                <example correction="Were"><marker>Was</marker> there too many people?</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|W.*|PCT" postag_regexp="yes">
                        <exception>that</exception>
                    </token>
                    <marker>
                        <token>was</token>
                    </marker>
                    <token regexp="yes">t?here</token>
                    <token>a</token>
                    <token>lot</token>
                    <token>of</token>
                    <token chunk_re=".-NP-plural" />
                </pattern>
                <message>The singular verb form '\2' doesn't seem to match '\7'.</message>
                <suggestion>were</suggestion>
                <example correction="Were"><marker>Was</marker> there a lot of people?</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|W.*|PCT" postag_regexp="yes">
                        <exception>that</exception>
                    </token>
                    <marker>
                        <token>is</token>
                    </marker>
                    <token regexp="yes">t?here</token>
                    <token postag="RB" min="0" />
                    <token regexp="yes">many|few|lots</token>
                    <token min="0">of</token>
                    <token chunk_re=".-NP-plural" />
                </pattern>
                <message>The singular verb form '\2' doesn't seem to match '\7'.</message>
                <suggestion>are</suggestion>
                <example correction="Are"><marker>Is</marker> there too many people?</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|W.*|PCT" postag_regexp="yes">
                        <exception>that</exception>
                    </token>
                    <marker>
                        <token>is</token>
                    </marker>
                    <token regexp="yes">t?here</token>
                    <token>a</token>
                    <token>lot</token>
                    <token>of</token>
                    <token chunk_re=".-NP-plural" />
                </pattern>
                <message>The singular verb form '\2' doesn't seem to match '\7'.</message>
                <suggestion>are</suggestion>
                <example correction="Are"><marker>Is</marker> there a lot of people?</example>
            </rule>
        </rulegroup>
        <rule id="FIRSTLY_OF_ALL" name="firstly (first) of all">
            <pattern>
                <token postag="SENT_START|PCT|CC" postag_regexp="yes" />
                <marker>
                    <token regexp="yes">firstly|lastly</token>
                    <token>of</token>
                    <token>all</token>
                </marker>
            </pattern>
            <message>The correct introductory phrase is either <suggestion><match no="2" regexp_match="(?i)ly" regexp_replace="" /> \3 \4</suggestion> or just <suggestion>\2</suggestion>.</message>
            <example correction="First of all|Firstly"><marker>Firstly of all</marker> we have to update our privacy policy.</example>
        </rule>
        <rule id="NN_NOT_JJ" name="missing verb before 'not'">
            <antipattern>
                <token skip="10">
                    not
                    <exception scope="next">,|but|because|if</exception>
                </token>
                <token chunk_re=".-VP" />
            </antipattern>
            <antipattern>
                <token skip="10">
                    not
                    <exception scope="next">,|but|because|if</exception>
                </token>
                <token inflected="yes" regexp="yes">be|have|will|do</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">were|was|been</token>
                <token postag="JJ" />
                <token>but</token>
                <token regexp="yes">today|now</token>
                <token>not</token>
                <token postag="JJ" />
            </antipattern>
            <pattern>
                <token postag="SENT_START|CC" postag_regexp="yes">
                    <exception postag="IN" />
                </token>
                <token postag="DT|JJ|PRP\$" postag_regexp="yes" chunk="B-NP-singular" min="0" />
                <token postag="NNP?|NN:UN?" postag_regexp="yes" chunk_re=".-NP-singular">
                    <exception regexp="yes">@.+</exception>
                </token>
                <marker>
                    <token>not</token>
                </marker>
                <token postag="RB" min="0" />
                <token postag="JJR?" postag_regexp="yes" chunk="I-ADJP" />
            </pattern>
            <message>A verb may be missing.</message>
            <suggestion>is \4</suggestion>
            <example correction="is not">The grammar <marker>not</marker> good in this sentence.</example>
            <example correction="is not">Online discount <marker>not</marker> available on packages.</example>
            <example>A book not worth reading is not worth buying in the first place.</example>
            <example>After the workout my shoulders were sore but today not bad at all.</example>
        </rule>
        <rulegroup id="THIS_MISSING_VERB" name="missing verb after 'this'">
            <antipattern>
                <token>this</token>
                <token>no</token>
                <token regexp="yes">doubt|longer</token>
            </antipattern>
            <antipattern><!-- this A section ... -->
                <token>this</token>
                <token case_sensitive="yes">A</token>
                <token case_sensitive="yes" regexp="yes">[a-z].*</token>
            </antipattern>
            <antipattern><!-- ... but this her stepmother would not allow -->
                <token>but</token>
                <token>this</token>
                <token postag="PRP\$|DT" postag_regexp="yes" />
                <token postag="JJ.*" postag_regexp="yes" min="0" />
                <token postag="NN.*" postag_regexp="yes" />
                <token postag="MD" />
            </antipattern>
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|PCT" postag_regexp="yes">
                        <exception postag="IN|VB.*" postag_regexp="yes" />
                    </token>
                    <marker>
                        <token>this</token>
                    </marker>
                    <token regexp="yes" chunk_re=".-NP-singular">the|an?|their|my|y?our|her|his|its|no</token>
                    <token postag="JJ.*" postag_regexp="yes" min="0" />
                    <token postag="NN.*" postag_regexp="yes" />
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>\2 is</suggestion>
                <example correction="This is"><marker>This</marker> the best.</example>
                <example correction="This is"><marker>This</marker> a new test.</example>
                <example correction="this is">I would like to know if <marker>this</marker> a bug?</example>
                <example>This no doubt will improve our credit rating, save us cash on interest payment, and give us room to borrow.</example>
                <example>This A section featured duple meter, singsong rhythms, and diatonic melodies with the sounds of oboe, English horn, and taxi horns.</example>
                <example>By his first wife the peasant had a daughter called Elsa, a good quiet girl, who only wanted to live in peace, but this her stepmother would not allow.</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="SENT_START|CC|PCT" postag_regexp="yes">
                        <exception postag="IN|VB.*" postag_regexp="yes" />
                    </token>
                    <marker>
                        <token>this</token>
                    </marker>
                    <token regexp="yes" chunk_re=".-NP-plural">the|an?|their|my|y?our|her|his|its|no</token>
                    <token postag="JJ.*" postag_regexp="yes" min="0" />
                    <token postag="NNP?S" postag_regexp="yes" />
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>these are</suggestion>
                <example correction="These are"><marker>This</marker> the best tools.</example>
                <example correction="These are"><marker>This</marker> our old friends at Pawnee gas plant fuel.</example>
                <example>This no longer matters.</example>
            </rule>
            <rule>
                <pattern>
                    <token inflected="yes" regexp="yes">think|hope</token>
                    <marker>
                        <token>this</token>
                    </marker>
                    <token regexp="yes" chunk_re=".-NP-singular">the|an?|their|my|y?our|her|his|its|no</token>
                    <token postag="JJ.*" postag_regexp="yes" min="0" />
                    <token postag="NN.*" postag_regexp="yes" />
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>\2 is</suggestion>
                <example correction="this is">I think <marker>this</marker> the best.</example>
                <example correction="this is">I think <marker>this</marker> a fake.</example>
            </rule>
            <rule>
                <antipattern>
                    <token>this</token>
                    <token postag="RB" />
                    <token postag="VBG" />
                    <token postag="NN.*|UNKNOWN" postag_regexp="yes" />
                </antipattern>
                <pattern>
                    <token postag="SENT_START|CC|PCT" postag_regexp="yes">
                        <exception postag="IN|VB.*" postag_regexp="yes" />
                    </token>
                    <marker>
                        <token>this</token>
                    </marker>
                    <token regexp="yes" postag="RB">
                        not|.+ly
                        <exception postag="JJ" />
                    </token>
                    <token postag="VBG">
                        <exception>being</exception>
                    </token>
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>\2 is</suggestion>
                <example correction="This is"><marker>This</marker> not going to be bad.</example>
                <example correction="This is"><marker>This</marker> really disappointing!</example>
                <example>This potentially spiraling process will ultimately lead to the collapse of the monetary system.</example>
                <example>This painting by Rembrandt is a masterpiece.</example>
            </rule>
        </rulegroup>
        <rulegroup id="THANKS_YOUR" name="Thanks (for) your help">
            <rule>
                <pattern>
                    <token postag="CC|SENT_START|PCT" postag_regexp="yes" />
                    <marker>
                        <token>thanks</token>
                        <token chunk_re="B-NP-.*" regexp="yes">your|the</token>
                    </marker>
                    <token postag="JJ.*|NN.*" postag_regexp="yes" chunk_re="E-NP-.*" min="0" />
                    <token postag="NN.*" postag_regexp="yes" chunk_re="E-NP-.*" />
                    <token postag="SENT_END" regexp="yes">\p{P}</token>
                </pattern>
                <message>Did you mean <suggestion>\2 for \3</suggestion>?</message>
                <example correction="Thanks for your"><marker>Thanks your</marker> message.</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="CC|SENT_START|PCT" postag_regexp="yes" />
                    <marker>
                        <token>thanks</token>
                        <token chunk_re="B-NP-.*" regexp="yes">your|the</token>
                    </marker>
                    <token postag="JJ.*|NN.*" postag_regexp="yes" chunk_re="E-NP-.*" min="0" />
                    <token postag="NN.*" postag_regexp="yes" chunk_re="E-NP-.*" />
                    <token min="0">,</token>
                    <token postag="NNP" />
                    <token postag="SENT_END" regexp="yes">\p{P}</token>
                </pattern>
                <message>Did you mean <suggestion>\2 for \3</suggestion>?</message>
                <example correction="Thanks for your"><marker>Thanks your</marker> help, Peter.</example>
            </rule>
        </rulegroup>
        <rule id="DIDN_T_SAW" name="I didn't saw (see)">
            <antipattern>
                <token skip="-1">saw</token>
                <token regexp="yes">woods?|planks?|trees?|pieces?|lumber.*|timber.*</token>
            </antipattern>
            <antipattern>
                <token regexp="yes" skip="-1">woods?|planks?|trees?|pieces?|lumber.*|timber.*</token>
                <token>saw</token>
            </antipattern>
            <pattern>
                <token regexp="yes">did|do|does</token>
                <token regexp="yes">n't|not</token>
                <token postag="RB" min="0" />
                <marker>
                    <token regexp="yes" case_sensitive="yes">[Ss]aw</token>
                </marker>
            </pattern>
            <message>The verb "saw" means "to cut" something using a saw. The past tense of "see" is incorrect in this context.</message>
            <suggestion>see</suggestion>
            <example correction="see">I didn't <marker>saw</marker> that.</example>
        </rule>
        <rule id="DIDN_T_SPOKE" name="I didn't spoke (speak)">
            <antipattern>
                <token skip="-1">spoke</token>
                <token regexp="yes">furnish|furnitures?</token>
            </antipattern>
            <antipattern>
                <token regexp="yes" skip="-1">furnish|furnitures?</token>
                <token>spoke</token>
            </antipattern>
            <pattern>
                <token regexp="yes">did|do|does</token>
                <token regexp="yes">n't|not</token>
                <token postag="RB" min="0" />
                <marker>
                    <token regexp="yes" case_sensitive="yes">[Ss]poke</token>
                </marker>
            </pattern>
            <message>The verb "spoke" means "to furnish". The past tense of "speak" is incorrect in this context.</message>
            <suggestion>speak</suggestion>
            <example correction="speak">I didn't <marker>spoke</marker> to my lawyer.</example>
        </rule>
        <rule id="ALL_NN" name="All car (cars)">
            <antipattern>
                <token>all</token>
                <token regexp="yes">on|in|of</token>
                <token>all</token>
            </antipattern>
            <antipattern>
                <token>at</token>
                <token>all</token>
            </antipattern>
            <antipattern>
                <token>all</token>
                <token regexp="yes">time|afternoon|day|night|week|good|information|year|century|month|week-?end</token>
            </antipattern>
            <antipattern>
                <token postag="DT|PRP\$" postag_regexp="yes" />
                <token regexp="yes">all|many</token>
            </antipattern>
            <antipattern>
                <token>medicare</token>
                <token>for</token>
                <token>all</token>
            </antipattern>
            <antipattern>
                <token>all</token>
                <token postag="NN" />
                <token regexp="yes">can|could|would|should</token>
                <token postag="VB" />
                <token>is</token>
            </antipattern>
            <antipattern>
                <token />
                <token />
                <token />
                <token case_sensitive="yes">All</token>
                <token case_sensitive="yes" regexp="yes">[a-z].*</token>
            </antipattern>
            <pattern>
                <token chunk="B-NP-singular" regexp="yes">all|many</token>
                <token postag="JJ" chunk="I-NP-singular" min="0" />
                <marker>
                    <token chunk="E-NP-singular" postag="NN">
                        <exception postag="NNP?S|CD|NN:U|IN|W.*" postag_regexp="yes" />
                        <exception regexp="yes">mine|one|think|colou?red</exception>
                    </token>
                </marker>
                <token regexp="yes" chunk="B-VP">are|were|have|had|will|won|[cw]ouldn?|shouldn?|didn?|need(ed)?|want(ed)?|g[oe]t|can(not)?|do|go|went|take|took|liked?|loved?|ma[kd]e|kn[eo]w</token>
            </pattern>
            <message>The plural determiner '\1' requires a plural noun.</message>
            <suggestion suppress_misspelled="yes"><match no="3" postag="NNP?S" postag_regexp="yes" /></suggestion>
            <example correction="cars">All <marker>car</marker> are moving in one direction.</example>
            <example>All <marker>cars</marker> are moving in one direction.</example>
            <example>All three were wounded.</example>
            <example>All three were working well with Iris.</example>
            <example>Over two years later all six were producing clotting factor.</example>
            <example>A Medicare for All bill will pass through the congress.</example>
            <example>All KM can do is return the coordinates of the found image, and/or click on it.</example>
        </rule>
        <rulegroup id="AS_IS_VBG" name="as (it) is happening">
            <antipattern>
                <token skip="12" inflected="yes">
                    be
                    <exception>be</exception>
                </token>
                <token regexp="yes">as|since|because|if|while</token>
            </antipattern>
            <antipattern>
                <token>knowing</token>
                <token>that</token>
            </antipattern>
            <antipattern>
                <token>as</token>
                <token regexp="yes">was|is</token>
                <token min="0">more</token>
                <token postag="RB.*" postag_regexp="yes" min="0" />
                <token regexp="yes">customary|(un)?common|necessary|crucial|standard|normal|(un)?usual|traditional|typical|clear|inevitable|appropriate|natural|true|right|evident|apparent|correct|familiar|visible|known|mandatory|obligatory|required|plausible|likely|best|applicable</token>
            </antipattern>
            <antipattern>
                <token skip="8">as</token>
                <token>as</token>
            </antipattern>
            <antipattern>
                <token>such</token>
                <token>as</token>
            </antipattern>
            <antipattern>
                <token>the</token>
                <token skip="10">same</token>
                <token>as</token>
            </antipattern>
            <antipattern>
                <token>as</token>
                <token regexp="yes">was|is</token>
                <token postag="RB" min="0" />
                <token min="0">being</token>
                <token regexp="yes">said|discussed|reported|mentioned|rumou?red</token>
            </antipattern>
            <antipattern>
                <token>as</token>
                <token regexp="yes">was|is</token>
                <token postag="RB" min="0" />
                <token>happening</token>
            </antipattern>
            <antipattern>
                <token>as</token>
                <token regexp="yes">is|was</token>
                <token postag="RB" min="0" />
                <token>the</token>
                <token>case</token>
            </antipattern>
            <rule>
                <pattern>
                    <token regexp="yes">as|since|unless|because|if|while</token>
                    <marker>
                        <token>was</token>
                    </marker>
                    <token postag="RB" min="0">
                        <exception postag="IN|EX" postag_regexp="yes" />
                    </token>
                    <token postag="VBG">
                        <exception postag="IN" />
                    </token>
                </pattern>
                <message>It appears that a pronoun is missing.</message>
                <suggestion>it \2</suggestion>
                <suggestion>I \2</suggestion>
                <suggestion>she \2</suggestion>
                <suggestion>he \2</suggestion>
                <example correction="it was|I was|she was|he was">This appears to be a bug since <marker>was</marker> happening not only on my machine.</example>
                <example>Skiing and snowboarding at nearby Crabbe Mountain are also common winter activities among city residents, as is skating on the outdoor rinks at Officer's and Queen's Squares.</example>
                <example>Building smaller clocks was a technical challenge, as was improving accuracy and reliability.</example>
                <example type="triggers_error">These configurations can lead to grief - as was saying someone only 30 minutes ago on this forum.</example>
                <example type="triggers_error">Rather than being acquired by ExxonMobil Corp., BP Amoco Plc, or Royal Dutch Shell Group, as was becoming more likely with each passing month, Chevron and Texaco became their equal.</example>
            </rule>
            <rule>
                <pattern>
                    <token regexp="yes">as|since|unless|because|if|while</token>
                    <marker>
                        <token>was</token>
                    </marker>
                    <token postag="RB" min="0">
                        <exception postag="IN|EX" postag_regexp="yes" />
                    </token>
                    <token postag="JJ.*" postag_regexp="yes" chunk_re=".-AD[VJ]P">
                        <exception regexp="yes">only|just</exception>
                    </token>
                </pattern>
                <message>It appears that a pronoun is missing.</message>
                <suggestion>it \2</suggestion>
                <suggestion>I \2</suggestion>
                <suggestion>she \2</suggestion>
                <suggestion>he \2</suggestion>
                <example correction="it was|I was|she was|he was">Delete the last sentence if <marker>was</marker> too long.</example>
                <example>She was from Kyoto, as was evident from her accent.</example>
                <example>As was customary for capital ships of the period, she was equipped with three submerged torpedo tubes.</example>
                <example>He assumed that workers could be paid wages as low as was necessary for their survival.</example>
            </rule>
            <rule>
                <pattern>
                    <token regexp="yes">as|since|unless|because|if|while</token>
                    <marker>
                        <token>is</token>
                    </marker>
                    <token postag="RB" min="0">
                        <exception postag="IN|EX" postag_regexp="yes" />
                    </token>
                    <token postag="VBG" />
                </pattern>
                <message>It appears that a pronoun is missing.</message>
                <suggestion>it \2</suggestion>
                <suggestion>she \2</suggestion>
                <suggestion>he \2</suggestion>
                <example correction="it is|she is|he is">This appears to be a bug since <marker>is</marker> happening not only on my machine.</example>
                <example>Skiing and snowboarding at nearby Crabbe Mountain are also common winter activities among city residents, as is skating on the outdoor rinks at Officer's and Queen's Squares.</example>
            </rule>
            <rule>
                <pattern>
                    <token regexp="yes">as|since|unless|because|if|while</token>
                    <marker>
                        <token>is</token>
                    </marker>
                    <token postag="RB" min="0">
                        <exception postag="IN|EX" postag_regexp="yes" />
                    </token>
                    <token postag="JJ.*" postag_regexp="yes" chunk_re=".-AD[VJ]P">
                        <exception regexp="yes">only|just</exception>
                    </token>
                </pattern>
                <message>It appears that a pronoun is missing.</message>
                <suggestion>it \2</suggestion>
                <suggestion>she \2</suggestion>
                <suggestion>he \2</suggestion>
                <example correction="it is|she is|he is">Delete the last sentence if <marker>is</marker> too long.</example>
                <example>This is painful for all of us and our goal is for as many of you as is possible to know where you stand by the end of the day Tuesday, though in some cases notification will take longer.</example>
            </rule>
        </rulegroup>
        <rulegroup id="IN_TO_VBD" name="to sent (send)"><!-- Similar to TO_NON_BASE, but finds other errors -->
            <antipattern>
                <token>to</token>
                <token postag="NNS" />
                <token>that</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">up|according</token>
                <token>to</token>
            </antipattern>
            <antipattern>
                <token>to</token>
                <token regexp="yes">is|are|was|were</token>
            </antipattern>
            <rule>
                <pattern>
                    <token postag="IN|CC" postag_regexp="yes" />
                    <marker>
                        <token>to</token>
                        <token postag="VB[DNZ]" postag_regexp="yes">
                            <exception postag="VB" />
                        </token>
                    </marker>
                    <token postag="DT|PRP\$" postag_regexp="yes" />
                </pattern>
                <message>The base form is expected after "to".</message>
                <suggestion>to <match no="3" postag="VB" /></suggestion>
                <short>Agreement error</short>
                <example correction="to send">Just paste a list of e-mails below <marker>to sent</marker> our invitations to them.</example>
                <example>Oversold indicators are now starting to get up to levels that bring rallies.</example>
                <example>What it comes down to is this.</example>
                <example>The draft contains references throughout to exhibits that will be attached to the agreement that were not included in the draft.</example>
                <example>The NLD lodged an official complaint with the police, and according to reports the government launched an investigation, but no action was taken.</example>
                <example>Our commitment is to get it down to levels that aren't even trace amounts," Schafer said.</example>
            </rule>
            <rule>
                <pattern>
                    <token postag="IN|CC" postag_regexp="yes" />
                    <marker>
                        <token>to</token>
                        <token postag="VB[DNZ]" postag_regexp="yes">
                            <exception postag="VB" />
                        </token>
                    </marker>
                    <token regexp="yes">them|him|her|you|it|us|me</token>
                </pattern>
                <message>The base form is expected after "to".</message>
                <suggestion>to <match no="3" postag="VB" /></suggestion>
                <example correction="to send">Just paste a list of e-mails below <marker>to sent</marker> them the invitations.</example>
                <example correction="to give">Orlando and Sergio Assad are about <marker>to gave</marker> me their clearance to start a legal suit against ANEEL.</example>
            </rule>
        </rulegroup>
        <rule id="WHAT_TO_VBD" name="I know what to sent (send)">
            <antipattern>
                <token regexp="yes">the|an?</token>
                <token postag="JJ.*|NN|NN:UN?" postag_regexp="yes" min="0" />
                <token>how</token>
                <token>to</token>
            </antipattern>
            <antipattern>
                <token>how</token>
                <token>to</token>
                <token regexp="yes">articles|documents|examples|scripts|manuals|tips</token>
            </antipattern>
            <pattern>
                <token regexp="yes">what|which|when|who|where|why|how</token>
                <marker>
                    <token>to</token>
                    <token postag="RB" min="0">
                        <exception postag="VB" />
                    </token>
                    <token postag="VB[DNZG]" postag_regexp="yes">
                        <exception postag="VB" />
                        <exception regexp="yes">companies|is|was</exception>
                    </token>
                </marker>
            </pattern>
            <message>The base form is expected after "to".</message>
            <suggestion>to \3 <match no="4" postag="VB" /></suggestion>
            <example correction="to send">I don't know what <marker>to sent</marker> him for Christmas.</example>
            <example>I forgot to tell Tom when to come.</example>
            <example>How to live is the most important thing in life.</example>
            <example correction="to change">Any ideas on how <marker>to changes</marker> this?</example>
            <example correction="to integrate">Would you by chance have any example of how <marker>to integrated</marker> your API?</example>
        </rule>
        <rule id="THIS_TOOLS" name="This tools (These tools)"><!-- Similar to THIS_NNS but finds cases where the word after "this" is tagged as VBZ -->
            <antipattern><!-- I apologize for any sudden panic attacks this causes. -->
                <token chunk_re="E-NP.*" />
                <token>this</token>
                <token postag="VBZ" />
            </antipattern>
            <antipattern><!-- How much do you think this costs? -->
                <token postag="W.*" postag_regexp="yes" skip="10" />
                <token>this</token>
                <token>costs</token>
            </antipattern>
            <pattern>
                <token postag="VB.*" postag_regexp="yes" />
                <marker>
                    <token chunk="B-NP-plural">this</token>
                </marker>
                <token postag="NNP?S" postag_regexp="yes" chunk="E-NP-plural">
                    <exception regexp="yes">works|helps|st[ai]cks|jeans|guys|boys|girls|gals|folks|peeps|devs|friends</exception>
                    <exception postag="NN|NN:UN?|NNP|RB" postag_regexp="yes" />
                </token>
                <token postag="SENT_END" regexp="yes">\p{P}</token>
            </pattern>
            <message>Did you mean <suggestion>these</suggestion>?</message>
            <short>Agreement error</short>
            <example correction="these">Please uninstall <marker>this</marker> tools.</example>
            <example correction="these">Just follow <marker>this</marker> steps:</example>
            <example correction="these">Clearly, it is expensive and the state government cannot afford to bear <marker>this</marker> costs.</example>
            <example>Hope this helps.</example>
            <example>Any ideas for this guys?</example>
            <example>Sorry if this rambles.</example>
            <example>I can't carry this stone.</example>
            <example>Would you help me carry this upstairs?</example>
            <example>How much do you think this costs?</example>
            <example>I apologize for any sudden panic attacks this causes.</example>
        </rule>
        <rule id="THIS_TWO_MEN" name="this (these) two men">
            <antipattern>
                <token postag="CC|SENT_START|PCT" postag_regexp="yes" />
                <token postag="IN" />
                <token>this</token>
            </antipattern>
            <antipattern><!-- This 100 correlates with that. -->
                <token postag="CC|SENT_START|PCT" postag_regexp="yes" />
                <token>this</token>
                <token regexp="yes">\d+</token>
                <token postag="VBZ" />
                <token postag="IN|DT" postag_regexp="yes" />
            </antipattern>
            <antipattern>
                <token postag="NNS" />
                <token regexp="yes">ago|earlier|later|old|young|after|before|prior|beforehand</token>
            </antipattern>
            <antipattern>
                <token postag="NNS" />
                <token regexp="yes" skip="3">and|&amp;|or</token>
                <token regexp="yes">ago|earlier|later|old|young|after|before|prior|beforehand</token>
            </antipattern>
            <antipattern>
                <token>days</token>
                <token>a</token>
                <token>week</token>
            </antipattern>
            <antipattern>
                <token inflected="yes" regexp="yes">work|fight</token>
                <token regexp="yes">on|for</token>
                <token>this</token>
                <token postag="CD" />
                <token regexp="yes">minutes|hours|days|weeks|months|years|decades|centuries</token>
            </antipattern>
            <antipattern>
                <token inflected="yes">do</token>
                <token>this</token>
                <token postag="CD" />
                <token regexp="yes">minutes|hours|days|weeks|months|years|decades|centuries</token>
            </antipattern>
            <antipattern>
                <token regexp="yes">any.+</token>
                <token>like</token>
                <token>this</token>
            </antipattern>
            <pattern>
                <marker>
                    <token chunk="B-NP-plural">this</token>
                </marker>
                <token postag="CD" chunk="I-NP-plural">
                    <exception regexp="yes">one|1</exception>
                </token>
                <token postag="NN.*|JJ.*" postag_regexp="yes" chunk="I-NP-plural" min="0" />
                <token postag="NNP?S" postag_regexp="yes" chunk="E-NP-plural">
                    <exception regexp="yes">ways|times|cannon</exception>
                </token>
            </pattern>
            <message>Did you mean <suggestion>these</suggestion>?</message>
            <short>Agreement error</short>
            <example correction="These"><marker>This</marker> two men have nothing in common.</example>
            <example>You can do this 2 ways.</example>
            <example>Any update to this 24 days later?</example>
            <example>Tom does this six days a week.</example>
            <example>It does this 10 times per day.</example>
            <example>This 100 correlates with that.</example>
            <example>I've been doing this 30 years.</example>
            <example>He wrote this five days before the US invasion of Iraq.</example>
            <example>We've been working on this six months, so we have equipment lined up," said Fredericks, who searched worldwide for the parts he needed.</example>
            <example>This 25 mm cannon is a development of the GAU-12 carried by the USMC's AV-8B Harrier II.</example>
            <example type="triggers_error">This 1000 candles light ritual have really been good for me lately.</example>
        </rule>
        <rule id="WHAT_DID_VBD" name="What did happened (happen)?">
            <antipattern>
                <token regexp="yes">did|does</token>
                <token postag="JJ" chunk_re="B-NP-.*" />
                <token postag="NNP?S|NN:UN?" postag_regexp="yes" />
            </antipattern>
            <antipattern case_sensitive="yes"><!-- What did SAT originally stand for? -->
                <token regexp="yes">[Dd]id|[Dd]oes</token>
                <token regexp="yes">[A-Z]{2,5}</token>
            </antipattern>
            <antipattern>
                <token postag="VBD" />
                <token>mean</token>
            </antipattern>
            <antipattern>
                <token postag="VBD" />
                <token>stand</token>
                <token>for</token>
            </antipattern>
            <pattern>
                <token regexp="yes">(what|who|when|which|where)(ever)?</token>
                <token regexp="yes">did|does</token>
                <token postag="RB" min="0">
                    <exception>so</exception>
                </token>
                <marker>
                    <token postag="VBD">
                        <exception postag="VB|NNP" postag_regexp="yes" />
                        <exception regexp="yes">weren?|wasn?</exception>
                    </token>
                </marker>
            </pattern>
            <message>The base form of the verb <suggestion><match no="4" postag="VB" /></suggestion> is expected after "do".</message>
            <short>Agreement error</short>
            <example correction="happen">What did <marker>happened</marker> there?</example>
            <example correction="happen">What didn't <marker>happened</marker> there?</example>
            <example>Before that date, those who did so were menaced and expelled from the group.</example>
            <example>I think the only one is my family who did was my sister, and she’s not a carrier.</example>
            <example>Why did related molecules become so big?</example>
            <example>What did SAT originally stand for?</example>
            <example>What does disabled mean?</example>
            <example>20 For everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed.</example>
        </rule>
        <rule id="WHAT_DO_THAT" name="Who do (does) that?">
            <antipattern>
                <token>how</token>
                <token>come</token>
            </antipattern>
            <antipattern><!-- confusion of this/these (found by THIS_NNS) -->
                <token>this</token>
                <token chunk_re=".-NP-plural" />
            </antipattern>
            <pattern>
                <token postag="SENT_START|PCT|CC" postag_regexp="yes">
                    <exception postag="IN|VB.*" postag_regexp="yes" />
                </token>
                <token regexp="yes">(what|who|when|which|where|how)(ever)?</token>
                <marker>
                    <token postag="VB" chunk="B-VP">
                        <exception postag="VBD|MD" postag_regexp="yes" />
                    </token>
                </marker>
                <token regexp="yes" skip="-1">this|that|t?here|now|when|if|once|before|after</token>
                <token postag="SENT_END">?</token>
            </pattern>
            <message>Did you mean <suggestion><match no="3" postag="VBZ" /></suggestion>?</message>
            <short>Agreement error</short>
            <example correction="does">What <marker>do</marker> that mean?</example>
            <example>And what can that do?</example>
            <example>Why take that risk?</example>
            <example>How come this never happens to me?</example>
            <example>Since when have there been fireworks?</example>
        </rule>
        <rulegroup id="IS_RB_BE" name="He is never be (He has never been)">
            <antipattern>
                <token skip="2">'s</token>
                <token>been</token>
            </antipattern>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">s?he|it</token>
                        <token regexp="yes">is|'s</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 is \3</suggestion>
                <suggestion>\1 will \3 be</suggestion>
                <suggestion>\1 has \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="She is never|She will never be|She has never been"><marker>She is never be</marker> able to do that.</example>
                <example>It’s also been weight-neutral which is a plus in my book.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">s?he|it|I</token>
                        <token>was</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 was \3</suggestion>
                <suggestion>\1 had \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="She was never|She had never been"><marker>She was never be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">s?he|it|I</token>
                        <token regexp="yes">is|was</token>
                        <token>n't</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\5" appears to be incorrect in this context.</message>
                <suggestion>\1 \2\3 \4</suggestion>
                <suggestion>\1 won't \4 be</suggestion>
                <suggestion>\1 hadn't \4 been</suggestion>
                <short>Agreement error</short>
                <example correction="She wasn't ever|She won't ever be|She hadn't ever been"><marker>She wasn't ever be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">we|they|you</token>
                        <token regexp="yes">are|'re</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 are \3</suggestion>
                <suggestion>\1 will \3 be</suggestion>
                <suggestion>\1 have \3 been</suggestion>
                <example correction="They are never|They will never be|They have never been"><marker>They are never be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">we|they|you</token>
                        <token>are</token>
                        <token>n't</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\5" appears to be incorrect in this context.</message>
                <suggestion>\1 \2\3 \4</suggestion>
                <suggestion>\1 won't \4 be</suggestion>
                <suggestion>\1 haven't \4 been</suggestion>
                <example correction="They aren't ever|They won't ever be|They haven't ever been"><marker>They aren't ever be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">they|you|we</token>
                        <token>were</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 were \3</suggestion>
                <suggestion>\1 had \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="They were never|They had never been"><marker>They were never be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token regexp="yes">they|you|we</token>
                        <token>were</token>
                        <token>n't</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\5" appears to be incorrect in this context.</message>
                <suggestion>\1 weren't \4</suggestion>
                <suggestion>\1 hadn't \4 been</suggestion>
                <short>Agreement error</short>
                <example correction="They weren't ever|They hadn't ever been"><marker>They weren't ever be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token>I</token>
                        <token regexp="yes">am|'m</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 am \3</suggestion>
                <suggestion>\1 will \3 be</suggestion>
                <suggestion>\1 have \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="I am never|I will never be|I have never been"><marker>I'm never be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token postag="NNP" />
                        <token regexp="yes">is|was</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 \2 \3</suggestion>
                <suggestion>\1 will \3 be</suggestion>
                <suggestion>\1 has \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="Tom is never|Tom will never be|Tom has never been"><marker>Tom is never be</marker> able to do that.</example>
                <example correction="Mary is still|Mary will still be|Mary has still been">Tom is lucky that <marker>Mary is still be</marker> willing to do that.</example>
                <example>It’s also been weight-neutral which is a plus in my book.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token postag="NNP" />
                        <token regexp="yes">is|was</token>
                        <token>n't</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\5" appears to be incorrect in this context.</message>
                <suggestion>\1 \2\3 \4</suggestion>
                <suggestion>\1 won't \4 be</suggestion>
                <suggestion>\1 hasn't \4 been</suggestion>
                <short>Agreement error</short>
                <example correction="Tom isn't ever|Tom won't ever be|Tom hasn't ever been"><marker>Tom isn't ever be</marker> able to do that.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token postag="NNPS" />
                        <token regexp="yes">are|were</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\4" appears to be incorrect in this context.</message>
                <suggestion>\1 \2 \3</suggestion>
                <suggestion>\1 will \3 be</suggestion>
                <suggestion>\1 have \3 been</suggestion>
                <short>Agreement error</short>
                <example correction="Germans are never|Germans will never be|Germans have never been"><marker>Germans are never be</marker> able to do that.</example>
                <example>It’s also been weight-neutral which is a plus in my book.</example>
            </rule>
            <rule>
                <pattern>
                    <marker>
                        <token postag="NNPS" />
                        <token regexp="yes">are|were</token>
                        <token>n't</token>
                        <token regexp="yes" postag="RB">even|n?ever|now|maybe|perhaps|sometimes|n?either|soon|rather|indeed|just|also|still|often|always|almost|.*ly|not|again|already|somewhat</token>
                        <token regexp="yes">be|been</token>
                    </marker>
                    <token postag="JJ.*|PCT|VBG" postag_regexp="yes" />
                </pattern>
                <message>The verb "\5" appears to be incorrect in this context.</message>
                <suggestion>\1 \2\3 \4</suggestion>
                <suggestion>\1 won't \4 be</suggestion>
                <suggestion>\1 haven't \4 been</suggestion>
                <short>Agreement error</short>
                <example correction="Germans aren't ever|Germans won't ever be|Germans haven't ever been"><marker>Germans aren't ever be</marker> able to do that.</example>
                <example>It’s also been weight-neutral which is a plus in my book.</example>
            </rule>
        </rulegroup>
        <rule id="LADIES_AND_GENTLEMAN" name="ladies and gentleman (gentlemen)">
            <pattern>
                <token>ladies</token>
                <token regexp="yes">and|&amp;</token>
                <marker>
                    <token>gentleman</token>
                </marker>
            </pattern>
            <message>Did you mean the plural form <suggestion>gentlemen</suggestion>?</message>
            <short>Agreement error</short>
            <example correction="gentlemen">Ladies and <marker>gentleman</marker>, please stand up.</example>
        </rule>
        <rule id="IN_LOVED_WITH" name="In loved (love) with">
            <pattern>
                <token>in</token>
                <marker>
                    <token regexp="yes">loved|troubled</token>
                </marker>
                <token regexp="yes">with|for|because</token>
            </pattern>
            <message>Did you mean <suggestion><match no="2" regexp_match="(?i)d$" regexp_replace="" /></suggestion>?</message>
            <example correction="love">Layla had a breakup with the guy she was in <marker>loved</marker> with.</example>
        </rule>
        <rulegroup id="THERE_MISSING_VERB" name="There (are) a lot of …">
            <antipattern>
                <token regexp="yes" skip="5">t?here</token>
                <token inflected="yes" skip="5">be</token>
                <token regexp="yes">and|&amp;|,</token>
                <token regexp="yes">t?here</token>
            </antipattern>
            <rule>
                <antipattern><!-- And therefore the name thereof was called Babel, because there the language of the whole earth was confounded. -->
                    <token regexp="yes" skip="-1">
                        t?here
                        <exception scope="next" regexp="yes">that|who|where|please|because</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token chunk="B-VP" postag="VB[DP]?|MD" postag_regexp="yes" />
                </antipattern>
                <pattern>
                    <token postag="PCT|SENT_START|CC" postag_regexp="yes" />
                    <marker>
                        <token regexp="yes">t?here</token>
                    </marker>
                    <token min="0">a</token>
                    <token regexp="yes">lots?|bunch|tons?|plenty|couple|number|few|handful</token>
                    <token>of</token>
                    <token chunk="B-NP-plural" min="0" />
                    <token chunk="I-NP-plural" postag="JJ.*|NN.*" postag_regexp="yes" min="0" />
                    <token chunk="E-NP-plural" postag="NN.*" postag_regexp="yes" />
                    <token postag="PCT|IN|PRP|DT|CC|TO|RB|W.*" postag_regexp="yes" />
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>\2 are</suggestion>
                <example correction="There are"><marker>There</marker> a lot of different ways to explain this.</example>
                <example correction="There are"><marker>There</marker> a couple of things to think about.</example>
                <example correction="there are">Basically, <marker>there</marker> a bunch of approaches out there - it’s a question about what you’re wanting to do.</example>
                <example correction="There are"><marker>There</marker> a number of other options, and many combinations you can use.</example>
                <example correction="There are"><marker>There</marker> a couple of ways to do what you want.</example>
                <example>There a total of 6,864,201 students enrolled in 61,529 schools.</example>
                <example>Sami worked there a couple of nights.</example>
            </rule>
            <rule>
                <antipattern><!-- And therefore the name thereof was called Babel, because there the language of the whole earth was confounded. -->
                    <token regexp="yes" skip="-1">
                        t?here
                        <exception scope="next" regexp="yes">that|who|where|please|because</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token chunk="B-VP" postag="VB[DP]?|MD" postag_regexp="yes" />
                </antipattern>
                <pattern>
                    <token inflected="yes" regexp="yes" chunk_re=".-VP">think|hope|believe|doubt|assume</token>
                    <marker>
                        <token regexp="yes">t?here</token>
                    </marker>
                    <token min="0">a</token>
                    <token regexp="yes">lots?|bunch|tons?|plenty|couple|number|handful</token>
                    <token>of</token>
                    <token chunk="B-NP-plural" min="0" />
                    <token chunk="I-NP-plural" postag="JJ.*|NN.*" postag_regexp="yes" min="0" />
                    <token chunk="E-NP-plural" postag="NN.*" postag_regexp="yes" />
                    <token postag="PCT|IN|PRP|DT|CC|TO|RB|W.*" postag_regexp="yes" />
                </pattern>
                <message>A verb may be missing.</message>
                <suggestion>\2 are</suggestion>
                <example correction="there are">I think <marker>there</marker> a lot of different ways to explain this.</example>
                <example>Sami worked there a couple of nights.</example>
            </rule>
            <rule>
                <antipattern><!-- plural chunks -->
                    <token>a</token>
                    <token regexp="yes">lot|total</token>
                </antipattern>
                <antipattern><!-- And therefore the name thereof was called Babel, because there the language of the whole earth was confounded. -->
                    <token regexp="yes" skip="-1">
                        t?here
                        <exception scope="next" regexp="yes">that|who|where|please|because</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token chunk="B-VP" postag="VB[ZD]|MD" postag_regexp="yes" />
                </antipattern>
                <antipattern><!-- Same as above but also catches cases where chunking doesn't work -->
                    <token regexp="yes" skip="-1">
                        t?here
                        <exception scope="next" regexp="yes">that|who|where|please|because|to</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token inflected="yes" regexp="yes">be|will|have|do|should|can</token>
                </antipattern>
                <antipattern><!-- The E2 mechanism also requires a base, but there the attack of the base and the elimination of the leaving group proceed simultaneously and produce no ionic intermediate.  -->
                    <token regexp="yes" skip="-1">
                        t?here
                        <exception scope="next" regexp="yes">that|who|where|please|because|to</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token regexp="yes" skip="-1">
                        and|or|&amp;
                        <exception scope="next" regexp="yes">that|who|where|please|because|to</exception>
                        <exception scope="next" regexp="yes">:|;</exception>
                        <exception scope="next" postag="PRP" />
                    </token>
                    <token chunk="B-VP" postag="VBP" />
                </antipattern>
                <antipattern><!-- There the Jew, the Mahometan [Muslim], and the Christian transact together -->
                    <token regexp="yes">t?here</token>
                    <token regexp="yes" skip="5">the|an?</token>
                    <token>,</token>
                    <token regexp="yes" skip="5">the|an?</token>
                    <token>and</token>
                    <token regexp="yes" skip="3">the|an?</token>
                    <token postag="VB.*" postag_regexp="yes" />
                </antipattern>
       