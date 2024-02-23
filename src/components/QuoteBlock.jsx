/* eslint-disable react/prop-types */
import '../styled-components/quoteBlock.scss';

export default function QuoteBlock({ quotes }) {
    return (
        <div className='quote-container'>
            {quotes.map((quote, index) => (
                <blockquote key={index}>
                    <div className="quote-caption">
                        <p>{quote.quote}</p>
                        <img src={quote.img} alt={quote.character} />
                    </div>
                    <h3>{quote.character}</h3>
                </blockquote>
            ))}
        </div>
    )
}