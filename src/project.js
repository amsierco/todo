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
    let todo = [];
    let inProgress = [];
    let done = [];
    
    // Add card function
    function add(_type, _info, _date){

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

    // Add JSON cards to new Project obj on page load
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

    function removeItem(item, type){
        console.log(type);
        type.splice(item, 1);
        console.log(type);
        projectStorage.populateExternalStorage();
    }

    return {
        add,
        JSONConvert,
        removeItem,
        title,
        description,
        date,
        todo,
        inProgress,
        done
    };
}
