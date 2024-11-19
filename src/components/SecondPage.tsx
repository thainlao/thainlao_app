import { useEffect, useRef, useState } from 'react'; // Импортируем useState
import '../styles/secondpage.css';
import '../styles/howtobuy.css';
import copy from '../assets/copy.png';
import {motion} from 'framer-motion'

const SecondPage = () => {
    const [isCopied, setIsCopied] = useState(false); // Состояние для отслеживания, скопирован ли адрес
    const walletAddress = '0x1234567890abcdef1234567890abcdef12345678'; // Пример адреса кошелька

    const handleCopy = () => {
        // Копирование адреса в буфер обмена
        navigator.clipboard.writeText(walletAddress)
            .then(() => {
                setIsCopied(true); // Устанавливаем состояние в true, чтобы показать галочку
                setTimeout(() => {
                    setIsCopied(false); // Через 2 секунды скрываем галочку
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка при копировании: ', err);
            });
    };

    const dollarCount = 9; // Количество долларов
    const bars = Array.from({ length: dollarCount }); // Массив для генерации баров

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
            { threshold: 0.4 } // Триггерим, когда 10% компонента видны
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Останавливаем наблюдение, когда компонент удаляется
            }
        };
    }, []);

    return (
        <div id='buy' className='secondpage'>
            <div className='wallet'>
                <span>{walletAddress}</span>
                <button onClick={handleCopy}>
                    {/* Если скопировано, показываем галочку, иначе иконку копирования */}
                    {isCopied ? (
                        <span>✔️</span> // Галочка в формате Unicode
                    ) : (
                        <img src={copy} alt="copy" />
                    )}
                </button>
            </div>

            <div className="howtobuy">
            <h1>$DOGI is a meme token with no intrinsic value or expectation of financial return. The token is for entertainment purposes only.</h1>

            <div className='thirdpage'>
            <motion.section
                ref={sectionRef} // Привязываем ref для отслеживания секции
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }} // Плавная анимация появления секции
                transition={{ duration: 0.5 }}
            >
                {bars.map((_, index) => (
                    <div className="dollar-wrapper" key={index}>
                        <div className="dollar">$</div>
                        <motion.div
                            className="bar"
                            initial={{ height: 0 }}
                            animate={{
                                height: isVisible ? (index + 1) * 30 : 0, // Высота палки зависит от видимости
                            }}
                            transition={{
                                delay: index * 0.3, // Задержка между анимациями
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                            }}
                        />
                    </div>
                ))}
            </motion.section>
            <h4>PATIENT $DOGI CAPITAL</h4>
            </div>
        </div>
        </div>
    );
};

export default SecondPage;
