import { useEffect, useState } from "react";
import {usePostC} from '../context/postContext.jsx'
import Entrada from '../componentes/entrada.jsx'

const PostPage=()=>{

    const {post, loadPosts, find, setfind, isOnline, setIsOnline}=usePostC();
    const [search, setSerach] = useState("");
    
    useEffect(()=>{
        //revisamoss si hay internet, si no hay no cargamos los posts, y deshabilitamos el boton "nueva entrada"
        if(window.navigator.onLine){
            setIsOnline(true);
            loadPosts();
        }else{
            setIsOnline(false);
        }
        
    },[]);

    const handleChange = (e) =>{
        setSerach(e.target.value);    
        if(e.target.value.trim()==""){
            setfind(post);
        }else{
            setfind(post.filter(x=>x.autor.toLowerCase().includes(e.target.value.toLowerCase()) || x.contenido.toLowerCase().includes(e.target.value.toLowerCase()) || x.titulo.toLowerCase().includes(e.target.value.toLowerCase())));
        }    
    };
    if(post.length==0){
        return(
            <div>
                <h1 className="text-5xl font-bold">
                    Sin publicaciones
                </h1>
                
            </div>)
    }
    else if(find.length==0){
        return(
        <div>
           
            <h1 className="text-5xl font-bold mb-5">
                Sin publicaciones
            </h1>
            <div className='mx-auto'>                    
                    <input type='text' name='filtrar' className='px-2 py-1 rounded-sm w-full block mb-4 py-2' placeholder='Buscar' onChange={handleChange} value={search}/>
            </div>
            
        </div>)
    }else{
        return(
            <div>
                <h1 className="text-5xl font-bold mb-5">
                    Publicaciones 
                </h1>
                <div className='mx-auto'>                    
                    <input type='text' name='filtrar' className='px-2 py-1 rounded-sm w-full block mb-4 py-2' placeholder='Buscar' onChange={handleChange} value={search}/>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {
                        find.map(x=>(
                            <Entrada key={x.id} x={x}/>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default PostPage;