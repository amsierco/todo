import { parse } from "date-fns";
import { format } from "date-fns";

// Card Class
const Card = (_info, _date) => {
    let info = _info;
    let date = _date;
    
    if(date != ''){
        date = parse(date, 'yyyy-MM-dd', new Date());
        date = format(date, 'MM/dd/yyyy');
    }

    return{
        info,
        date
    };
}

// Project Class
export const Project = () => {
    let todo, inProgress, done, title, description, date;
    
    // Constructor
    function create(_title, _description, _date) {
        this.title = _title;
        this.description = _description;
        this.date = _date;
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
