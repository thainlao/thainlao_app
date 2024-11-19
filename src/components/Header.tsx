import '../styles/firstpage.css'
import dog from '../assets/dog-coin.jpg';

const Header = () => {
    return (
        <header>
            <img src={dog} alt='dot' />

            <div>
                <a href="#">ABOUT</a>
                <a href="#">BUY</a>
                <a href='#'>MEME NEWS</a>
                <a href='#'>LINKS</a>
            </div>
        </header>
    )
}

export default Header