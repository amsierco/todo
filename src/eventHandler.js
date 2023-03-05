import { getDOM } from "./DOM";
import { displayProjectPrompts } from "./DOM";
import { project } from "./project";
import { projectStorage } from "./storage";
import { displayProjectPreview } from "./DOM";


export const addNewProject = (() => {

    const prompt = displayProjectPrompts.thumbnailPrompt;
    var newProject;

    // New project event
    getDOM.newProjectButton.addEventListener('click', () => {
        prompt.thumbnailModal.classList.toggle('active');
    });

    // Project thumbnail on form submit event
    prompt.thumbnailForm.addEventListener('submit', e => {
        e.preventDefault();
        let _title = prompt.thumbnailForm.elements[0].value;
        let _description = prompt.thumbnailForm.elements[1].value;
        prompt.thumbnailForm.reset();
        prompt.thumbnailModal.classList.remove('active');

        newProject = project.createProject(_title, _description);
        //newProject.changeTitle('Bananas!');
        projectStorage.addToStorage(newProject);
        
        let card = displayProjectPreview.createPreview(_title, _description);
        card.addEventListener('click', () => {
            document.body.style.display = 'none';
        });
        
        //TESTING
        /*
        Array.from(projectStorage.getStorage()).forEach(p => 
            console.log(p.title+' '+p.description)
        );console.log('             ');
        */
    });

})();
