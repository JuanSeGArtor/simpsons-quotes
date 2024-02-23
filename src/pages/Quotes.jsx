import './quotes.scss';
import simpsonsLogo from '../assets/simpsonsLogo.png';
import { Link } from 'react-router-dom';

export default function Quotes() {
    return (
        <section className='quotes-container'>
            <Link to='/'>
                <img src={simpsonsLogo} alt="" />
            </Link>

            <article>
                <h1>Discover some Simpsons quotes</h1>

                <input type="search" name="" id="" defaultValue='Search'/>
            </article>
        </section>
    )
}
