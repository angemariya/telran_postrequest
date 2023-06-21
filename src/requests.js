import axios from 'axios'

export const postItem = async (item) => {
    const url = 'https://api.escuelajs.co/api/v1/products'

    try {
        const response = await axios.post(url, item, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.status);
        if (response.status !== 201) {
            throw new Error('request failed')
        }

        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteItem = async (id) => {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  /*
  уровень сложности: Создать через createContext(),
  Context.Provider и useContext() изменение цветовой темы приложения 
  два мода light и dark 
  изменение стилей через  
  ${classes.item} ${classes[theme]}}>


  */