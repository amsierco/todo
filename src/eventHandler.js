import { getDOM } from "./DOM";
import { displayProjectPrompts } from "./DOM";
import { project } from "./project";
import { projectStorage } from "./storage";


export const addNewProject = (() => {

    const prompt = displayProjectPrompts.thumbnailPrompt;
    var newProject;

    getDOM.newProjectButton.addEventListener('click', () => {
        prompt.thumbnailModal.classList.toggle('active');
    });

    prompt.thumbnailForm.addEventListener('submit', e => {
        e.preventDefault();
        let _title = prompt.thumbnailForm.elements[0].value;
        let _description = prompt.thumbnailForm.elements[1].value;
        prompt.thumbnailForm.reset();
        prompt.thumbnailModal.classList.remove('active');

        newProject = project.createProject(_title, _description);
        newProject.changeTitle('Bananas!');
        projectStorage.addToStorage(newProject);
        
        //TESTING
        console.log('POST: '+projectStorage.getStorage()[0].title+' '+projectStorage.getStorage()[0].description);
    });

})();
