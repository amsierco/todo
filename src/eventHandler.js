import { getDOM } from "./DOM";
import { thumbnailPrompt } from "./DOM";
import { displayThumbnail } from "./DOM";
import { Project } from "./project";
import { projectStorage } from "./storage";



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
        let newProject = Project().create(title, description);
        projectStorage.addToStorage(newProject);
        
        // Display preview card
        let card= displayThumbnail(title, description);
    });
})();
