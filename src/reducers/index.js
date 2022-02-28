
import getActivityReducer from './getActivity'
import checkLoginReducer from './toggleLoginModal'
import setApiActivityReducer from './setApiActivity'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

// all reducers in here
const allReducers = combineReducers({
    activity: getActivityReducer,
    loginState: checkLoginReducer,
    apiActivity: setApiActivityReducer,
    form: formReducer
})

export default allReducers