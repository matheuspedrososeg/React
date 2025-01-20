import './App.css'
import List from './components/List'

function App() {

  return (
    <>
      <h1 className='title'>To-do list.</h1>
      <List taskName={"Test"} description={"teste"}></List>
    </>
  )
}

export default App
