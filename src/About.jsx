import {Component} from 'react';
import styles from './about.module.css';

class About extends Component {
    render() {
        return (
            <div className= {styles.about}>
                <h2>About Ollie</h2>
                    <p>
                        Ollie is a curious and clever octopus who lives in the vibrant 
                        coral reefs of the Pacific Ocean. With his bright red tentacles 
                        and inquisitive eyes, Ollie loves to explore the nooks and crannies 
                        of his underwater world, discovering hidden treasures and new friends 
                        along the way. Known for his playful nature, Ollie often delights 
                        in showing off his skills, like squeezing through the tiniest of 
                        spaces or mimicking the colors and textures of the sea floor. 
                        Despite his small size, Ollie's big heart and adventurous spirit 
                        make him a beloved figure among the reef's inhabitants.
                    </p>
            </div>
        );
    }
}

export default About;