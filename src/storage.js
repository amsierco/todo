import {project} from "./project";

export const projectStorage = (() => {
    let storage = [];
    function getStorage() {
        //console.log('Storage called: '+storage);
        return storage;
    }
    function addToStorage(obj) {
        //console.log('Add storage called: '+obj);
        storage.push(obj);
    }

    return {getStorage, addToStorage};
})();
