export const project = (() => {
    //Syntax
    //let A = project;
    //A.createProject(B,C);

    function createProject(title, description) {
        function changeTitle(newTitle) {this.title = newTitle;}
        function changeDescription(description) {this.description = description;}
        return{title, description, changeTitle, changeDescription};
    }

    return {createProject};
})();
