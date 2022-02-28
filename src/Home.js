import React from 'react'
import Activity from './components/Activity'
import Footer from './components/Footer'
import Header from './components/Header'

class Home extends React.Component {
    render(){
        return (
        <div className="main-content">
            <Header/>
            <Activity/>
            <Footer/>
        </div>
        )
    }
}

export default Home;
