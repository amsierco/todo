//import {project} from "./project";

export const projectStorage = (() => {
    
    let storage = [];

    function getStorage() {
        return storage;
    }
    function addToStorage(obj) {
        storage.push(obj);
    }

    return {getStorage, addToStorage};
})();
