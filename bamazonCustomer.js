var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    selectProducts();
});

function selectProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err)
            throw err;
        for (let i = 0; i < res.length; i++) {
            console.log("ID#- " + res[i].item_id + " | " + res[i].product_name + " | Price: $" + res[i].price + ".00");
        }
        console.log("---------------------------------------------");
        pickItem();
    });
}

function pickItem() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the ID# of the item you want to buy?"
            },
            {
                name: "units",
                type: "input",
                message: "How many units did you want to buy?"
            }
        ])
        .then(function (answer) {
            var newAnswer = parseInt(answer.item);
            connection.query("SELECT * FROM products WHERE ?",
            {
                item_id: newAnswer
            },
            
            function (err, res) {
                if (err) throw err;
                console.log(res)
                var newQuanity = res.stock_quanity - parseInt(answer.units)
                    if (answer.units > res.stock_quanity) {
                     console.log("Insufficient quantity!")
                    } else {
                    connection.query("UPDATE products SET ? WHERE ?",
                        [{stock_quanity: newQuanity}, {item_id: newAnswer}]
    
                        )
                        console.log(newQuanity);
                    }
                })
            })
            
}