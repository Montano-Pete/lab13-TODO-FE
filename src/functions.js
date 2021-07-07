import request from 'superagent';
const URL = 'https://quiet-depths-96304.herokuapp.com';

export async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password
        })
    
    return data.body.token;
}