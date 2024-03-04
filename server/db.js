import {createPool} from 'mysql2/promise'

export const pool =  createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'sasa',
    database:'blogdb'
});


// docker run --name Blogmysql -e MYSQL_ROOT_PASSWORD=sasa -e MYSQL_DATABASE=blogdb -p 3306:3306 -d mysql