
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='Item/:Itemid' element={<ItemDetailContainer/>}/>
      
      </Routes> 
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
      <ItemCount initial={1} stock={10} onAdd={quantity => console.log('cantidad agregada', quantity)}/>
      </div>
      </BrowserRouter>
      
      
    
  );
}

export default App;

