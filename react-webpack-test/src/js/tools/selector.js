export var selector = {
    gtcls:(className)=>{
        let cls = '';
        if(document.querySelectorAll){
            cls = document.querySelectorAll(className).length;
            // for(var i=0,len=cls.length;i<len;i++){
            //     cls[i];
            // }
        }else if(document.getElementsByName){
            document.getElementsByClassName(className);
        }else{
            
        }
    }
}