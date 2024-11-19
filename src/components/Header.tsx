import '../styles/firstpage.css'
import dog from '../assets/dog-coin.jpg';

const Header = () => {
    return (
        <header>
            <img src={dog} alt='dot'/>
            <a href="/">DOGI</a>
        </header>
    )
}

export default Header