import './App.css';
import GetData from './getData';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      const userId = 1;
      GetData(userId)
      .then((result) => {
        console.log("getdata sonucu : ",result);
      })
      .catch((error) => {
        console.log("hata :", error);
      });
    }, [])

  return (
    <div className="App">

    </div>

  );
}

export default App;
