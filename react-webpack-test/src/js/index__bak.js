//出现最多的字符是什么
// var chString = 'asdfssaaasasasasaa';
// var json ={};
// var countit = (charme)=>{
//     for(let i=0,len=charme.length;i<len;i++){
//         if(!json[charme.charAt(i)]){
//             json[charme.charAt(i)]=1;
//         }else{
//             json[charme.charAt(i)]++;
//         }
//     }
//     return json;
// }
// countit(chString);
// console.log(json);
// var maxi = 0;
// var indexI = '';
// for(let idx in json){
//     if(json[idx]>maxi){
//         maxi = json[idx];
//         indexI = idx;
//     }
// }

// console.log('max count:'+maxi+',who:'+indexI)
//测试事件target
// var btn = document.querySelector('#btn');
// var atc = document.querySelector('#atc')
// btn.addEventListener('click',(e)=>{
//     atc.innerHTML = 'aas';
//     console.log(e.target);
//     console.log(e.currentTarget);

// })
//数组去重
// var arr = [1,2,3,1,43,12,12,1];

// var unarr = (arr)=>{
//     let ret = [];
//     for(let i=0,len=arr.length;i<len;i++){
//         if(ret.indexOf(arr[i])===-1){
//             ret.push(arr[i]);
//         }
//     }
//     return ret;
// }

// console.log(unarr(arr));

//对应初始数组的索引
// var arr = [9,8,7,3,6,5,2,4];
// var arr2 = [9,8,7,3,6,5,2,4];
// var arr2 = arr2.sort((a,b)=>{
//     return a-b;
// })
// arr2 = arr2.reverse();
// var arr3 = [];
// for(let i=0,len=arr2.length;i<len;i++){
//     arr3.push(arr.indexOf(arr2[i]))
// }
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// import * as search from './search'
// import * as exc from './stringExc'
// var urlarg = search.searchArg();
// var _excstr = exc._excstr;
// var astr = '开发测试团 队测技术整 合真val llle ';
// console.log(_excstr.toArray(astr));
// console.log(_excstr.delSpace(astr))
//console.log(urlarg)
import * as asyncPage from './async';
var async = asyncPage.async;
async.requsetXHR({
    method:'post',
    url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json',
    data:{
        name:'ssss'
    },
    beforeInit:()=>{
        alert(1);
    },
    response(res){
        console.log(res);
    }
})
