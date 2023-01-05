import { Row, Col, Collapse } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

export const CreateForm ={
  "type": "object",
  "required": [
    "Name",
    "email"
  ],
  "properties": {
    "Name": {
      "type": "string",
      "title": "Name"
    },
    "email": {
      "type": "string",
      "title": "Email"
    },
    "Notes": {
      "type": "string",
      "title": "Notes"
    }
  }
};

export const ViewLeads=(item)=>{
 
  return(
    <Container>
     <Row className='mb-5'>
      <Col md={12}> <b>NAME: </b>{item.item.attributes.Name}</Col>
      <Col md={12}> <b>EMAIL: </b>{item.item.attributes.Email}</Col>
      <Col md={12}> <b>NOTES: </b>{item.item.attributes.Notes}</Col>
      <Col md={12}> <b>SOURCE: </b>{item.item.attributes.Source==null?'Data Not Avilanble':item.item.attributes.Source}</Col>
      
    </Row>
    </Container>
  );
};


export const UpdateForm = {
  "type": "object",
  "required": [
    "name",
    "email"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name",
      "default": 'dfdkfjk'
    },
    "email": {
      "type": "string",
      "title": "Name"
    },
    "notes": {
      "type": "string",
      "title": "Notes"
    }
  }
}

