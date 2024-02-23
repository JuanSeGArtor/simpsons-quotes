import { useState, useEffect } from 'react';
import './quotes.scss';
import simpsonsLogo from '../assets/simpsonsLogo.png';
import { Link } from 'react-router-dom';
import QuoteBlock from '../components/QuoteBlock';
import { getRandomQuote, getMultipleQuotesByCharacter } from '../services/simpsonsApi';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [character, setCharacter] = useState('');
    const [initialCharacter, setInitialCharacter] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        try {
            const response = await getRandomQuote();
            setQuotes(response.data);
            // Guardamos el personaje de la cita aleatoria
            setInitialCharacter(response.data[0].character);
        } catch (error) {
            console.error('Error fetching random quote:', error);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        try {
            const response = await getMultipleQuotesByCharacter(1, character);
            setQuotes(response.data);
            // Guardamos el personaje buscado
            setInitialCharacter(character);
        } catch (error) {
            console.error('Error fetching quotes by character:', error);
        }
    };

    const showMore = async () => {
        try {
            const response = await getMultipleQuotesByCharacter(6, initialCharacter);
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching more quotes:', error);
        }
    };

    return (
        <section className='quotes-container'>
            <Link to='/'>
                <img src={simpsonsLogo} alt="Simpsons Logo" />
            </Link>

            <article>
                <h1>Discover some Simpsons quotes</h1>

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter character name"
                        value={character}
                        onChange={(e) => setCharacter(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                {quotes.length > 0 ? (
                    <QuoteBlock quotes={quotes} />
                ) : (
                    <p>No quotes found or loading...</p>
                )}

                {quotes.length === 1 && (
                    <button onClick={showMore}>
                        Show me more
                    </button>
                )}
            </article>
        </section>
    );
}