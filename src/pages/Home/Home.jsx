import React from 'react'
import Menu from '../../components/Menu/Menu'
import Presentation from '../../components/Presentation/Presentation'
import OptionContainer from '../../components/OptionContainer/OptionContainer'
import Styles from './Home.module.css'
import background from '../../images/background.jpg'
//import { options, selectOption } from '../../redux/home-rdx'
//import { connect } from 'react-redux'

const Home = () => {
    return (
        <section className={Styles.home} style={
            {
                background:`linear-gradient(rgba(50, 50, 50, 0.8), rgba(100, 100, 100, 0.5)), url(${background})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }
        }>
            <Menu/>
            <Presentation/>
            <OptionContainer/>
        </section>
    )
}

export default Home