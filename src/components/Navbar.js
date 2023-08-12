import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="bg-zinc-500 h-16 text-white	">
            <div className="flex justify-around">
                <Link to='/'>Home</Link>
                <Link to='/signup'>SignUp</Link>
            </div>
            
        </nav>
    );
}