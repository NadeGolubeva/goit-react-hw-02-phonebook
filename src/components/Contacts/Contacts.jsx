import PropTypes from 'prop-types';
import {Names, Btn} from './Contacts.styled'

export const ContactsDatas = ({ contactsInfo, onDelete}) => {
    return (
            <ul>
    {contactsInfo.map(contact => {
   return ( <li key={contact.id}>
       <Names>{contact.name}: {contact.number}  <Btn type="button"
           onClick={() => {
               onDelete(contact.id)}}>Delete</Btn> </Names>
    </li>)
     })}
 </ul>
    )
}

ContactsDatas.propTypes = {
    contactsInfo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}