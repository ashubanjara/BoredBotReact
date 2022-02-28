import React from 'react'

// webpage footer
class Footer extends React.Component {
    render(){
        return (
        <div className="footer">
            <div className="nav-bar">
                <p>HOME</p>
                <p>PRIVACY</p>
                <p>CONTACT</p>
            </div>

            <div>
                <p>
                    Made Using React and <a href="https://www.boredapi.com/">
                    BoredAPI</a>
                </p>
                <p>©BoredBot</p>
            </div>
        </div>
        )
    }
}

export default Footer
