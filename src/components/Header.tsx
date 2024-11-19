import '../styles/firstpage.css'
import dog from '../assets/dog-coin.jpg';

const Header = () => {
    return (
        <header>
            <img src={dog} alt='dot' />

            <div>
                <a href="#about">ABOUT</a>
                <a href="#buy">BUY</a>
                <a href="#meme-news">MEME NEWS</a>
                <a href="#links">LINKS</a>
            </div>
        </header>
    )
}

export default Header