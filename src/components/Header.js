import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// webpage header
class Header extends React.Component {
    render(){
        return (
        <div className="header">
            <div className="upper-header">
                <h1>🤖BoredBot🤖</h1>
                {!this.props.isLogged ?
                <Link to="#" className=".hidden"></Link> 
                : <Link to="#" className=".hidden"></Link>}
            </div>
        </div>
        )
    }
}

// input the reducer name
const mapStateToProps = state => {
    return {
        isLogged: state.loginState
    }
}

// Get reducer by connecting to store
export default connect(mapStateToProps)(Header)