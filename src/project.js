// // Card Class
const Card = (_info, _date) => {
    let info = _info;
    let date = _date;

    return{
        info,
        date
    };
}

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


    function add(_type, _info, _date){
        let card = Card(_info, _date);
        if(_type === 'todo'){
            todo.push(card);
        } else if (_type === 'in-progress'){
            inProgress.push(card);
        } else if (_type === 'done'){
            done.push(card);
        }
    }

    return {
        create,
        add,
        todo,
        inProgress,
        done,
        title,
        description
    };
}
