// Page project storage
export const projectStorage = (() => {
    var storage = [];
    var tempStorage = [];
    var active;

    const getStorage = () => {return storage;}

    const addToStorage = (obj) => {
        storage.push(obj);
        populateExternalStorage();
    }

    const setActiveProject = (obj) => {
        if(active === obj){return;}
        active = obj;
    }

    const getActiveProject = () => {return active;}

    function populateExternalStorage() {     
        localStorage.setItem("projectData", JSON.stringify(storage));
    }

    function getExternalStorage() {
        storage = [];
        tempStorage = JSON.parse(localStorage.getItem("projectData"));
        if(tempStorage === null){tempStorage=[];}
        return (tempStorage);
    }

    function removeItem(item){
        storage.splice(item, 1);
        populateExternalStorage();
    }

    return {
        getStorage, 
        addToStorage, 
        setActiveProject, 
        getActiveProject,
        populateExternalStorage,
        getExternalStorage,
        removeItem
    };
})();
