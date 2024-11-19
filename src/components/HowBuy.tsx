import { useState, useRef, useEffect } from 'react'; // Импортируем необходимые хуки
import '../styles/howtobuy.css';
import dog from '../assets/dogmeme.jpg';
import {motion} from 'framer-motion';

const HowBuy = () => {
    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости компонента
    const sectionRef = useRef(null); // Ссылка на секцию для отслеживания

    // Используем Intersection Observer для отслеживания видимости
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Если элемент видим, начинаем анимацию
                    }
                });
            },
            { threshold: 0.5 } // Срабатывает, когда 20% компонента видны
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Начинаем наблюдение
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Останавливаем наблюдение, когда компонент удаляется
            }
        };
    }, []);

    return (
        <div className="howtobuy">
            <motion.img
                src={dog}
                alt="dog"
                ref={sectionRef} // Привязываем секцию к ref
                initial={{ x: -200, opacity: 0 }} // Начальная позиция слева и невидимость
                animate={{
                    x: isVisible ? 0 : -200, // При появлении компонента анимация перемещения
                    opacity: isVisible ? 1 : 0, // Плавное появление
                    transition: { duration: 1 }, // Длительность анимации
                }}
            />

            <section>
                <motion.h2
                    initial={{ x: 200, opacity: 0 }} // Начальная позиция справа и невидимость
                    animate={{
                        x: isVisible ? 0 : 200, // Перемещение в исходную позицию
                        opacity: isVisible ? 1 : 0, // Плавное появление
                        transition: { duration: 1, delay: 0.3 }, // Задержка для заголовка
                    }}
                >
                    How to buy $DOGI$
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }} // Начальное состояние: невидимость
                    animate={{
                        opacity: isVisible ? 1 : 0, // Плавное появление
                        transition: { duration: 1, delay: 0.5 }, // Задержка для текста
                    }}
                >
                    <p>total supply: <span>2222</span></p>
                    <p>total volume: <span>220 ETH</span></p>
                    <p>BUY/SELL TAX: <span>0%</span></p>
                    <span>8% Cex Listings / 92% Community</span>
                </motion.div>
            </section>
        </div>
    );
};

export default HowBuy;
