const inquirer = require("inquirer");

inquirer.prompt([{
    type: "list", // rowlist, checkbox, confirm, input, list, password, rawlist, expand, and menu
    name: "color",
    message: "What is your favorite language?",
    choices: ["php", "nodejs", "java", "c++", "c", "python"]
},{
    type: "editor", 
    name: "code",
    message: "Write some of your code."
},{
    name: "website",
    message: "What is your favorite website?",
    default: "https://diegochavez-dc.com"
}])
.then(function(answer) {
    console.log('Answer:', answer);
});