import { getDOM } from "./DOM";
import { displayProjectPrompts } from "./DOM";

export const addNewProject = (() => {

    getDOM.newProjectButton.addEventListener('click', e => {
        let prompt = displayProjectPrompts.thumbnailPrompt();
        prompt.classList.toggle('active');
    });

})();

