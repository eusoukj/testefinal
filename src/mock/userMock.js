import mock from "../utils/mock";

 mock.onPost('/api/home/me').reply(200, {
     user: {
        id: 1,
        name: 'Kelvin Jordan',
        username: 'kjtrader',
        email: 'kelvinjor96@gmail.com',
        avatar: '/images/avatars/avatar1.jpg',
     },
 });

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'kelvinjor96@gmail.com' || password !== 'psicodelia12') {
        return [400, { message: 'Seu e-mail ou senha estão incorretos' }];    
    }
    
    const user = {
        id: 1,
        name: 'Kelvin Jordan',
        usarname: 'kjtrader',
        email: 'kelvinjor96@gmail.com',
        avatar: '/images/avatars/avatar1.jpg',
    };


    return [200, { user }]
});