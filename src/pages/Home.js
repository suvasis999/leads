import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { GET_LEADS,ADD_LEADS } from '../components/apiServices';
import { useQuery ,useMutation} from '@apollo/client';
import Header from '../components/Header';
import Table from 'react-bootstrap/Table';
import ViewModal from '../components/viewModal';

function Home() {
    const [leads, setLeads] = useState([]);
    const [show, setShow] = useState(false);
    const[header,setHeader]=useState('');
    const [modalFor,setmodalFor]=useState('');
    const [item,setItem]=useState('');
    const [addLead] = useMutation(ADD_LEADS);

    useEffect(() => {
      renderLead();
    },[leads]);

     useQuery(GET_LEADS, {
          onCompleted: (res) => {
            console.log(res);
            setLeads(res.leads.data);
            }
        });
      
const createLead =(val)=>{
  console.log(val);
  setShow(true);
  setmodalFor('create');
  setHeader('Create Lead');
  
}
const viewLead=(data)=>{
  setShow(true);
  setmodalFor('view');
  setHeader('View Lead');
  setItem(data);
}

const updateLead=(data)=>{
  setShow(true);
  setmodalFor('update');
  setHeader('Update Lead');
  setItem(data);
}

const insertLead=(val)=> {
  console.log(val.formData);
 addLead({
    variables: val.formData
  })
    .catch(() => {});
}
/*const [insertLead] = useMutation(ADD_LEADS, {
 variables: 'dfd'
});*/

const hideModal = () => setShow(false);

      const renderLead = () => {
        return leads.map((item) => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td >
              {item.attributes.Name}
            </td>
            <td >
             {item.attributes.Email}
            </td>
            <td >
             {item.attributes.Notes}
            </td>
            <td><Button variant="primary" onClick={()=>viewLead(item)}>View</Button>{' '}
            <Button variant="secondary" onClick={()=>updateLead(item)}>Update</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
        })
      }
  return (
    
    <div >
     <Header/>
     <Container>
     <Row className='mt-5 mb-5'>
      <Button className="btn btn-primary btn-md ml-auto" variant="primary" onClick={()=>createLead()}>Create Lead</Button>
      
    </Row>
     
      <Row >
        <Col>
       
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Notes</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {renderLead()}
      </tbody>
      </Table>
      </Col>
      </Row>
      </Container>
     {show && <ViewModal showModal={show} hideModal={hideModal} header={header} 
    crud={modalFor} leadData={item} insertLead={insertLead} />}
    </div>
    
    
  );
}

export default Home;
