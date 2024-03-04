import {Link} from 'react-router-dom';
import {usePostC} from '../context/postContext.jsx'

const NavBar = () =>{
    const {isOnline} = usePostC();
    if(isOnline){
        return(
        <div className='bg-teal-600 flex justify-between px-10 py-5'>
            <h1 className='text-4xl'>Blog</h1>
            <ul className='flex gap-2'>
                <li className='bg-yellow-50 py-2 px-2 rounded-md'>
                    <Link to="/">Home</Link>                
                </li>
                <li className='bg-yellow-50 py-2 px-2 rounded-md'>
                    <Link to="/new">Nueva entrada</Link>
                </li>
            </ul>
        </div>
        );
    }else{
        return(
            <div className='bg-teal-600 flex justify-between px-10 py-5'>
                <h1 className='text-4xl'>Blog</h1>
                <ul className='flex gap-2'>
                    <li className='bg-yellow-50 py-2 px-2 rounded-md'>
                        <Link to="/">Home</Link>                
                    </li>
                    <li className='bg-yellow-50 py-2 px-2 rounded-md'>
                       Sin conexion a internet
                    </li>
                </ul>
            </div>
            );
    }
}

export default NavBar;