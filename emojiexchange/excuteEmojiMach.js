import emojiData from './emojiData';


/**
 * 返回中文标记的字符串
 * @param {String} emojiCode 图片名称标记
 */
export function shiftToCH(emojiCode){
    let emojiCH='';
    for(let item in emojiData.changeToCH){
        if(item === ':'+emojiCode+':'){
            emojiCH = emojiData.changeToCH[item]
        }
    }
    return emojiCH;
}
// console.log(shiftToCH('angry'))

/**
 * 返回匹配成为英文标记的字符串
 * @param {String} str 要发送的字符串 
 */

export function shiftToEN(str){
    let pattern = /\[.*?\]/gm; //懒惰匹配[表情]
    let emojiList = str.match(pattern);
    emojiList.forEach((item)=>{
        for(let enItem in emojiData.changeToEn){
            if(enItem === item){
                let emojiCode = emojiData.changeToEn[enItem].substring(1,emojiData.changeToEn[enItem].length-1);
                str = str.replace(item,':'+emojiCode+':') 
            }
        }
    })
    return str;
}

// console.log(shiftToEN('大师大师[爆炸][生气]的[爆炸]'))

/**
 * 返回带有i标签表情的html结构字符串
 * @param {String} str 需要匹配i标签的字符串 
 */
function shiftListToEmoji(str){
    emojiData.messages.forEach((item)=>{        
        let reg = new RegExp("("+item+")","g");
            str = str.replace(reg,'<i class="emoji emoji_'+item.substring(1,item.length-1)+'"></i>')
    })
    return str;
}
// console.log(shiftListToEmoji('大师:大师:bomb::angry:的:bomb:'))