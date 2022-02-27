import React,{useState} from 'react'
import Modal from 'react-modal'
import '../App.css'


Modal.setAppElement('#root')

const Modal1 = () => {
  const [modalIsOpen,setModalIsOpen]=useState(false)

  return (
    <div>
      <button onClick={()=> setModalIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={{
          overlay:{
            backgroundColor:'grey'
          },
          content:{
            color:'orange'
          }
        }}>
            <h2>Modal Title</h2>
            <p>Modal Body</p>
            <div>
              <button onClick={()=> setModalIsOpen(false)}>Close</button>
            </div>

        </Modal>

    </div>
  )
}

export default Modal1