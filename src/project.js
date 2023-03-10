// Project Class
export const Project = () => {
    function create(title, description) {
        function setTitle(newTitle) {this.title = newTitle;}
        function setDescription(description) {this.description = description;}
        
        return{title, description, setTitle, setDescription};
    }

    return {create};
}
