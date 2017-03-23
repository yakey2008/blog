/**
 * 导出表情匹配对象
 * messages(Array) 表情标记
 * changeToCH(Object) 转换成中文显示textarea
 * changeToEn(Object) 点击发送后转换回图片
 */
export default {
	messages : [
        ':angry:', ':anguished:', ':astonished:', ':disappointed:', ':blush:', ':bowtie:',
        ':cold_sweat:', ':confounded:', ':confused:',':cry:', ':relieved:', ':satisfied:',
        ':tired_face:', ':relaxed:', ':scream:', ':sunglasses:', ':dizzy_face:', ':expressionless:',
        ':fearful:', ':flushed:', ':frowning:',  ':grin:', ':grinning:',
        ':heart_eyes:', ':hushed:', ':innocent:', ':joy:', ':kissing:', ':kissing_heart:',
        ':neutral_face:', ':open_mouth:', ':pensive:', ':persevere:', ':rage:', ':sleeping:', ':sleepy:', ':smile:',
        ':kissing_smiling_eyes:', ':laughing:', ':mask:',  ':smirk:', ':smiley:', ':sob:',
        ':stuck_out_tongue:', ':weary:', ':wink:', ':worried:', ':yum:', ':sweat_smile:', ':sweat:', ':triumph:',
        ':unamused:',':stuck_out_tongue_closed_eyes:', ':stuck_out_tongue_winking_eye:',':full_moon_with_face:',':smiling_imp:',':v:', ':point_up_2:', ':point_up:',
        ':point_down:', ':point_left:', ':point_right:',':clap:', ':+1:', ':-1:',':tada:', 
        ':crying_cat_face:', ':scream_cat:', ':heart_eyes_cat:', ':joy_cat:', ':kissing_cat:', ':pouting_cat:',
        ':smile_cat:',":smirk_cat:",':heart:', ':gift_heart:', ':gift:', ':balloon:', ':bicyclist:', ':beer:',
        ':bomb:', ':bouquet:', ':broken_heart:', ':raised_hands:', ':crown:', ':pray:', ':poop:', ':fire:', ':ghost:', ':heavy_exclamation_mark:',
        ':see_no_evil:',':pill:'
    ],
    changeToCH:{
        ":angry:":"[生气]",":anguished:":"[痛苦]",":astonished:":"[惊讶]",":disappointed:":"[失望]",":blush:":"[脸红]",":bowtie:":"[绅士]",
        ":cold_sweat:":"[冷汗]",":confounded:":"[糊涂]",":confused:":"[困惑]",":cry:":"[哭]", ":relieved:":"[放松]",":satisfied:":"[满意]",
        ":tired_face:":"[怕怕]", ":relaxed:":"[放松]",":scream:":"[尖叫]", ":see_no_evil:":"[捂眼]",":dizzy_face:":"[晕]",":expressionless:":"[面瘫]",
        ":fearful:":"[可怕]",":flushed:":"[瞪眼]",":frowning:":"[皱眉]",":full_moon_with_face:":"[无语]",":grin:":"[咧嘴]",":grinning:":"[咧嘴笑]",
        ":heart_eyes:":"[喜欢]", ":hushed:":"[嘘]",":innocent:":"[天真]",":joy:":"[苦笑]",
        ":kissing:":"[喜爱]", ":kissing_heart:":"[亲吻]",":neutral_face:":"[中立]",":open_mouth:":"[张嘴]",":pensive:":"[沉思]",
        ":persevere:":"[坚持]",":rage:":"[愤怒]", ":sleeping:":"[睡觉]",":sleepy:":"[困]",":smile:":"[微笑]",
        ":kissing_smiling_eyes:":"[亲亲]",":laughing:":"[大笑]",":mask:":"[口罩]", ":smiling_imp:":"[邪恶]",":smirk:":"[傻笑]",
        ":smiley:":"[笑脸]", ":sob:":"[哽咽]",":stuck_out_tongue:":"[吐舌头]",":v:":"[耶]",":weary:":"[疲惫]",
        ":wink:":"[眨眼]",":worried:":"[担心]",":yum:":"[甜心]",":sweat_smile:":"[汗]",":sweat:":"[晕菜]",":triumph:":"[喘气]",":unamused:":"[不服]",
        ":stuck_out_tongue_closed_eyes:":"[搞怪]",":stuck_out_tongue_winking_eye:":"[吐舌头]",
        ":point_up_2:":"[指点]",":point_up:":"[指点]",":point_down:":"[指下]",":point_left:":"[指左]",
        ":point_right:":"[指右]",":poop:":"[便便]",":pray:":"[保佑]",":raised_hands:":"[举手]",
        ":tada:":"[喝彩]",":+1:":"[棒]",":-1:":"[差]",":crying_cat_face:":"[可怜猫]", ":scream_cat:":"[尖叫猫]",
        ":heart_eyes_cat:":"[猫喜欢]", ":joy_cat:":"[苦笑猫]", ":kissing_cat:":"[猫喜爱]", ":pouting_cat:":"[猫冲动]",
        ":smile_cat:":"[开心猫]", ":smirk_cat:":"[笑脸猫]", ":heart:":"[心]", ":gift_heart:":"[心礼物]", ":gift:":"[礼物]",
        ":balloon:":"[气球]",":bicyclist:":"[自行车]",":beer:":"[啤酒]",":bomb:":"[爆炸]",":bouquet:":"[鲜花]",
        ":broken_heart:":"[心碎]",":clap:":"[鼓掌]",":crown:":"[皇冠]",":fire:":"[火焰]",":ghost:":"[幽灵]",
        ":heavy_exclamation_mark:":"[感叹号]",":sun_with_face:":"[阳光]", ":sunglasses:":"[墨镜]", ":pill:":"[药丸]"
    },

    changeToEn:{
        "[生气]":":angry:","[痛苦]":":anguished:","[惊讶]":":astonished:","[失望]":":disappointed:","[脸红]":":blush:","[绅士]":":bowtie:","[冷汗]":":cold_sweat:","[糊涂]":":confounded:","[困惑]":":confused:","[哭]":":cry:","[放松]":":relieved:","[满意]":":satisfied:","[指点]":":point_up_2:","[放松]":":relaxed:","[尖叫]":":scream:", "[捂眼]":":see_no_evil:","[晕]":":dizzy_face:","[面瘫]":":expressionless:","[可怕]":":fearful:","[瞪眼]":":flushed:","[皱眉]":":frowning:","[无语]":":full_moon_with_face:","[咧嘴]":":grin:","[咧嘴笑]":":grinning:","[喜欢]":":heart_eyes:", "[嘘]":":hushed:","[天真]":":innocent:","[苦笑]":":joy:","[喜爱]":":kissing:", "[亲吻]":":kissing_heart:","[中立]":":neutral_face:","[张嘴]":":open_mouth:","[沉思]":":pensive:","[坚持]":":persevere:","[愤怒]":":rage:", "[睡觉]":":sleeping:","[困]":":sleepy:","[微笑]":":smile:",
    "[亲亲]":":kissing_smiling_eyes:","[大笑]":":laughing:","[口罩]":":mask:", "[邪恶]":":smiling_imp:","[傻笑]":":smirk:","[笑脸]":":smiley:",
    "[哽咽]":":sob:","[吐舌头]":":stuck_out_tongue:","[耶]":":v:","[疲惫]":":weary:","[眨眼]":":wink:","[担心]":":worried:","[甜心]":":yum:","[汗]":":sweat_smile:","[晕菜]":":sweat:",
    "[喘气]":":triumph:","[不服]":":unamused:",
    "[搞怪]":":stuck_out_tongue_closed_eyes:","[吐舌头]":":stuck_out_tongue_winking_eye:",
    "[怕怕]":":tired_face:", "[指点]":":point_up:","[指下]":":point_down:","[指左]":":point_left:","[指右]":":point_right:",
    "[便便]":":poop:","[保佑]":":pray:","[举手]":":raised_hands:","[喝彩]":":tada:","[棒]":":+1:","[差]":":-1:",
    "[可怜猫]":":crying_cat_face:", "[尖叫猫]":":scream_cat:", "[猫喜欢]":":heart_eyes_cat:", "[苦笑猫]":":joy_cat:",
    "[猫喜爱]":":kissing_cat:", "[猫冲动]":":pouting_cat:", "[开心猫]":":smile_cat:", "[笑脸猫]":":smirk_cat:", "[心]":":heart:", "[心礼物]":":gift_heart:", "[礼物]":":gift:", "[气球]":":balloon:","[自行车]":":bicyclist:","[啤酒]":":beer:","[爆炸]":":bomb:","[鲜花]":":bouquet:",
    "[心碎]":":broken_heart:","[鼓掌]":":clap:","[皇冠]":":crown:","[火焰]":":fire:","[幽灵]":":ghost:",
    "[感叹号]":":heavy_exclamation_mark:", "[阳光]":":sun_with_face:",  "[墨镜]":":sunglasses:", "[药丸]":":pill:"
    }
}
