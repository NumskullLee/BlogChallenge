
import { pool } from "../db.js";

const initdb=async ()=>{
    const res=await pool.execute("CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, titulo varchar(200) not null,autor varchar(200) not null, contenido text not null,fecha_creacion timestamp not null default CURRENT_TIMESTAMP)")
    console.log(res);
}
export default initdb;