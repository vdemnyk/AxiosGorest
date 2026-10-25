const axios = require('axios');
const TOKEN = 'Bearer 0387053ef5691ce7c34d596a3290f1c961ab237c1a608b73c01c576c5e8d3d24';
const BASE_URL = 'https://gorest.co.in';

class UserRequests {

    async createUser(name, gender, email, password, status) {
        const response = await axios.post(`${BASE_URL}/public/v2/users`, {
            "name": `${name}`,
            "gender": `${gender}`,
            "email": `${email}`,
            "password": `${password}`,
            "status": `${status}`
        }, {
            headers: {
                'Authorization': TOKEN
            }
        });
        return response;
    }

    async updateUserName(id, userName) {
        const response = await axios.patch(`${BASE_URL}/public/v2/users/${id}`, {
            "name": `${userName}`
        }, {
            headers: {
                'Authorization': TOKEN
            }
        });
        return response;
    }
}

module.exports = new UserRequests();