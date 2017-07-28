console.log("Hello basicCard")
const fs = require("fs");

class BasicCard {
    constructor(front, back) {
        this.front = front;
        this.back = back;
    }
    addCards(add) {
        fs.readFile('./data.json', 'utf8', function(error, data) {
            if (error) throw error;

            var arr = JSON.parse(data);

            arr.cards.push(add);

            fs.writeFile('./data.json', JSON.stringify(arr), 'utf8', function(err) {
                if (err) throw err;
                console.log("Process completed!!!");
            });
        });
    }
};

module.exports = BasicCard;
