import { useNavigate } from "react-router-dom";
import { usePostC } from "../context/postContext";

const Entrada=({x})=>{
    const {setIdPost}=usePostC();
    let navigate=useNavigate();
    
    const handleFullView=(id)=>{
        setIdPost(id);     
        return navigate("/fullView");   
    }
    return(
        <div className="bg-teal-600 py-5 px-5 rounded-md">
            <h1 className="text-md font-bold">{x.titulo}</h1>
            <p className="text-sm">{x.contenido.substring(0,60)}</p>
            <span className="text-sm italic sm:text-right">✍️ Autor: <br/>{x.autor}</span><br/>
            <span className="text-xs">📅 Creacion: {x.fecha_creacion.substring(0,x.fecha_creacion.indexOf('T'))}</span><br/>
            <button className="text-center bg-yellow-50 w-full mt-3 rounded-md" onClick={()=>handleFullView(x.id)}> 
                Leer →
            </button>
            
        </div>
    )
}

export default Entrada;