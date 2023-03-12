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

// Debugging Delete JSON
// document.querySelector('.JSON').addEventListener('click', () => {
//     localStorage.removeItem("projectData", JSON.stringify(projectStorage.getStorage()));
// });     

// Remove from local storage
export const deleteStorage = (obj, type) => {

    for(let i=0; i<projectStorage.getStorage().length; i++){
        // Entire project delete
        if(projectStorage.getStorage()[i] === obj){
            localStorage.removeItem("projectData", JSON.stringify(projectStorage.getStorage()));
            projectStorage.removeItem(i);
            getDOM.previewContainer.replaceChildren();
            reloadPage();
            return;  
        }
    }

    for(let i=0; i<type.length; i++){
        // Project card delete
        if(type[i] === obj){
            projectStorage.getActiveProject().removeItem(i, type);
            //reloadPage(); Causes thumbnail duplication
            loadProjectPage();
            return;  
        }
    }
}

// On page load
const reloadPage = () => {
    let initialStorage = projectStorage.getExternalStorage();
    // Thumbnails
    for(let i=0; i<initialStorage.length; i++){

        // Convert JSON back to Project class object
        let convertedProject = Project(
            initialStorage[i].title,
            initialStorage[i].description,
            initialStorage[i].date
        );
        convertedProject.JSONConvert(initialStorage[i]);
        projectStorage.addToStorage(convertedProject);

        // Display preview card
        let thumbnail = displayThumbnail(
            convertedProject.title, 
            convertedProject.description, 
            convertedProject.date
        ); 

        // Load project page
        thumbnail.addEventListener('click', (e) => {
            if(e.target.className == 'remove' ||
            e.target.parentNode.className == 'remove'){
                return;
            }                
            getDOM.mainPage.classList.toggle('active');
            let page = getDOM.projectPage;
            page.classList.toggle('active');
            page.appendChild(projectWindow.container);
            projectStorage.setActiveProject(convertedProject);
            loadProjectPage();
        });

        thumbnail.querySelector('.remove').addEventListener('click', () => {
            deleteStorage(convertedProject);
        });
    }
}
window.addEventListener('load', () => {reloadPage();});

// Load project page
const loadProjectPage = () => {
    // Active project reference
    let active = projectStorage.getActiveProject();

    // Wipe children
    projectWindow.taskArray[0].querySelector('.column-content').replaceChildren();
    projectWindow.taskArray[1].querySelector('.column-content').replaceChildren();
    projectWindow.taskArray[2].querySelector('.column-content').replaceChildren();

    getDOM.projectPage.querySelector('.name').textContent = active.title;

    // Todo
    for(let i=0; i<active.todo.length; i++){
        let newCard = displayCard(
            active.todo[i].info,
            active.todo[i].date
        );
        newCard.addEventListener('click', () => {
            deleteStorage(active.todo[i], active.todo);
        });
        projectWindow.taskArray[0].querySelector('.column-content').append(newCard);
    }

    // In-progress
    for(let i=0; i<active.inProgress.length; i++){
        let newCard = displayCard(
            active.inProgress[i].info,
            active.inProgress[i].date
        );
        newCard.addEventListener('click', () => {
            deleteStorage(active.inProgress[i], active.inProgress);
        });
        projectWindow.taskArray[1].querySelector('.column-content').append(newCard);
    }

    // Done
    for(let i=0; i<active.done.length; i++){
        let newCard = displayCard(
            active.done[i].info,
            active.done[i].date
        );
        newCard.addEventListener('click', () => {
            deleteStorage(active.done[i], active.done);
        });
        projectWindow.taskArray[2].querySelector('.column-content').append(newCard);
    }
}

// Add new card to project page
export const AddNewCard = (obj) => {
    /*
    HTML class must be column followed by type
    */
    let type = obj.getAttribute('class').substring(7);
    document.querySelector('.column.'+type+' .new-card-button').append(cardPrompt.cardModal);
    const prompt = cardPrompt;

    prompt.cardModal.classList.toggle('active');
    prompt.cardForm.reset();
    prompt.cardForm.addEventListener('submit', e => {

        // Collect form data
        e.preventDefault();
        let info = prompt.cardForm.elements[0].value;

        // Bad form submission catch
        if(info == ''){;return;}

        let date = prompt.cardForm.elements[1].value;
        if(date != ''){
            date = parse(date, 'yyyy-MM-dd', new Date());
            date = format(date, 'MM/dd/yyyy');
        }
        prompt.cardForm.reset();
        prompt.cardModal.classList.remove('active');

        // Add to appropriate storage in project class
        if(info != null){
            projectStorage.getActiveProject().add(type, info, date);
        }

        // Display new card
        loadProjectPage();

    }, { once: true });

};

// Create new project
export const AddNewProject = (() => {
    const prompt = thumbnailPrompt;

    // Display thumbnail prompt
    getDOM.newProjectButton.addEventListener('click', (e) => {
        if(
            e.target.className == 'thumbnail-prompt active' ||
            e.target.parentNode.className == 'thumbnail-prompt active' ||
            e.target.parentNode.className == 'thumbnail-form' ||
            e.target.parentNode.parentNode.className == 'thumbnail-form' ||
            e.target.parentNode.parentNode.className == 'thumbnail-prompt active')
        {
            return;
        } 
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
        let newProject = Project(title, description, date);
        //newProject.create(title, description, date);
        projectStorage.addToStorage(newProject);

        //console.log('this: '+newProject.getTitle());

        // Display preview card
        let thumbnail = displayThumbnail(
            newProject.title, 
            newProject.description, 
            newProject.date
        );

        // Load project page
        thumbnail.addEventListener('click', (e) => {
            if(e.target.className == 'remove' ||
            e.target.parentNode.className == 'remove'){
                return;
            }                
            getDOM.mainPage.classList.toggle('active');
            let page = getDOM.projectPage;
            page.classList.toggle('active');
            page.appendChild(projectWindow.container);
            projectStorage.setActiveProject(newProject);
            loadProjectPage();
        });

        thumbnail.querySelector('.remove').addEventListener('click', () => {
            deleteStorage(newProject);
        });
    });
})();
