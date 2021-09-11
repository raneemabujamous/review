import React, { Component } from 'react'
import { Button ,Card ,Modal,Col ,Container,Row} from 'react-bootstrap';
import data from "./data.json"
import HorndBeasts from './HorndBeasts';

export class Main extends Component {
    render() {
        return (
   <>


<Container>
                    <Row>
   {
data.map(ele =>{ 

    return <Col> 
    <HorndBeasts image_url={ele.image_url}  title={ele.title} description={ele.description}
keyword={ele.keyword} horns={ele.horns} />
                                </Col>

})
}
</Row>
</Container>
                   
   </>
        )
    }
}

export default Main
