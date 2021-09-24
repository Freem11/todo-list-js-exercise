
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    completeTask(){
      task.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("do laundry", "😨");
const tasks = [task1, task2];

 console.log(tasks)

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed



console.log(tasks)
