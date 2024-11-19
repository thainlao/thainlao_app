import '../styles/howtobuy.css';


const HowBuy = () => {


    return (
        <div className="howtobuy">
            {/* <motion.img
                src={dog}
                alt="dog"
                ref={sectionRef} // Привязываем секцию к ref
                initial={{ x: -200, opacity: 0 }} // Начальная позиция слева и невидимость
                animate={{
                    x: isVisible ? 0 : -200, // При появлении компонента анимация перемещения
                    opacity: isVisible ? 1 : 0, // Плавное появление
                    transition: { duration: 1 }, // Длительность анимации
                }}
            /> */}

            <section>
                {/* <motion.h2
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
                </motion.div> */}
            </section>
        </div>
    );
};

export default HowBuy;
