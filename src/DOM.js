export const getDOM = (() => {   

    let newProjectButton = document.querySelector('.new-project-button');
    let thumbnailContainer = document.querySelector('.thumbnail-container');
 
    return{
        newProjectButton,
        thumbnailContainer
    };

})();
//Test
getDOM.newProjectButton.style.backgroundColor = "red";

export const displayProjectPrompts = (() => {

    const thumbnailPrompt = () => {
        const thumbnailPrompt = document.createElement('div');
        thumbnailPrompt.classList.toggle('thumbnail-prompt');
        thumbnailPrompt.classList.toggle('active');

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
        thumbnailContentOne.append(titleLabel, titleInput);

        let thumbnailContentTwo = document.createElement('div');
        let descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description';
        let descriptionInput = document.createElement('input');
        thumbnailContentTwo.append(descriptionLabel, descriptionInput);

        let thumbnailSubmit = document.createElement('button');
        thumbnailSubmit.setAttribute('type', 'submit');
        thumbnailSubmit.textContent = 'Submit';

        thumbnailPrompt.appendChild(thumbnailHeader);
        thumbnailPrompt.appendChild(thumbnailForm);
        thumbnailForm.append(
            thumbnailContentOne,
            thumbnailContentTwo,
            thumbnailSubmit);
        document.body.appendChild(thumbnailPrompt);

        return {thumbnailPrompt};
    }

    return {
        thumbnailPrompt
    };

})();

//displayProjectPrompts.thumbnailPrompt();
