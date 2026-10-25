let Chance = require('chance');
let chance = new Chance();

const userRequests = require('../requests/userRequests');

const userName = chance.name();
let userId;

describe('Verifing user creation and updating   ', () => {
    const gender =  chance.gender();
    const userEmail = chance.email();
    const userPassword = chance.string({ length: 8 });
    const status = 'active';

    it('Create user', async () => {
        const response = await userRequests.createUser(userName, gender, userEmail, userPassword, status);
        expect(await response.status).toBeLessThan(300);
        userId = response.data.id;
    });

    it('Update user name', async () => {
        const response = await userRequests.updateUserName(userId, userName + '_updated');
        expect(await response.status).toBeLessThan(300);
    });
});