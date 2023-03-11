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
    descriptionInput.required = false;
    thumbnailContentTwo.append(descriptionLabel, descriptionInput);

    let thumbnailContentThree = document.createElement('div');
    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.required = false;
    thumbnailContentThree.append(dateLabel, dateInput);

    let thumbnailSubmit = document.createElement('button');
    thumbnailSubmit.setAttribute('type', 'submit');
    thumbnailSubmit.textContent = 'Submit';

    thumbnailModal.appendChild(thumbnailHeader);
    thumbnailModal.appendChild(thumbnailForm);
    thumbnailForm.append(
        thumbnailContentOne,
        thumbnailContentTwo,
        thumbnailContentThree,
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
export const displayThumbnail = (title, description, date) => {

    // Creates DOM preview based on inputs
    let thumbnail = document.createElement('button');
    thumbnail.setAttribute('class', 'preview');
    let newTitle = document.createElement('div');
    newTitle.setAttribute('class', 'header');
    newTitle.textContent = title;
    let newDescription = document.createElement('div');
    newDescription.textContent = description;
    let newDate = document.createElement('div');
    newDate.textContent = date;
    thumbnail.append(newTitle, newDescription, newDate);
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

        if(i==0){header.textContent = 'Todo'}
        else if(i==1){header.textContent = 'In Progress'}
        else if(i==2){header.textContent = 'Done'}

        column.append(
            header,
            content,
            newCardButton
        );
        taskArray.push(column);
        container.append(taskArray[i]);
    }

    taskArray[0].classList.toggle('todo');
    taskArray[1].classList.toggle('in-progress');
    taskArray[2].classList.toggle('done');

    return {
        container,
        taskArray
    };
})();

// Displays card prompt
export const cardPrompt = (() => {
    if(document.querySelector('.card-prompt') != null){
        document.querySelector('.card-prompt').remove();
    }

    let cardModal = document.createElement('div');
    cardModal.setAttribute('class', 'card-prompt');

    let cardForm = document.createElement('form');
    cardForm.setAttribute('name', 'thumbnail-form');
    cardForm.setAttribute('class', 'thumbnail-form');

    let cardContentOne = document.createElement('div');
    let infoLabel = document.createElement('label');
    infoLabel.textContent = 'Info';
    infoLabel.setAttribute('for', 'info');
    let infoInput = document.createElement('input');
    infoInput.setAttribute('class', 'info');
    infoInput.setAttribute('id', 'info');
    infoInput.setAttribute('type', 'text');
    infoInput.required = true;
    cardContentOne.append(infoLabel, infoInput);

    let cardContentTwo = document.createElement('div');
    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    dateLabel.setAttribute('for', 'date');
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.required = false;
    cardContentTwo.append(dateLabel, dateInput);

    let cardSubmit = document.createElement('button');
    cardSubmit.setAttribute('type', 'submit');
    cardSubmit.textContent = 'Submit';

    cardForm.append(cardContentOne, cardContentTwo, cardSubmit);
    cardModal.appendChild(cardForm);

    return{
        cardModal,
        cardForm,
        infoInput,
        dateInput
    };

})();

// Displays card content
export const displayCard = (info, date) => {
    if(info ==  null || date == null){return;}

    // Creates DOM preview based on inputs
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    let newInfo = document.createElement('div');
    newInfo.setAttribute('class', 'info');
    newInfo.textContent = info;
    let newDate = document.createElement('div');
    newDate.setAttribute('class', 'date');
    newDate.textContent = date;
    card.append(newInfo, newDate);
    getDOM.previewContainer.appendChild(card);

    return (card);
}