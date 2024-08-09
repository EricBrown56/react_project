import {Component} from 'react';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return <h1 className={styles.header}>Ollie the Octopus!</h1>;
    }
    
}

export default Header;