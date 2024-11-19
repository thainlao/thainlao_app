
import FirstPage from "./components/FirstPage"
import Header from "./components/Header"
import SecondPage from "./components/SecondPage"
import AnimatedCursor from "react-animated-cursor"
import ThirdPage from "./components/ThirdPage"
import HowBuy from "./components/HowBuy"

function App() {

  return (
    <div>
      <AnimatedCursor
        color="255, 99, 71" // красный цвет для курсора
        innerSize={25} // размер внутреннего кольца
        outerSize={20} // размер внешнего кольца
        outerAlpha={0.4} // прозрачность внешнего кольца
        innerScale={1.2} // масштаб внутреннего кольца при наведении
        outerScale={2} // масштаб внешнего кольца при наведении
        clickables={['a', 'button', 'input', '.clickable']} // элементы, на которых курсор изменяет стиль
        />
      <Header />
      <FirstPage />
      <SecondPage />
      <HowBuy />
      <ThirdPage />

      <nav>
        <h2>$DOGI is a meme token with no intrinsic value or expectation of financial return. The token is for entertainment purposes only.</h2>
      </nav>
    </div>
  )
}

export default App
