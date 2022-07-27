import { Utils } from './classes/utils.js';
const list = document.getElementById("list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
const utils = new Utils(list);
const tasks = utils.tasks;
tasks.forEach(utils.addListItem.bind(utils));
form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null) {
        alert("Please enter a value");
        return;
    }
    utils.createNewTask(input.value);
    input.value = "";
});
