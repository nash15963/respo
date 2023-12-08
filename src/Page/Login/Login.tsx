import React from 'react'
import Title from '../../Components/Title'
import Form from '../../Components/Form'
import Footer from '../../Components/Footer'

const Login = () => {
    // put Fetch mutate
  
  
    return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: "100%",
        height: "100vh",
        backgroundColor:"rgb(102 102 115 / 13%)"
    }}>
        <Title/>
        <Form/>
        
        <Footer/>
    </div>
  )
}

export default Login