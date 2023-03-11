import { getDOM } from "./DOM";
import { thumbnailPrompt } from "./DOM";
import { displayThumbnail } from "./DOM";
import { projectWindow } from "./DOM";
import { cardPrompt } from "./DOM";
import { displayCard } from "./DOM";
import { Project } from "./project";
import { projectStorage } from "./storage";
import { format } from 'date-fns'
import { parse } from "date-fns";

// On page load
window.addEventListener('load', () => {
    projectStorage.getExternalStorage();
    let initialStorage = projectStorage.getStorage();

    // Thumbnails
    // console.log(initialStorage.length);
    // for(let i=0; i<initialStorage.length; i++){
    //     //displayThumbnail(title, description, date)
    //     displayThumbnail(
    //         initialStorage[i].title,
    //         initialStorage[i].description,
    //         initialStorage[i].date
    //     );

    //     console.log(
    //         initialStorage[i].title+' '+
    //         initialStorage[i].description+' '+
    //         initialStorage[i].date
    //     );

        //getDOM.thumbnailContainer.append(initialStorage[i]);
    // }

    console.log('page loaded!');
});

// Load project page
const loadProjectPage = () => {
    //console.log('todo: '+projectStorage.getActiveProject().todo.length+' prog: '+projectStorage.getActiveProject().inProgress.length+' done: '+projectStorage.getActiveProject().done.length);
    
    // Active project reference
    let active = projectStorage.getActiveProject();

    // Wipe children
    projectWindow.taskArray[0].querySelector('.column-content').replaceChildren();
    projectWindow.taskArray[1].querySelector('.column-content').replaceChildren();
    projectWindow.taskArray[2].querySelector('.column-content').replaceChildren();

    // Todo
    for(let i=0; i<active.todo.length; i++){
        let newCard = displayCard(
            active.todo[i].info,
            active.todo[i].date
        );
        projectWindow.taskArray[0].querySelector('.column-content').append(newCard);
    }

    // In-progress
    for(let i=0; i<active.inProgress.length; i++){
        let newCard = displayCard(
            active.inProgress[i].info,
            active.inProgress[i].date
        );
        projectWindow.taskArray[1].querySelector('.column-content').append(newCard);
    }

    // Done
    for(let i=0; i<active.done.length; i++){
        let newCard = displayCard(
            active.done[i].info,
            active.done[i].date
        );
        projectWindow.taskArray[2].querySelector('.column-content').append(newCard);
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
        loadProjectPage();

    }, { once: true });

    projectStorage.populateExternalStorage();
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
        let date = prompt.thumbnailForm.elements[2].value;
        if(date != ''){
            date = parse(date, 'yyyy-MM-dd', new Date());
            date = format(date, 'MM/dd/yyyy');
        }
        prompt.thumbnailForm.reset();
        prompt.thumbnailModal.classList.remove('active');

        // Create new project object and add to storage
        let newProject = Project();
        newProject.create(title, description, date);
        projectStorage.addToStorage(newProject);

        // Display preview card
        let thumbnail = displayThumbnail(title, description, date);

        // Load project page
        thumbnail.addEventListener('click', () => {
            getDOM.mainPage.classList.toggle('active');
            let page = getDOM.projectPage;
            page.classList.toggle('active');
            page.appendChild(projectWindow.container);
            projectStorage.setActiveProject(newProject);
            loadProjectPage();
        });

        projectStorage.populateExternalStorage();

    });
})();
