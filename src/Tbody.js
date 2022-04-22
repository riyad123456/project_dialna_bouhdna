import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'






function Tbody({data}) {
  const [items, setItems] = useState();
  
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  const handleClose = () => setShow(false);
  const  handleShow = (key)=>{
    setShow(true);
    
  }
  const list = data.map(
    (json,val) => {
      let li = [];
        Object.keys(json).map((key,value) => {
            li = [...li,json[key]]
        }
          
        )
       
       return <Tr  index = {val} editClick={() => {handleShow(val);edit(data[val])}} delClick={() => doeafak()} values= {li}/>
    }
)

  const doeafak = () => {

  }
  const edit = (dt) => {
    
    setCurrentItem(dt)
    console.log(currentItem)
  }
  return(
    <>
    <tbody>
      
      {list}
        
    </tbody>
   
    <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit instance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {
    Object.keys(currentItem).map((key,value) => {
      return <FormGroup Key = {key} value={currentItem[key]}/>
    })
  }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
);
  
}

function Td({val}) {
  return (
      <td >{val}</td>
  );
}
function FormGroup({Key,value}){
  return (
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{Key}</Form.Label>
            <Form.Control
            defaultValue={value}
              autoFocus
            />
          </Form.Group>
          );
}
function Tr({values,delClick, editClick}){
 
  return (
  <tr>
                  
                  {values.map(
                      (value) => (<Td val= {value}/>))
                      }
                  <td>
                      
                      <ul class="list-inline m-0">
                          
                          <li class="list-inline-item">
                          <Button variant="outline-warning" onClick= {editClick}>Edit</Button>
                          </li>
                          <li class="list-inline-item">
                          <Button variant="outline-danger" onClick = {delClick}>Delete</Button>
                          </li>
                      </ul>
                  </td>
              </tr>
  );
}
/*
function Popup({state}) {
  console.log(state)
  const [show, setShow] = useState(state);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


class Tbody extends React.Component {
    
    constructor(props) {
      console.log(props)
      super(props);
      this.state = {
        My_Array: new Array()
       
      };
    }
    componentDidMount() {
      console.log(this.props)
        this.props.data.map(
          (json, value) => { 
              let li = [];
              Object.keys(json).map( (key, val) => {
                li = [...li, json[key]]
              }
              
              )
              this.state.My_Array.concat(li)
             
            })
         
      
    }
    rows = ()=> {
        return this.state.My_Array.map((subtable,index)=>{
          return <Tr evClick={() => {this.removeElem(index)}} values= {subtable}/>
        });
      }
      removeElem(i) {
        this.setState({
          My_Array: this.state.My_Array.filter((val,j) => i !== j)
        })
      }
    render() {
       return(
            <tbody>
                {this.rows()}
            </tbody>
       );
    }
}
*/


export default Tbody;