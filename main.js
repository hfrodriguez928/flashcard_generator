console.log("Hello Main");
const BasicCard = require("./basic_card");
const ClozeCard = require("./cloze_card");
const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt({
    type: 'list',
    name: 'cards',
    message: 'Choose your card?',
    choices: ['BasicCard', 'Clozure']
}).then(function (data) {
    if(data.cards === 'BasicCard'){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'front',
                message: 'Add your front message'
            }, {
                type: 'input',
                name: 'back',
                message: 'Add your back message'
            }
        ]);
    }
    else
    {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Add your text message'
            }, {
                type: 'input',
                name: 'cloze',
                message: 'Add your deletion message'
            }
        ]);
    }
}).then(function(data){
        if(data.front){
             var basic = new BasicCard(data.front, data.back);
            basic.addCards({data: basic});
        }
        else
        {
         var firstPresident = new ClozeCard(data.text, data.cloze);
            firstPresident.addCards({data: firstPresident, partial: firstPresident.partial()});
        }
    })
    .catch(function (err) {
     console.log(err);
});

