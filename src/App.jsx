
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {


  return (
    <>
      <header className='text-center text-4xl font-bold mt-12 mb-8'>
        <Header></Header>
      </header>
      <main className='container md:px-3'>
        <Home></Home>
      </main>
      {/* <footer></footer> */}
    </>
  )
}

export default App
