import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [pesoMexicano, setPesoMexicano] = useState(0);
  const [libras, setLibras] = useState(0);
  const [yen, setYen] = useState(0);


  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(tipo==0){
    setDolar((total * 1));
    setEuro((total * 0.85));
    setPesoMexicano((total * 20.13));
    setLibras((total * 1512.51));
    setYen((total * 110.32));
    }else if(tipo==1){
      setDolar((total * 1.17));
      setEuro((total * 1));
      setPesoMexicano((total * 23.55));
      setLibras((total * 1772.19));
      setYen((total * 129.57));
    }else if(tipo==2){
      setDolar((total * 0.050));
      setEuro((total * 0.042));
      setPesoMexicano((total * 1));
      setLibras((total * 75.28));
      setYen((total * 5.50));
    }else if(tipo==3){
      setDolar((total * 0.00066));
      setEuro((total * 0.00056));
      setPesoMexicano((total * 0.013));
      setLibras((total * 1));
      setYen((total * 0.073));
    }else if(tipo==4){
      setDolar((total * 0.0090));
      setEuro((total * 0.0077));
      setPesoMexicano((total * 0.18));
      setLibras((total * 13.68));
      setYen((total * 1));
    }

    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Peso Mexicano: {pesoMexicano}</p>
      <p>Libras Libanesa: {libras}</p>
      <p>Yen: {yen}</p>
      

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={0}>Dolar</option>
        <option value={1}>Euro</option>
        <option value={2}>Peso Mexicano</option>
        <option value={3}>Libra Libanesa</option>
        <option value={4}>Yen</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
