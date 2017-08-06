import { HOST } from '../constants';
import query from '../constants/query';

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    fetch(`${HOST}/projects?session=${query.session}`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => response.json().then(data => resolve(data.projects)))
    .catch(err => reject(err));
  });
};

// export const getTasks = () => {
//   return new Promise((resolve, reject) => {
//     fetch(`${HOST}/tasks?session=${query.session}&project_id=${project.id}&paging_size=20&paging_offset=10`, {
//       method: 'GET',
//       mode: 'cors',
//     })
//     .then(response => response.json().then(data => resolve(data.fonts)))
//     .catch(err => reject(err));
//   });
// };



const fetchTasks = {
    "tasks": [
        {
            "Task": {
                "id": 1,
                "title": "Some task 1",
                "created_at": "2016-01-12 12:59:59"
            },
            "Task": {
                "id": 2,
                "title": "Some task 2",
                "created_at": "2016-12-12 12:59:59"
            },
            "Task": {
                "id": 3,
                "title": "Some task 3",
                "created_at": "2016-31-12 12:59:59"
            }
        }
    ],
    "total_count": 3
};

const fetchTask = {
    "Task": {
        "id": 1,
        "title": "Some task 1",
        "description": "Some description"
    },
};