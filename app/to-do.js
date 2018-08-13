var Task = /** @class */ (function () {
    function Task(descriptionParam, priorityParam) {
        this.done = false;
        this.description = descriptionParam;
        this.priority = priorityParam;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
