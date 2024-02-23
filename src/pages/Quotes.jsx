import './quotes.scss';
import simpsonsLogo from '../assets/simpsonsLogo.png';
import { Link } from 'react-router-dom';
import QuoteBlock from '../components/QuoteBlock';

export default function Quotes() {
    const quotes = [
        { quote: 'Excellent', character: 'Mr. Burns' },
        { quote: "I'm in no condition to drive...wait! I shouldn't listen to myself, I'm drunk!", character: 'Homer Simpson' },
        { quote: "Me fail English? That's unpossible!", character: 'Ralph Wiggum' },
        { quote: "D'oh!", character: 'Homer Simpson' },
        { quote: "Hi, Super Nintendo Chalmers!", character: 'Ralph Wiggum' },
    ];

    return (
        <section className='quotes-container'>
            <Link to='/'>
                <img src={simpsonsLogo} alt="" />
            </Link>

            <article>
                <h1>Discover some Simpsons quotes</h1>

                <input type="search" name="" id="" defaultValue='Search' />
                <QuoteBlock quotes={quotes} />
            </article>
        </section>
    )
}
