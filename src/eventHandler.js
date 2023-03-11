import { getDOM } from "./DOM";
import { thumbnailPrompt } from "./DOM";
import { displayThumbnail } from "./DOM";
import { Project } from "./project";
import { projectStorage } from "./storage";
import { projectWindow } from "./DOM";
import { cardPrompt } from "./DOM";
import { card } from "./DOM";

// Load project page
const loadProjectPage = (page) => {
    // todo
    for(let i=0; i<page.todo.length; i++){
        let newCard = card.container;
        projectWindow.taskArray[0].querySelector('.column-content').appendChild(newCard);
        console.log('added!');
    }
    

}

// Add new card to project page
export const AddNewCard = (obj) => {
    /*
    HTML class must be column followed by type
    */

    document.querySelector('.todo-container').appendChild(cardPrompt.cardModal);
    const prompt = cardPrompt;
    let type = obj.getAttribute('class').substring(7);

    prompt.cardModal.classList.toggle('active');
    prompt.cardForm.addEventListener('submit', e => {

        // Collect form data
        e.preventDefault();
        let info = prompt.cardForm.elements[0].value;
        let date = prompt.cardForm.elements[1].value;
        prompt.cardForm.reset();
        prompt.cardModal.classList.remove('active');

        // Add to appropriate storage in project class
        if(info != null){
            projectStorage.getActiveProject().add(type, info, date);
        }

        // Display new card
        loadProjectPage(projectStorage.getActiveProject());

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

        // Display preview card
        let thumbnail = displayThumbnail(title, description);

        // Load project page
        thumbnail.addEventListener('click', () => {
            getDOM.mainPage.classList.toggle('active');
            let page = getDOM.projectPage;
            page.classList.toggle('active');
            page.appendChild(projectWindow.container);
            projectStorage.setActiveProject(newProject);
            loadProjectPage(projectStorage.getActiveProject());
        });
    });
})();
