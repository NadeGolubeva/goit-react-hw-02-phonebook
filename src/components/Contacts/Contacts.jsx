import PropTypes from 'prop-types';

export const ContactsDatas = ({ contactsInfo}) => {
    return (
            <ul>
                {contactsInfo.map(contact => {
                    return ( <li key={contact.id}>
                        <b>{contact.name}</b>
<b>{contact.number}</b>

                </li>)
                }  
                )}
            </ul>
    )
}

ContactsDatas.propTypes = {
    contactsInfo: PropTypes.array.isRequired, 
}