
import './App.css';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

toast.configure()

function App() {

  const notify=()=>{
    toast("Basic notifications!",{ position: toast.POSITION.TOP_LEFT})
    toast("Basic notifications!",{ position: toast.POSITION.TOP_CENTER})
    toast("Basic notifications!",{ position: toast.POSITION.TOP_RIGHT})
    toast("Basic notifications!",{ position: toast.POSITION.BOTTOM_LEFT})
    toast("Basic notifications!",{ position: toast.POSITION.BOTTOM_LEFT})
    toast("Basic notifications!",{ position: toast.POSITION.BOTTOM_LEFT})
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      
    </div>
  );
}


export default App;
