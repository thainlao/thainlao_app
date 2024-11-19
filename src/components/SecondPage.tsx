import { useState } from 'react'; // Импортируем useState
import '../styles/secondpage.css';
import copy from '../assets/copy.png';

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

    return (
        <div className='secondpage'>
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
        </div>
    );
};

export default SecondPage;
