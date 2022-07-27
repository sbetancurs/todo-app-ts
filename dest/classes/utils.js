export class Utils {
    constructor(list) {
        this.list = list;
        this.tasks = this.loadTasks();
    }
    addListItem(task) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", (e) => {
            e.preventDefault();
            task.completed = checkbox.checked;
            this.addClassToTaskCompleted(task.completed, li);
            this.saveTasks();
        });
        checkbox.checked = task.completed;
        this.addClassToTaskCompleted(task.completed, li);
        li.append(checkbox, task.name);
        this.list.append(li);
    }
    saveTasks() {
        localStorage.setItem("TASKS", JSON.stringify(this.tasks));
    }
    loadTasks() {
        const taskJSON = localStorage.getItem("TASKS");
        if (taskJSON == null) {
            return [];
        }
        return JSON.parse(taskJSON);
    }
    createNewTask(name) {
        const newTask = {
            id: this.getRandomId(),
            name,
            completed: false
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.addListItem(newTask);
    }
    getRandomId(max = 1000) {
        return Math.floor(Math.random() * max);
    }
    addClassToTaskCompleted(completed, li) {
        if (completed) {
            li.classList.add("completed");
        }
        else {
            li.classList.remove("completed");
        }
    }
}
