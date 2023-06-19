import { ItemList } from './components/Eshop/ItemList'
import classes from './app.module.css'

function App() {
  return (
    <div className="App">
      <h1 className={classes.header}>Our Best Eshop</h1>
      <ItemList />
    </div>
  )
}

export default App
