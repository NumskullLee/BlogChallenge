import {Form, Formik} from 'formik'
import {createPostRequest} from '../api/post.api.js'
import { useNavigate } from "react-router-dom";

const PostForm = () =>{
    let navigate=useNavigate();

    return(
    <div className='mx-auto'>
        <Formik initialValues={{titulo:"", autor:"", contenido:""}} onSubmit={async (values, actions)=>{
            try{
                if(values.titulo.trim()==""||values.autor.trim()==""||values.contenido.trim()=="")
                    alert("debes llenar todos los campos");
                else{                    
                    const response=await createPostRequest(values);
                    console.log(response);
                    actions.resetForm()            
                }
                navigate("/");
            }catch(error){
                console.log(error)
            }
            
        }}>
            {({handleChange, handleSubmit, values, isSubmitting})=>{
                return(
                    <Form onSubmit={handleSubmit} className='bg-teal-500 max-w-sm rounded-md px-4 py-4 mx-auto'>
                        <h1 className='text-xl font-bold text-center py-3'>Agregar publicacion</h1>
                        <label className='block'>Titulo</label>
                        <input type='text' name='titulo' className='px-2 py-1 rounded-sm w-full' placeholder='Escribe un titulo' onChange={handleChange} value={values.titulo}/>

                        <label className='block'>Autor</label>
                        <input type='text' name='autor' className='px-2 py-1 rounded-sm w-full' placeholder='Escribe tu nombre' onChange={handleChange} value={values.autor}/>

                        <label className='block'>Contenido</label> 
                        <textarea name='contenido' rows="4" className='px-2 py-1 rounded-sm w-full' placeholder='Escribe tu Contenido' onChange={handleChange} value={values.contenido}></textarea>
                        
                        <button type='submit' disabled={isSubmitting} className='block text-center bg-yellow-50 w-full my-3 rounded-md'>
                            {isSubmitting?"Guardando...":"Guardar"}
                        </button>
                    </Form>
                );
            }}
        </Formik>  
    </div>
    )
}

export default PostForm;