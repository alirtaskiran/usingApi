import './App.css'
import axios from 'axios';

function App() {

  const options = {
    method: 'GET',
    url: 'https://hepsiburada-data.p.rapidapi.com/getCommentsFromProduct',
    params: {
      product_id: 'hbcv00000c2fqc'
    },
    headers: {
      'x-rapidapi-key': 'KEY__',
      'x-rapidapi-host': 'hepsiburada-data.p.rapidapi.com'
    }
  };

  
try {
	async ()=> {
    const response = await axios.request(options);
    console.log(response.data);
  }
} catch (error) {
	console.error(error);
}

  return (
    <>
    
    </>
  )
}

export default App
