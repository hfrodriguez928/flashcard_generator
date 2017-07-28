console.log("Hello clozeCard")
const fs = require("fs");

class ClozeCard {
    constructor(text, cloze) {
        this.text = text;
        this.cloze = cloze;
    }
    partial() {
        if (this.text.includes(this.cloze)) {
            return this.text.replace(this.cloze, '....');
        } else {
            return "Sorry, value doesn't exist";
        }
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
}

module.exports = ClozeCard;