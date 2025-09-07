const MAX_NEW_TASKS = 3

const tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

function createTask(id) {
  const title = prompt(`Enter the title for the task ${id}:`);
  const description = prompt(`Enter the description for the task ${id}:`);

  let status = prompt(`Enter the status for the task ${id} (todo, doing, done):`).toLowerCase();
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Enter the status for the task ${id} (todo, doing, done):`).toLowerCase();
  }
  return {id, title, description, status};
}

function addNewTasks() {
  let TaskCount = 0;
  let lastId = tasks[tasks.length - 1]?.id || 3;
  
  while (newTaskCount < MAX_NEW_TASKS) {
    const newTask = createTask(lastId + 1);
    tasks.push(newTask);
    newTaskCount++;
    lastId++;

    if (newTaskCount === MAX_NEW_TASKS) {
      alert("There are sufficient tasks on your board, please check them in the console.");
    }
  }

  logAllTasks();
  logCompletedTasks();
}

function logAllTasks() {
  console.log("All tasks:");
  console.log(tasks);
}

function logCompletedTasks() {
  const completed = tasks.filter(task => task.status === "done");
  console.log("Completed tasks:");
  console.log(completed);
}

addNewTasks();