import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-jsonschema-form';
import { CreateForm ,UpdateForm,ViewLeads} from './CreateForm';




const ViewModal=(props)=> {
    const {showModal, hideModal,leadData} = props;

    //const onSubmit = ({formData},e) =>{ e.preventDefault(); console.log("Data submitted: ",  formData)};
    
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
     

<Modal show={showModal} onHide={hideModal}>
  <Modal.Header >
  <Modal.Title>{props.header}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
     {props.crud==='create'?
   <Form schema={CreateForm}  
     onSubmit={(formData) => {
      props.insertLead(formData);
    }}
     /> :
   props.crud==='view'? <ViewLeads item={leadData}/> : props.crud==='update'?
   <Form schema={UpdateForm} /> :'delete'
   }
    
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={hideModal}>
      Close
  </Button>
  <Button variant="primary" onClick={hideModal}>
      Save Changes
  </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
}

export default ViewModal;