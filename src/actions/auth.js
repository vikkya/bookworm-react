import {USER_LOGGED_IN} from '../types';
import api from '../api';

export const userLoggeedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => dispatch(userLoggeedIn(user)));