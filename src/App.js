import { ItemList } from './components/Eshop/ItemList';
import { ApiContext } from './context';
import classes from './app.module.css';
import { useState, useEffect,useContext } from 'react';
import { AddItem } from './components/Eshop/AddItem';
import { postItem, deleteItem } from './requests';
import axios from 'axios';
import { ThemeContext } from './components/Eshop/ThemeChanger';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://api.escuelajs.co/api/v1/products?limit=7&offset=1'
        );
        setItems(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setIsLoading(false);
      }
    };
    getdata();
  }, []);

  const handlePostedData = async (obj) => {
    const responseItem = await postItem(obj);
    setItems([...items, responseItem]);
  };

  const handleDeleteItem = async (id) => {
    const response = await deleteItem(id);
    response
      ? setItems((prevItems) => prevItems.filter((el) => el.id !== id))
      : console.log('error');
  };
  return (
    <ApiContext.Provider value={{ items, handlePostedData, handleDeleteItem }}>
      <div className={`${classes.App} ${classes[theme]}`}>
        <h1 className={classes.header}>Our Best Eshop</h1>
        <AddItem />
        {error ? <h1>An error occurred: {error.message}</h1> : null}
        {isLoading ? <h1>LOADING...</h1> : <ItemList />}
      </div>
    </ApiContext.Provider>
  );
}

export default App;
