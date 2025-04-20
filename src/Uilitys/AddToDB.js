const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("Read");
    if (storedBookSTR) {
        const storeBookData = JSON.parse(storedBookSTR);
        return storeBookData;
    }
    else {
        return [];
    }
}
const addToStoreDB = (id) => {
    const storeBookData = getStoredBook();
    if (storeBookData.includes(id)) {
        // console.log('hellow');
        alert('this id already exist')
    }
    else {
        storeBookData.push(id);
        console.log(storeBookData);
        
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('Read', data)
    }
}
export { addToStoreDB,getStoredBook };