import { Task } from './types/index.js';
import { Utils } from './classes/utils.js';

const list = document.getElementById("list") as HTMLUListElement;
const form = document.getElementById("new-task-form") as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const utils = new Utils(list);
const tasks: Task[] = utils.tasks;

tasks.forEach(utils.addListItem.bind(utils))

form.addEventListener("submit", e => {
    e.preventDefault();

    if (input?.value == "" || input?.value == null) {
        alert("Please enter a value");
        return;
    }

    utils.createNewTask(input.value);

    input.value = "";
})

