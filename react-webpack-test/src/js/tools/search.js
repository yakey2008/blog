var searchArg = function(){
    var arg = decodeURI(window.location.search).split('&');
    return arg;
}
export {searchArg};