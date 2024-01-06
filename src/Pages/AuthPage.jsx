import React, { Fragment } from 'react'
import AuthenticationImage from '../component/Authpage Components/AuthenticationImage'
import AuthenticationForm from '../component/Authpage Components/AuthenticationForm'
import NavBar from '../component/Authpage Components/NavBar'

const AuthPage = () => {
    return (
        <Fragment>
            <NavBar />
            <div className='flex flex-col md:flex-row items-center justify-center md:mx-auto'>
                <div className='hidden md:block'>
                <AuthenticationImage />
                </div>
                {/* <AuthenticationForm /> */}
            </div>
        </Fragment>
    )
}

export default AuthPage