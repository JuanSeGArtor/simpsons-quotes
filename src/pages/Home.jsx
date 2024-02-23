import './home.scss';
import simpsonsImg from '../assets/theSimpsons.png';
import { Link } from 'react-router-dom';
import simpsonsSong from '../assets/simpsonsSong.mp3';
import { useState } from 'react';
import MuteButton from '../components/MuteButton';

export default function Home() {
    const [isMuted, setIsMuted] = useState(false);

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="home-container">
            <img src={simpsonsImg} alt="The Simpsons" />
            <Link to="/quotes" className="start-btn special-btn">
                INICIAR
            </Link>
            <MuteButton isMuted={isMuted} handleToggleMute={handleToggleMute} />
            <audio autoPlay muted={isMuted}>
                <source src={simpsonsSong} type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    );
}