import { config } from '../config';
import { authHeader } from './authHeader';

var userService = {

    login: function(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
        let user = "myuser"
        localStorage.setItem('user', JSON.stringify(user));
        return user;

        // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        //     .then(handleResponse)
        //     .then(user => {
        //         // login successful if there's a user in the response
        //         if (user) {
        //             // store user details and basic auth credentials in local storage 
        //             // to keep user logged in between page refreshes
        //             user.authdata = window.btoa(username + ':' + password);
        //             localStorage.setItem('user', JSON.stringify(user));
        //         }

        //         return user;
        //     });
    },

    logout: function() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    },

    getAll: function() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(`${config.apiUrl}/users`, requestOptions).then(this.handleResponse);
    },

    handleResponse: function (response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    this.logout();
                    //location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }
}
export default userService;