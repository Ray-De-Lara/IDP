import {DndProvider} from 'react-dnd'
import {HTML5Backend} from'react-dnd-html5-backend'
import './App.css';
import { DragDrop } from './components/DragDrop';
import {Map} from './components/Map'
import {Header} from './components/Header'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header/>
        <Map/>
        <DragDrop/>
      </div>
    </DndProvider>
  );
}

export default App;
