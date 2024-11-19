import '../styles/firstpage.css';
import { motion } from 'framer-motion';

const FirstPage = () => {
    return (
        <div id='about' className='firstpage'>
            <section>
                <motion.div
                className='text_section'
                initial={{ opacity: 0, y: -50 }} // начальное состояние
                animate={{ opacity: 1, y: 0 }} // финальное состояние
                transition={{ duration: 1, ease: 'easeOut' }}>
                <h1>
                Our mission is to decentralize the conversation around government spending, empowering people to hold government bodies accountable for their financial choices. We harness the power of memes, community engagement, and cryptocurrency culture to make government transparency both accessible and engaging. Through awareness, education, and active participation, our community is the driving force behind this movement. Together, we will work toward a future where government efficiency is not just an aspiration but a standard.
                </h1>
                
                <h1>
                Join us on this journey toward a more transparent, accountable, and efficient system of governance, where every $DOGE symbolizes progress toward better governance.
                </h1>
                
                {/* <h2>
                    <span>BUY</span> DOGI TO IMPROVE YOUR LIFE
                </h2>
                <a className='buy'>BUY</a> */}
                </motion.div>

                {/* Картинка собаки с анимацией отскока */}
                {/* <motion.img
                    src={dog}
                    alt='dog'
                    initial={{ opacity: 0, scale: 0.5 }} // начальное состояние
                    animate={{ opacity: 1, scale: 1 }} // финальное состояние
                    transition={{ duration: 1, ease: 'easeInOut' }} // продолжительность анимации
                    whileHover={{ scale: 1.1, rotate: 10 }} // добавляем эффект при наведении
                /> */}
            </section>
        </div>
    )
}

export default FirstPage