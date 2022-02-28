// toggleLoginModal reducer (toggle the login modal on/off)

const checkLoginReducer = (state = true, action) => {
	switch(action.type){
		case 'CHECK_LOGIN':
        	return state
        // intitial state is the default state
		default:
			return state;
	}
}

export default checkLoginReducer