
// Get basic DOM elements
export const getDOM = (() => {   
    const newProjectButton = document.querySelector('.new-project-button');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const previewContainer = document.querySelector('.preview-container');

    return{
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
export const displayThumbnail = ((title, description) => {
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

    return {thumbnail};
});

