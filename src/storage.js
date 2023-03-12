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
        //localStorage.setItem("activeProject", JSON.stringify(active));
    }

    function getExternalStorage() {

        tempStorage = JSON.parse(localStorage.getItem("projectData"));
        //active = JSON.parse(localStorage.getItem("activeProject"));
        if(tempStorage === null){tempStorage=[];}
        return (tempStorage);
    }

    return {
        getStorage, 
        addToStorage, 
        setActiveProject, 
        getActiveProject,
        populateExternalStorage,
        getExternalStorage
    };
})();
