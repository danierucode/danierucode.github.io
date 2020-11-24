import React from 'react'
import MenuFactory from '../../components/MenuFactory/MenuFactory'
import registeredMenus from '../../components/MenuFactory/RegisteredMenus.json'
import HomeMenu from '../../components/HomeMenu/HomeMenu'
import Presentation from '../../components/Presentation/Presentation'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'
import pageData from '../../page-data.json'
import Styles from './Home.module.css'
import background from '../../images/background.jpg'
import Technologies from '../../components/Technologies/Technologies'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'

const Home = () => {
    const homeMenuName = registeredMenus.homeMenu
    const components = [
        { render: <Technologies key='1' />, id: 'Technologies', title: 'Technologies' },
        { render: <Experience key='3' />, id: 'Experience', title: 'Experience' },
        { render: <Education key='2' />, id: 'Education', title: 'Education' },
        { render: <Projects key='4' />, id: 'Projects', title: 'Projects' },
    ]
    return (
        <>
            <section className={Styles.background} style={
                {
                    background: `linear-gradient(rgba(50, 50, 50, 0.8), rgba(100, 100, 100, 0.5)), url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }
            }>
            </section>
            <section className={Styles.home} >
                <MenuFactory name={homeMenuName} initialOption='Technologies'>
                    <HomeMenu
                        options={pageData.options}
                    />
                </MenuFactory>
                <Presentation />
                <ScrollContainer components={components} menuName={homeMenuName} />
            </section>
        </>
    )
}

export default Home