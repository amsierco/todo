const project = () => {

    let title = 'Blank';
    let description = 'Blank';

    function createProject(title, description) {
        this.title = title;
        this.description = description;
        console.log(this.title+'    '+this.description);
        return {title, description};
    }


    return {createProject};
};
export {project}

let a = project().createProject('A','A');
let b = project().createProject('B', 'B');
console.log(a.title+'   '+a.description);
console.log(b.title+'   '+b.description);