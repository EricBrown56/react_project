import {Component} from 'react';
import styles from './contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={styles.contact}>
                <h2>Contact Ollie</h2>
                <p>
                    If you have any questions or comments about Ollie the Octopus, 
                    please feel free to reach out to us at the following email address: 
                    <a href="mailto:ollie_ollie@gmail.com"> Send email</a>
                </p>
            </div>
        );
    }
}

export default Contact;