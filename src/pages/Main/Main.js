import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Projectsmy from '../../components/projectsmy/projectsmy'


function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} -hello Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            {/* <Education /> */}
            <Skills />
            {/* <Experience /> */}
            {/* <Projects /> */}
            <Projectsmy/>
            {/* <Achievement /> */}
            {/* <Services /> */}
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
