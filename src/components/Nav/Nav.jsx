import './Nav.css';
import { Link } from 'react-router-dom';

function Nav(){

    return (
        <div>
        <nav className='Nav'>
                    
        <li>
            <Link to ="/">Página Inicial</Link>
            <a >Página Inicial</a>
            <Link to ="/Detalhes">Detalhes</Link>
            <a >Detalhes</a>
            <Link to ="/Sobre">Sobre</Link>
            <a >Sobre</a>
            <Link to ="/TodoList">TodoList</Link>
            <a >TodoList</a>
        </li>
        </nav>
        </div>
    );
};

export default Nav;