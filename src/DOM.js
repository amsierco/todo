export const getDOM = (() => {   

    let newProjectButton = document.querySelector('.new-project-button');
    let thumbnailContainer = document.querySelector('.thumbnail-container');
 
    return{
        newProjectButton,
        thumbnailContainer
    };

})();

export const displayProjectPrompts = (() => {

    const thumbnailPrompt = _createThumbnail(); 

    // Initially create the thumbnail prompt container
    function _createThumbnail() {

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
        //thumbnailForm.setAttribute('method', 'post');

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
            thumbnailSubmit);

        getDOM.thumbnailContainer.appendChild(thumbnailModal);

        return {
            thumbnailModal,
            titleInput,
            descriptionInput,
            thumbnailSubmit,
            thumbnailForm};
    }

    return {
        thumbnailPrompt
    };

})();

