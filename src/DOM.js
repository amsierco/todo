import { AddNewCard } from "./eventHandler";

// Get basic DOM elements
export const getDOM = (() => {   
    const mainPage = document.querySelector('.main-page');
    const projectPage = document.querySelector('.project-page');
    const newProjectButton = document.querySelector('.new-project-button');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const previewContainer = document.querySelector('.preview-container');

    //TEMP
    document.querySelector('.TEMP').addEventListener('click', () => {
        mainPage.classList.toggle('active');
        projectPage.classList.toggle('active');
    });

    return{
        mainPage,
        projectPage,
        newProjectButton,
        thumbnailContainer,
        previewContainer
    };

})();

// Create thumbnail prompt window
export const thumbnailPrompt = (() => {
    if(document.querySelector('.thumbnail-prompt') != null){
        document.querySelector('.thumbnail-prompt').remove();
    }

    let thumbnailModal = document.createElement('div');
    thumbnailModal.setAttribute('class', 'thumbnail-prompt');

    let thumbnailHeader = document.createElement('div');
    thumbnailHeader.textContent = 'Enter Project Data';

    let thumbnailForm = document.createElement('form');
    thumbnailForm.setAttribute('name', 'thumbnail-form');
    thumbnailForm.setAttribute('class', 'thumbnail-form');

    let thumbnailContentOne = document.createElement('div');
    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    let titleInput = document.createElement('input');
    titleInput.setAttribute('class', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('type', 'text');
    titleInput.required = true;
    thumbnailContentOne.append(titleLabel, titleInput);

    let thumbnailContentTwo = document.createElement('div');
    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    let descriptionInput = document.createElement('input');
    descriptionInput.required = true;
    thumbnailContentTwo.append(descriptionLabel, descriptionInput);

    let thumbnailSubmit = document.createElement('button');
    thumbnailSubmit.setAttribute('type', 'submit');
    thumbnailSubmit.textContent = 'Submit';

    thumbnailModal.appendChild(thumbnailHeader);
    thumbnailModal.appendChild(thumbnailForm);
    thumbnailForm.append(
        thumbnailContentOne,
        thumbnailContentTwo,
        thumbnailSubmit
    );

    getDOM.thumbnailContainer.appendChild(thumbnailModal);

    return {
        thumbnailModal,
        titleInput,
        descriptionInput,
        thumbnailSubmit,
        thumbnailForm
    };
})();

// Displays thumbnail content
export const displayThumbnail = (title, description) => {
    if(title ==  null || description == null){return;}

    // Creates DOM preview based on inputs
    let thumbnail = document.createElement('button');
    thumbnail.setAttribute('class', 'preview');
    let newTitle = document.createElement('div');
    newTitle.textContent = title;
    let newDescription = document.createElement('div');
    newDescription.textContent = description;
    thumbnail.append(newTitle, newDescription);
    getDOM.previewContainer.appendChild(thumbnail);

    return (thumbnail);
}

// Create project window
export const projectWindow = (() => {
    /*
    HTML class must be column followed by type
    */
    let container = document.createElement('div');
    container.setAttribute('class', 'todo-container');

    let taskArray = [];
    for(let i=0; i<3; i++){
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        let header = document.createElement('div');
        header.setAttribute('class', 'column-header');
        let content = document.createElement('div');
        content.setAttribute('class', 'column-content');

        let newCardButton = document.createElement('button');
        newCardButton.setAttribute('class', 'new-card-button');
        newCardButton.textContent = 'Add Card';
        newCardButton.addEventListener('click', () => {
            AddNewCard(newCardButton.parentNode);
        });

        header.textContent ='header';
        content.textContent ='content';

        column.append(
            header,
            content,
            newCardButton
        );
        taskArray.push(column);
        container.appendChild(taskArray[i]);
    }

    taskArray[0].classList.toggle('todo');
    taskArray[1].classList.toggle('in-progress');
    taskArray[2].classList.toggle('done');

    return{container};
})();

// Create project cards
export const card = (() => {
    let container = document.createElement('div');
    container.setAttribute('class', 'card');

    let info = document.createElement('div');
    info.setAttribute('class', 'info');

    let date = document.createElement('div');
    date.setAttribute('class', 'date');

    container.append(info, date);

    return {container};
})();

// Create card prompt window
export const cardPrompt = (() => {
    if(document.querySelector('.card-prompt') != null){
        document.querySelector('.card-prompt').remove();
    }

    let cardModal = document.createElement('div');
    cardModal.setAttribute('class', 'card-prompt');

    let cardForm = document.createElement('form');
    cardForm.setAttribute('name', 'thumbnail-form');
    cardForm.setAttribute('class', 'thumbnail-form');

    let infoInput = document.createElement('input');
    infoInput.setAttribute('class', 'info');
    infoInput.setAttribute('id', 'info');
    infoInput.setAttribute('type', 'text');
    infoInput.setAttribute('placeholder', 'Details');
    infoInput.required = true;

    let dateInput = document.createElement('input');
    dateInput.setAttribute('class', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('placeholder', 'Date');
    dateInput.required = false;

    let cardSubmit = document.createElement('button');
    cardSubmit.setAttribute('type', 'submit');
    cardSubmit.textContent = 'Submit';

    cardForm.append(infoInput, dateInput, cardSubmit);
    cardModal.appendChild(cardForm);

    return{
        cardModal,
        cardForm,
        infoInput,
        dateInput
    };

})();