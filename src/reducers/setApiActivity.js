// get activity reducer (get a new activity from given data)

const setApiActivityReducer = (state = {data: {activity: "Press the Bored Button!", accessibility: 2}}, action) => {
	switch(action.type){
		case 'SET_API_ACTIVITY':
        	return action.payload
        // intitial state is the default state
		default:
			return state;
	}
}

export default setApiActivityReducer

