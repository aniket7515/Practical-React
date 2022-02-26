
import './App.css';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

toast.configure()

function App() {

  const notify=()=>{
    toast("Basic notifications!")
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      
    </div>
  );
}


export default App;
