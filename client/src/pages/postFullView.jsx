import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePostC } from "../context/postContext";

const PostFullView = () =>{      
    let navigate = useNavigate();
    const {idPost, post}=usePostC();
    const [filter, setFilter]=useState([{titulo:"",autor:"",fecha_creacion:"",contenido:""}])
    useEffect(() => {
        
        if (idPost==0){
           return navigate("/");
        }else{
            setFilter(post.filter(x=>x.id==idPost));
        }
     },[idPost]);
    
    
    const handleReturn=()=>{
        return navigate("/");
    }

        return(
            <div className='bg-teal-500 max-w-xl rounded-md px-4 py-4 mx-auto'>
                <h1 className="font-bold text-3xl text-center">{filter[0].titulo}</h1>
                <p className="italic text-sm text-right">Autor: {filter[0].autor}</p>
                <span className="italic text-sm text-center">Creacion {filter[0].fecha_creacion}</span>
                
                <p className="text-center">{filter[0].contenido}</p>
                <button className="text-center bg-yellow-50 w-full mt-3 rounded-md" onClick={()=>handleReturn()}> 
                ← Regresar 
                </button>
            </div>
        );
    
}

export default PostFullView;