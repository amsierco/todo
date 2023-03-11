import { getDOM } from "./DOM";
import { thumbnailPrompt } from "./DOM";
import { displayThumbnail } from "./DOM";
import { Project } from "./project";
import { projectStorage } from "./storage";
import { projectWindow } from "./DOM";
import { cardPrompt } from "./DOM";

// // Load project page
const loadProjectPage = (obj) => {
    //console.log('Loading page: '+obj.title);
    getDOM.mainPage.classList.toggle('active');
    let page = getDOM.projectPage;
    page.classList.toggle('active');
    page.appendChild(projectWindow.container);
    projectStorage.setActiveProject(obj);
    // LOAD PAGE //

}

// Add new card to project page
export const AddNewCard = (obj) => {
    /*
    HTML class must be column followed by type
    */
    //console.log(obj.getAttribute('class').substring(7)); //Error on input class obj

    document.querySelector('.todo-container').appendChild(cardPrompt.cardModal);
    const prompt = cardPrompt;
    let type = obj.getAttribute('class').substring(7);
    /*projectStorage.getActiveProject;*/

    prompt.cardModal.classList.toggle('active');
    prompt.cardForm.addEventListener('submit', e => {

        // Collect form data
        e.preventDefault();
        let info = prompt.cardForm.elements[0].value;
        let date = prompt.cardForm.elements[1].value;
        prompt.cardForm.reset();
        prompt.cardModal.classList.remove('active');

        if(info != null){
            console.log(projectStorage.getActiveProject.title);
            //projectStorage.getActiveProject.add(type, info, date);
            console.log('Card Added');
            //console.log(projectStorage.getActiveProject.todo);
        }

    });
};

// Create new project
export const AddNewProject = (() => {
    const prompt = thumbnailPrompt;

    // Display thumbnail prompt
    getDOM.newProjectButton.addEventListener('click', () => {
        prompt.thumbnailModal.classList.toggle('active');
    });

    // Project thumbnail on form submit event
    prompt.thumbnailForm.addEventListener('submit', e => {

        // Collect form data
        e.preventDefault();
        let title = prompt.thumbnailForm.elements[0].value;
        let description = prompt.thumbnailForm.elements[1].value;
        prompt.thumbnailForm.reset();
        prompt.thumbnailModal.classList.remove('active');

        // Create new project object and add to storage
        let newProject = Project();
        newProject.create(title, description);
        projectStorage.addToStorage(newProject);

        projectStorage.setActiveProject(newProject);
        console.log('test: '+projectStorage.getActiveProject().title);

        // Display preview card
        let thumbnail = displayThumbnail(title, description);
        thumbnail.addEventListener('click', () => {
           loadProjectPage(newProject);
        });
    });
})();
