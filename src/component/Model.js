import React, { Component } from 'react'
import HorndBeasts from './HorndBeasts'


import { Button ,Card ,Modal,Col ,Container,Row} from 'react-bootstrap';
export class Model extends Component {
  
    render() {
        return (
       
            <Modal show={this.props.showModel} onHide={this.props.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
        
            <Card.Img variant="top" src={this.props.image_url} style={{width:"500"}}/>
        
            <Modal.Body>{this.props.description}</Modal.Body>
        
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
       
                  
         
        )
    }
}

export default Model
