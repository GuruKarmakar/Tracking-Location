import { PROFILE, UPDATE_PROFILE } from '../types';

const initState = {
	profile: {},
	loading: false,
	error: '',
};

export const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case PROFILE.LOADING:
			return {
				...state,
				loading: true,
			};
		case PROFILE.SUCCESS:
			return {
				...state,
				profile: action.payload,
				loading: false,
			};

		case PROFILE.ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		case UPDATE_PROFILE:
			return {
				...state,
				profile: action.payload,
			};
		default:
			return state;
	}
};
