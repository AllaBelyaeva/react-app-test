import * as types from '../constants/ActionTypes';
let projectsList = [
        {
            "id": 1,
            "title": "Some project 1"
        },
        {
            "id": 2,
            "title": "Some project 2"
        },
        {
            "id": 3,
            "title": "Some project 3"
        },
        {
            "id": 4,
            "title": "Some project 4"
        }
];

export const fetchProjects = (id, title, task_count) => dispatch => {
    dispatch({ type: 'FETCH_PROJECTS', payload: projectsList })
};

export const addProject = (title, length) => dispatch => {
    const payload = {
        id: length+1,
        title
    };
    dispatch({ type: 'ADD_PROJECT', payload })

};

export const selectProject = (id) => dispatch => {
    dispatch({ type: 'SELECT_PROJECT', payload: id });
};

export const editProject = (id, title) => dispatch => {
    const payload = {
        id,
        title
    };
    dispatch({ type: 'EDIT_PROJECT', payload })
};


export const deleteProject = (id) => dispatch => {
    const payload = {
        id
    };
    dispatch({ type: 'DELETE_PROJECT', payload })
}
