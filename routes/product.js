var express = require("express");
var router = express();
var mysql = require("mysql");

var config = require("config");

var connection = mysql.createConnection({
    host: "172.18.4.232",
    database: "myapp_db",
    user :"root",
    password:"root",
    port:9099
});

connection.connect();
router.use(express.json());

router.get("/", (request, response)=>{
    var queryText = `select * from product`;

    connection.query(queryText, (err, result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});


router.get("/:id", (request, response)=>{
    var id = request.params.id;
    var queryText = `select * from product where id=${id}`;

    connection.query(queryText, (err, result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});


router.post("/", (request, response)=>{

        var id = request.body.id;
        var title = request.body.title;
        var description = request.body.description;
        var price = request.body.price;
        var queryText = `insert into product values(${id}, '${title}', '${description}', '${price}')`;

        connection.query(queryText, (err, result)=>{
            if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else
            {
                response.send(JSON.stringify(err));
            }
        });
});



router.put("/:id", (request, response)=>{
    var id = request.params.id;
    var title = request.body.title;
    var description = request.body.description;
    var price = request.body.price;
    var queryText = `update product set title='${title}', description='${description}', price='${price}' where id=${id}`;

    connection.query(queryText, (err, result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});


router.delete("/:id", (request, response)=>{
    var id=request.params.id;
    var queryText = `delete from product where id=${id}`;
    connection.query(queryText, (err, result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});

module.exports = router;
