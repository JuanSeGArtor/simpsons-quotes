import soundIcon from '../assets/soundIcon.svg';
import '../styled-components/muteButton.scss';

// eslint-disable-next-line react/prop-types
export default function MuteButton({ isMuted, handleToggleMute }) {
    return (
        <button className={`mute-btn ${isMuted ? 'muted' : ''}`} onClick={handleToggleMute} tabIndex='0'>
            <img src={soundIcon} alt="Sound" />
        </button>
    );
}