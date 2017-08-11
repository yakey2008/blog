export default {
    setdata(key, val) {
        return window.localStorage.setItem(key, val);
    },
    getdata(key) {
        return window.localStorage.getItem(key);
    },
    removedata(key) {
        if (typeof key === 'string') {
            window.localStorage.removeItem(key);
        } else {
            key.forEach((el) => {
                window.localStorage.removeItem(el);
            })
        }
    },
    cleardata() {
        window.localStorage.clear();
    }
}