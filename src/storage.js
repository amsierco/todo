// Page project storage
export const projectStorage = (() => {
    let storage = [];
    let active;

    const getStorage = () => {return storage;}
    const addToStorage = (obj) => {storage.push(obj);}
    const setActiveProject = (obj) => {active = obj;}
    const getActiveProject = () => {return active;}

    return {getStorage, addToStorage, setActiveProject, getActiveProject};
})();
