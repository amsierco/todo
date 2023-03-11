
// Page project storage
export const projectStorage = (() => {
    var storage = [];
    var tempStorage = [];
    var active;

    const getStorage = () => {return storage;}
    const addToStorage = (obj) => {storage.push(obj);}
    const setActiveProject = (obj) => {
        if(active === obj){return;}
        active = obj;
    }
    const getActiveProject = () => {return active;}

    function populateExternalStorage() {
        localStorage.setItem("projectData", JSON.stringify(storage));
        localStorage.setItem("activeProject", JSON.stringify(active));
        //console.log('update: '+JSON.stringify(storage));
    }

    const getExternalStorage = () => {
        //console.log('External Storage Fetch Called!');
        storage = [];
        tempStorage = JSON.parse(localStorage.getItem("projectData"));
        if(localStorage.getItem("activeProject") != 'undefined'){
            active = JSON.parse(localStorage.getItem("activeProject"));
        }
        return (tempStorage);
        //console.log('retrieve: '+JSON.parse(localStorage.getItem("projectData")).length);
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
