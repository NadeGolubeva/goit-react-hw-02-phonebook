import PropTypes from 'prop-types';

export const ContactsDatas = ({ contactsInfo, onDelete}) => {
    return (
            <ul>
    {contactsInfo.map(contact => {
   return ( <li key={contact.id}>
       <p>{contact.name}: {contact.number}  <button typr="button"
           onClick={() => {
               onDelete(contact.id)}}>Delete</button> </p>

    </li>)
     }  
     )}
 </ul>
    )
}

ContactsDatas.propTypes = {
    contactsInfo: PropTypes.array.isRequired, 
    onDelete: PropTypes.func.isRequired,
}