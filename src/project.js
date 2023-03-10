// Project Class
export const Project = () => {
    let todo, inProgress, done, title, description;
    
    // Constructor
    function create(_title, _description) {
        this.title = _title;
        this.description = _description;
        this.todo = [];
        this.inProgress = [];
        this.done = [];
    }

    function setTitle(newTitle) {this.title = _newTitle;}
    function setDescription(description) {this.description = _description;}

    return {
        create,
        setTitle,
        setDescription,
        todo,
        inProgress,
        done,
        title,
        description
    };
}

// Card Class
export const Card = () => {

    return{};
}