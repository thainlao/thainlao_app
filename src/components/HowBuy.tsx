import '../styles/howtobuy.css';
import dog from '../assets/dogmeme.jpg';

const HowBuy = () => {
    return (
        <div className="howtobuy">
            <img src={dog} alt='dog'/>
            <section>
            <h2>How to buy $DOGI$</h2>

                <div>
                <p>total supply: <span>2222</span></p>
                <p>total volume: <span>220 ETH</span></p>
                <p>BUY/SELL TAX: <span>0%</span></p>
                <span>8% Cex Listings / 92% Community</span>
                </div>
            </section>
        </div>
    )
}

export default HowBuy