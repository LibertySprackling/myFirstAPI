const request = require('supertest');
const app = require('./app');

//testing the home route

describe('API Server', () => {
    let api;

//test server running
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running at port 5000!');
        });
    });
//test server stopping
    afterAll((done) => {
        api.close(done);
        console.log('Gracefully stopping test server');
    });
//test home route
    it('responds to get / with a status 200', done => {
        request(api).get('/').expect(200, done);
    });
//test pbBooks route
    it('responds to get /pbBooks with a status 200', (done) => {
        request(api).get('/pbBooks').expect(200, done);
    });
//test the route for pbBooks by rating
it('retrieves a book by rating', (done) =>{
    request(api)
    .get('/pbBooks/6')
    .expect(200)
    .expect({rating:6, title:'Where the Crawdads Sing', author:'Delia Owens'}, done);
});


})