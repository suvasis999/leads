import { gql} from '@apollo/client';

export const GET_LEADS = gql`
    query {
      leads {
        data{
          id
          attributes{
            Name,
            email,
            Source,
            date,
            Time,
            Notes,
            createdAt
          }
        }
      }
    }

`;

export const ADD_LEADS= 
gql`
  mutation($name: String, $email: String, $notes: String) {

    createLead(
      data: {
        Name: $name,email: $email, Notes: $notes
        
      }
    ) {
      data{
        attributes{
          Name,
          email,
          Notes
        }
      }
      
    }
   
  }
`;


export const DELETE_LEAD= gql`
  mutation($id: Int) {
    deleteLead(id: $id)
  }`;