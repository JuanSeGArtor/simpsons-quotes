import './home.scss';
import simpsonsImg from '../assets/theSimpsons.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home-container'>
            <img src={simpsonsImg} alt="The Simpsons" />
            <Link to='/quotes' className='start-btn special-btn'>
                INICIAR
            </Link>
        </div>
    )
}
