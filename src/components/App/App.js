
import ImageBoard from '../ImageBoard';
import './App.css';
import {useState} from 'react';


const INITIAL_ITEMS = [
  {src: "https://images.unsplash.com/photo-1664261934197-c71d92027f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80",text: "A beautiful long haired pony.", },
  {src: "https://images.unsplash.com/photo-1664213688124-d3a8cf06e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80",text: "Angry red-eyed cat in a feild.", },
]; 

function App() {

  const [items, setItems] = useState(INITIAL_ITEMS);

  const addImage = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <div className="App">
      <ImageBoard items={items} addImage={addImage} />
    </div>
  );
}

export default App;
