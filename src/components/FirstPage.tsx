import '../styles/firstpage.css';
import dog from '../assets/dog.jpg';
import { motion } from 'framer-motion';

const FirstPage = () => {
    return (
        <div className='firstpage'>
            <section>
                <motion.div
                className='text_section'
                initial={{ opacity: 0, y: -50 }} // начальное состояние
                animate={{ opacity: 1, y: 0 }} // финальное состояние
                transition={{ duration: 1, ease: 'easeOut' }}>
                <h1>$D.O.G.I the coin</h1>
                <h2>BYU DOGI TO IMPROVE YOU LIFE</h2>

                <a className='buy'>BUY</a>
                </motion.div>

                {/* Картинка собаки с анимацией отскока */}
                <motion.img
                    src={dog}
                    alt='dog'
                    initial={{ opacity: 0, scale: 0.5 }} // начальное состояние
                    animate={{ opacity: 1, scale: 1 }} // финальное состояние
                    transition={{ duration: 1, ease: 'easeInOut' }} // продолжительность анимации
                    whileHover={{ scale: 1.1, rotate: 10 }} // добавляем эффект при наведении
                />
            </section>
        </div>
    )
}

export default FirstPage