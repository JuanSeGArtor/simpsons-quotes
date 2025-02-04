import './home.scss';
import simpsonsImg from '../assets/theSimpsons.png';
import { Link } from 'react-router-dom';
import simpsonsSong from '../assets/simpsonsSong.mp3';
import { useState, useEffect, useRef } from 'react';
import MuteButton from '../components/MuteButton';

export default function Home() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                } catch (err) {
                    console.error(err);
                }
            }
        };
        playAudio();
    }, []);

    return (
        <div className="home-container">
            <img src={simpsonsImg} alt="The Simpsons" />
            <Link to="/quotes" className="start-btn">
                GO  
            </Link>
            <MuteButton isMuted={isMuted} handleToggleMute={handleToggleMute} />
            <audio ref={audioRef} autoPlay muted={isMuted}>
                <source src={simpsonsSong} type="audio/mp3" />
            </audio>
        </div>
    );
}