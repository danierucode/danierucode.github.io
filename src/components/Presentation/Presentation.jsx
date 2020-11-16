import React from 'react'
import Styles from './Presentation.module.css'
import ProfilePic from '../../images/profile-pic.jpg'
import { Icon } from 'react-icons-kit'
import { linkedin, github, mail, phone } from 'react-icons-kit/icomoon'
import { contact } from '../../page-data.json'

const Presentation = (props) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.picContainer}>
                <img src={ProfilePic} className={Styles.profilePic} alt='Profile Pic'></img>
            </div>
            <h1 className={Styles.name}>Jesús Michel</h1>
            <h2 className={Styles.title}>Software Developer</h2>
            <p className={Styles.description}>Let's build something incredible!</p>
            <div className={Styles.contactContainer}>
                <h3 className={Styles.contactTitle}>Contact</h3>
                <div>
                    <Icon icon={mail} size={20} />
                    <p className={Styles.link} href={contact.mail}>{contact.mail}</p>
                </div>
                <div>
                    <Icon icon={phone} size={20} />
                    <p className={Styles.link} href={contact.phone}>{contact.phone}</p>
                </div>
            </div>
            <div className={Styles.footer}>
                <a className={Styles.link} href={contact.linkedin}><Icon icon={linkedin} size={25} /></a>
                <a className={Styles.link} href={contact.github}> <Icon icon={github} size={25  } /></a>
            </div>
        </section>
    )
}

export default Presentation