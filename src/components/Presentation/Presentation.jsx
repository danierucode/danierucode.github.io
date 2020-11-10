import React from 'react'
import Styles from './Presentation.module.css'
import ProfilePic from '../../images/profile-pic.jpg'

const Presentation = (props) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.picContainer}>
                <img src={ProfilePic} className={Styles.profilePic} alt='Profile Pic'></img>
            </div>
            <h1 className={Styles.name}>Jesús Michel</h1>
            <h2 className={Styles.title}>Software Developer</h2>
            <p className={Styles.description}>Let's build something incredible!</p>
        </section>
    )
}

export default Presentation