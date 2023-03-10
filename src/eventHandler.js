import { getDOM } from "./DOM";
import { thumbnailPrompt } from "./DOM";
import { displayThumbnail } from "./DOM";
import { Project } from "./project";
import { projectStorage } from "./storage";
import { projectWindow } from "./DOM";

const loadProjectPage = (obj) => {
    console.log('Loading page: '+obj.title);

    getDOM.mainPage.classList.toggle('active');
    let page = getDOM.projectPage;

    // Fill in page with stored data //

    page.classList.toggle('active');
    page.appendChild(projectWindow.container);
}

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
        thumbnail.addEventListener('click', () => {
            loadProjectPage(newProject);
        });

    });

})();
