import { pool } from "../db.js"

export const getPosts = async (req,res)=>{
   try{
      const [result]=await pool.query("SELECT * FROM post ORDER BY fecha_creacion desc");
      res.json({
         data:result
      })
   }catch(error){
      return res.status(500).json({message: error.message})
   }
}

export const getPost = async(req,res)=>{
   try{
      const [result]=await pool.query("SELECT * FROM post WHERE id= ?", [req.params.id])    
      if(result.length==0){
      return res.status(404).json({message:"post no encontrado"});
      }
      res.json({
         data:result[0]
      })
   }catch(error){
      return res.status(500).json({message: error.message})
   }
 }
 
 export const createPost = async (req,res)=>{
   try{      
      const {titulo, autor, contenido}=req.body;      
      const [result] =await pool.query('INSERT INTO post(titulo, autor, contenido) VALUES (?,?,?)',[titulo,autor,contenido]);
      res.json({
      id:result.insertId
      })
   }catch(error){
      return res.status(500).json({message: error.message})
   }
 }

