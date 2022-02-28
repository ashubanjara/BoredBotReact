// get activity reducer (get a new activity from given data)

const getActivityReducer = (state = "Press the Bored Button!", action) => {
	switch(action.type){
		case 'GET_ACTIVITY':
			let randomItem = action.payload[Math.floor(Math.random() * action.payload.length)]
        	// set new state to random activity
        	return randomItem.activity;
        // intitial state is the default state
		default:
			return state;
	}
}

export default getActivityReducer