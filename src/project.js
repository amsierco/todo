// Card Class
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

    // Add card function
    function add(_type, _info, _date){
        if(_type === 'todo'){
            this.todo.push(Card(_info, _date));
        } else if (_type === 'in-progress'){
            this.inProgress.push(Card(_info, _date));
        } else if (_type === 'done'){
            this.done.push(Card(_info, _date));
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
