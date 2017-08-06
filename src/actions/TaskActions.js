import * as types from '../constants/ActionTypes';
const tasksList = [
    {
        "id": 1,
        "title": "Some task 1",
        "created_at": "2016-01-12 12:59:59",
        "description": "test description 1",
        "project_id" : 1
    },
    {
        "id": 2,
        "title": "Some task 2",
        "created_at": "2016-12-12 12:59:59",
        "description": "test description 2",
        "project_id" : 2
    },
    {
        "id": 3,
        "title": "Some task 3",
        "created_at": "2016-12-12 12:59:59",
        "description": "test description 3",
        "project_id" : 2
    },
    {
        "id": 4,
        "title": "Some task 4",
        "created_at": "2016-12-12 12:59:59",
        "description": "test description 4",
        "project_id" : 2
    },
    {
        "id": 5,
        "title": "Some task 5",
        "created_at": "2016-12-12 12:59:59",
        "description": "test description 5",
        "project_id" : 2
    },
    {
        "id": 6,
        "title": "Some task 6",
        "created_at": "2016-31-12 12:59:59",
        "description": "test description 6",
        "project_id" : 3
    },
    {
        "id": 7,
        "title": "Some task 7",
        "created_at": "2016-31-12 12:59:59",
        "description": "test description 7",
        "project_id" : 3
    },
    {
        "id": 8,
        "title": "Some task 7",
        "created_at": "2016-31-12 12:59:59",
        "description": "test description 8",
        "project_id" : 4
    }
];

export const fetchTasks = (id, title, created_at, description, project_id) => dispatch => {
    console.log('Fetch tasks');
    dispatch({ type: 'FETCH_TASKS', payload: tasksList })
};

export const addTask = (id, title, description, project_id) => dispatch => {
    const payload = {
        id: id+1,
        title,
        description,
        created_at: Date(),
        project_id
    };
    dispatch({ type: 'ADD_TASK', payload})

};

export const editTask = (id,title,description) => dispatch => {
    const payload = {
        id,
        title,
        description
    };
    dispatch({ type: 'EDIT_TASK', payload })
};

export const deleteTask = (id) => dispatch => {
    const payload = {
        id
    };
    dispatch({ type: 'DELETE_TASK', payload })
};

export const selectTask = (id) => dispatch => {
    dispatch({ type: 'SELECT_TASK', payload: id });
};

export const readTask = (id) => dispatch => {
    dispatch({ type: 'READ_TASK', payload: id });
};

export const completeTask = (id) => dispatch => {
    console.log('Complete task action id', id);
    const payload = {
        id
    };
    dispatch({ type: 'COMPLETE_TASK', payload })
};
export const searchTasks = (value) => dispatch => {
    const payload = {
        value
    };
    dispatch({ type: 'SEARCH_TASKS', payload })
}