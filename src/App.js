import CardsContainer from './components/CardsContainer'
import Header from './components/Header'
import Hero from './components/Hero'
import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <CardsContainer />
    </div>
  )
}

export default App
