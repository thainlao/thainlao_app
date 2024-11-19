
import FirstPage from "./components/FirstPage"
import Header from "./components/Header"
import SecondPage from "./components/SecondPage"
import ThirdPage from "./components/ThirdPage"
import HowBuy from "./components/HowBuy"

function App() {

  return (
    <div>
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
