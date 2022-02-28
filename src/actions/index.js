// only action for now is to get a random activity from js file

export const getActivity = activity => {
	return {
		type: 'GET_ACTIVITY',
		payload: activity
	}
}

export const checkLogin = () => {
	return {
		type: 'CHECK_LOGIN'
	}
}

// Actions for Redux Saga

export const getApiActivity = () => {
	return {
		type: 'GET_API_ACTIVITY'
	}
}

export const setApiActivity = activity => {
	return {
		type: 'SET_API_ACTIVITY',
		payload: activity
	}
}