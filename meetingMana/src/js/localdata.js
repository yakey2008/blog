export default {
    setdata(key, val) {
        return window.localStorage.setItem(key, val);
    },
    getdata(key) {
        return window.localStorage.getItem(key);
    },
    removedata(key){
        window.localStorage.removeItem(key);
    },
    cleardata(){
        window.localStorage.clear();
    }
}