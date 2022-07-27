import { Task } from '../types/index.js'

export class Utils {
    list: HTMLUListElement;
    tasks: Task[];

    constructor(list: HTMLUListElement) {
        this.list = list;
        this.tasks = this.loadTasks();
    }

    public addListItem(task: Task) {
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
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

    public saveTasks() {
        localStorage.setItem("TASKS", JSON.stringify(this.tasks))
    }

    public loadTasks(): Task[] {
        const taskJSON = localStorage.getItem("TASKS")
        if (taskJSON == null) {
            return []
        }

        return JSON.parse(taskJSON)
    }

    public createNewTask(name: string): void {
        const newTask: Task = {
            id: this.getRandomId(),
            name,
            completed: false
        };

        this.tasks.push(newTask);
        this.saveTasks();

        this.addListItem(newTask);
    }

    private getRandomId(max: number = 1000): number {
        return Math.floor(Math.random() * max);
    }

    private addClassToTaskCompleted(completed: boolean, li: HTMLElement) {
        if (completed) {
            li.classList.add("completed");
        }
        else {
            li.classList.remove("completed");
        }
    }
}