import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Info from "./components/Info"

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header logoText="My First React App" />
      <Welcome message="Hello!" />

      <Info firstname="Ben" lastname="Ono" age={28} isStudent={true} />
    </>
  )
}

export default App
