
import './App.css';
import ToastNotification from './components/ToastNotification';
// import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import './App.css'

// const CustomToast = ({closeToast})=>{
//   return(
//     <div>
//       Something went wrong!
//       <button onClick={closeToast}>Close</button>
//     </div>
//   )
// }


// toast.configure()

function App() {

//   const notify=()=>{
//     toast("Basic notifications!",{ position: toast.POSITION.TOP_LEFT})
//     toast.success("Sucess Basic notifications!",{ position: toast.POSITION.TOP_CENTER,autoClose:8000})
//     toast.info(" Info Basic notifications!",{ position: toast.POSITION.TOP_RIGHT,autoClose:false})
//     toast.warn(<CustomToast/>,{ position: toast.POSITION.BOTTOM_LEFT})
//     toast.error("Error Basic notifications!",{ position: toast.POSITION.BOTTOM_LEFT})
//     toast("Basic notifications!",{ position: toast.POSITION.BOTTOM_LEFT})
//   }

  return (
    <div className="App">
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastNotification/>
      
    </div>
  );
}


export default App;
