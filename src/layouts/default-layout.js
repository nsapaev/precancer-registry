import React, {useEffect, Fragment, memo} from 'react'

// router-dom
import {Navigate, Outlet} from 'react-router-dom'

// react-bootstrap
import {Container} from 'react-bootstrap'

//header
import Header from '../components/partials/HeaderStyle/header'

//sidebar
import Sidebar from '../components/partials/SidebarStyle/sidebar'

// footer
import Footer from '../components/partials/FooterStyle/footer'
import {useSelector} from "react-redux";


const DefaultLayout = memo(() => {
    useEffect(() => {
        //scroll up pages go
        window.scrollTo({top: 0, behavior: 'smooth'});
    })

    let auth = useSelector(state => state.login)



    if(auth.login !== "admin" || auth.password !== "admin" ){
        console.log("check auth navigate to login page")
       return <Navigate to="/login-page"/>
    }

    return (

        <Fragment>
            <div className="wrapper">
                <Sidebar/>
                <div id="content-page" className="content-page">
                    <Header/>
                    <Container fluid>
                        {/* <h1>DefaultLayout.</h1> */}
                        <Outlet></Outlet>
                    </Container>
                   {/* <Footer/>*/}
                </div>
            </div>
        </Fragment>


    )
})

DefaultLayout.displayName = "DefaultLayout"
export default DefaultLayout