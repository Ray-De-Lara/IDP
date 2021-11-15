import {DndProvider} from 'react-dnd'
import {HTML5Backend} from'react-dnd-html5-backend'
import './App.css';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { DragDrop } from './components/DragDrop';
import {Map} from './components/Map'
import {Header} from './components/Header'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        
        {isAuthenticated ? <> <Header/> </> : <Login/>}
        
        <Map/>
        <DragDrop/>
      </div>
    </DndProvider>
  );
}

export default App;
