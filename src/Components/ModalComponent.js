import React, { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask } from '../js/action/ActionTasks'

const ModalComponent = ({handleClose,show,id}) => {
    const [taskModified, setTaskModified] = useState('')
    const handleChange=(e)=>{
        setTaskModified(e.target.value)
    }
    const edit=(id)=>{
      dispatch(editTask({id:id,taskModified:taskModified}))
    }
    const dispatch = useDispatch()
    return (
        <div>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Normal text" onChange= {handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();edit(id)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
    )
}

export default ModalComponent
