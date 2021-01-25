"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
require("dotenv").config();
var init_db_1 = require("../src/migrations/init_db");
var knex = require('knex');
function main() {
    var server = fastify_1["default"]();
    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.ROOT,
            password: process.env.MYSQL_PASSWORD,
            database: 'pokemon'
        }
    });
    init_db_1.up(knex);
    init_db_1.down(knex);
    return server.listen(8080, function (err, address) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        ;
        console.log("Server listening at " + address);
    });
}
;
main();
