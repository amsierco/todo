// Page project storage
export const projectStorage = (() => {
    let storage = [];
    let active;

    const getStorage = () => {return storage;}
    const addToStorage = (obj) => {storage.push(obj);}
    const setActiveProject = (obj) => {
        if(active === obj){return;}
        active = obj;
    }
    const getActiveProject = () => {return active;}

    const populateExternalStorage = () => {
        localStorage.setItem('projectData', storage);
        localStorage.setItem('activeProject', active);
        console.log('Storage Updated!');
    }

    const getExternalStorage = () => {
        console.log('External Storage Fetch Called!');
        storage = localStorage.getItem('projectData');
        active = localStorage.getItem('activeProject');
        console.log('storage: '+typeof(storage));
    };

    // if(storage != undefined || active != undefined){
    //     storage.onchange = populateExternalStorage();
    //     active.onchange = populateExternalStorage();
    // }

    return {
        getStorage, 
        addToStorage, 
        setActiveProject, 
        getActiveProject,
        populateExternalStorage,
        getExternalStorage
    };
})();
