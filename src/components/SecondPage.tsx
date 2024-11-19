import { useState } from 'react'; // Импортируем useState
import '../styles/secondpage.css';

const SecondPage = () => {
    const [buttonText, setButtonText] = useState('Copy'); // Состояние для текста кнопки
    const walletAddress = '0x1234567890abcdef1234567890abcdef12345678'; // Пример адреса кошелька

    const handleCopy = () => {
        // Копирование адреса в буфер обмена
        navigator.clipboard.writeText(walletAddress)
            .then(() => {
                // Изменяем текст кнопки на "Done"
                setButtonText('Copied');
                // Через 2 секунды возвращаем текст кнопки обратно на "Copy"
                setTimeout(() => {
                    setButtonText('Copy');
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка при копировании: ', err);
            });
    };

    return (
        <div className='secondpage'>
            <h1><span>$DOGI</span> is a meme token with no intrinsic value or expectation of financial return. The token is for entertainment purposes only.</h1>

            <div>
                <h2 onClick={handleCopy}>0x1234567890abcdef1234567890abcdef12345678</h2>
                <button onClick={handleCopy}>{buttonText}</button> {/* Используем состояние для текста кнопки */}
            </div>
        </div>
    );
}

export default SecondPage;
