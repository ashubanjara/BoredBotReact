import React from 'react'
//import activityArray from '../data/activities'
import { connect } from 'react-redux'
//import { getActivity } from '../actions'
import { getApiActivity } from '../actions'


// get activity from store and render it 
class Activity extends React.Component {
    
    costFloatToValue(float){
        if (float === 0) {
            return "Free!"
        }
        if (float < 0.25){
            return "Affordable"
        }
        else if (float < 0.5) {
            return "Moderately Expensive"
        }
        else if (float < 0.75) {
            return "Pricey"
        }
        else if (float < 1){
            return "Very Expensive"
        }
        else {
            return ""
        }
    }

    AccesibilityFloatToValue(float){
        if (float < 0.25){
            return "Very Accessible"
        }
        else if (float < 0.5) {
            return "Moderately Accessible"
        }
        else if (float < 1){
            return "Not Accessible"
        }
        else if (float === 2) {
            return ""
        }
        else {
            return "No Data"
        }
    }

    capitalizeFirstLetter(string){
        if (string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    render(){
        return (
        <div className="activity-container">
            {/*Activity name*/}
            <h2>{this.props.apiActivity.data.activity}</h2>
            {/*Get new activity button*/}
            
            {/*onClick={() => this.props.dispatch(getActivity(activityArray))}>*/}
            <button 
            className="bored-btn" 
            onClick={() => this.props.dispatch(getApiActivity())}>
                I'm Bored
            </button>
            {this.props.isLogged ?
            <div className="logged-in-extras">
                <h3>Participants: {this.props.apiActivity.data.participants}</h3>
                <h3>Cost: {this.costFloatToValue(this.props.apiActivity.data.price)}</h3>
                <h3>Accessibility: {this.AccesibilityFloatToValue(this.props.apiActivity.data.accessibility)}</h3>
            </div>
            : ""}
        </div>
        )
    }
}

// input the reducer name
const mapStateToProps = state => {
    return {
        activity: state.activity,
        apiActivity: state.apiActivity,
        isLogged: state.loginState
    }
}

// Get reducer by connecting to store
export default connect(mapStateToProps)(Activity)
