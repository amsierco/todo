export const project = (() => {
    //Syntax
    //let A = project;
    //A.createProject(B,C);

    function createProject(title, description) {
        this.title = title;
        this.description = description;
    }

    function changeTitle(title) {this.title = title;}
    function changeDescription(description) {this.description = description;}

    return {createProject};
})();

//Testing
let A = project;
A.createProject('B','C');
console.log(A.title+" "+A.description);