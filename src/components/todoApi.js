const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const getTodo = () => fetch('/api/getTodo').then((res) => res.json());

const deleteTasks = () => {
  return postReq('/api/deleteTasks');
};

const updateHeader = (header) => {
  return postReq('/api/updateHeader', { header });
};

const updateTask = (taskId) => {
  return postReq('/api/updateTask', { taskId });
};

const createTask = (text) => {
  return postReq('/api/createTask', { text });
};

const deleteTask = (taskId) => {
  return postReq('/api/deleteTask', { taskId });
};

export default {
  getTodo,
  deleteTasks,
  updateHeader,
  updateTask,
  createTask,
  deleteTask,
};
