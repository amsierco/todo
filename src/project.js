import { parse } from "date-fns";
import { format } from "date-fns";
import { projectStorage } from "./storage";

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
export const Project = (title, description, date) => {
    //let title, description, date;
    let todo = [];
    let inProgress = [];
    let done = [];
    
    // Add card function
    function add(_type, _info, _date){

        // JSON null storage check
        if(todo == undefined){
            console.log('todo is UNDEFINED');
            this.todo = [];
            this.inProgress = [];
            this.done = [];
        }

        // Add card
        if(_type === 'todo'){
            todo.push(Card(_info, _date));
        } else if (_type === 'in-progress'){
            inProgress.push(Card(_info, _date));
        } else if (_type === 'done'){
            done.push(Card(_info, _date));
        }

        projectStorage.populateExternalStorage();
    }

    function JSONConvert(obj){
        // Todo
        let _todo = Array.from(obj.todo);
        for(let i=0; i<_todo.length; i++){
            add(
                'todo',
                _todo[i].info,
                _todo[i].date
            );
        }

        // In-progress
        let _inProgress = Array.from(obj.inProgress);
        for(let i=0; i<_inProgress.length; i++){
            add(
                'in-progress',
                _inProgress[i].info,
                _inProgress[i].date
            );
        }

        // Done
        let _done = Array.from(obj.done);
        for(let i=0; i<_done.length; i++){
            add(
                'done',
                _done[i].info,
                _done[i].date
            );
        }
    }

    return {
        add,
        JSONConvert,
        title,
        description,
        date,
        todo,
        inProgress,
        done
    };
}
