// Page project storage
export const projectStorage = (() => {
    let storage = [];

    const getStorage = () => {return storage;}
    const addToStorage = (obj) => {storage.push(obj);}

    return {getStorage, addToStorage};
})();
