import React, { Component } from 'react'
import { Button ,Card, Modal } from 'react-bootstrap';
import Model from './Model';
export class HorndBeasts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModel : false,
            numLikes : 0
    } 
}
show =() =>{
this.setState({
showModel : true,

})

}

handleClose=()=>{
    this.setState(
      {showModel : false}) 
 
 }
 increses =()=>{
     this.setState({

        numLikes : this.state.numLikes+1
   })
 }
    render() {
       

        return (
            <div>
            <Card style={{ width: '18rem' }}>
 <Card.Img variant="top"  onClick={this.increses } src={this.props.image_url}/>
 <Card.Body>
   <Card.Title>{this.props.title}</Card.Title>
   <Card.Text>
   {this.props.description}
   </Card.Text>
   <Card.Text>
   {this.props.keyword}
   </Card.Text> 
     <Card.Text>
   {this.props.horns}
   </Card.Text>
   <Card.Text>
   {this.state.numLikes}
   </Card.Text>
   <Button variant="primary" onClick={this.show }>Show Model</Button>
 </Card.Body>
</Card>


<Model showModel={this.state.showModel} handleClose={this.handleClose} title ={this.props.title} description ={this.props.description}
image_url={this.props.image_url}
 />
        </div>

   

   
        )
      

}
}

export default HorndBeasts
