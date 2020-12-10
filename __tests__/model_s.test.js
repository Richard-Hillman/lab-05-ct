const fs = require('fs');
const request = require('supertest');
const app = require('../lib/app');
const pool = require('../lib/utils/pool');

describe('endpoint', () => {

  beforeAll(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  // -----------------------------------------------

  test('post a new car model_s row to the data table', async() => {
    const post = {
      title: 'Model S',
      descript: 'an evolution in automobile engineering. Dual Motor Model S is a categorical improvement on conventional all-wheel drive systems. With two motors, one in the front and one in the rear, Model S digitally and independently controls torque to the front and rear wheels.', 
      model: 'Long Range Plus',
      color: 'Solid Black',
      wheelType: '19inch Tempest',
      interior: 'All Black'
    };


    const expectation = {
      title: 'Model S',
      descript: 'an evolution in automobile engineering. Dual Motor Model S is a categorical improvement on conventional all-wheel drive systems. With two motors, one in the front and one in the rear, Model S digitally and independently controls torque to the front and rear wheels.', 
      model: 'Long Range Plus',
      color: 'Solid Black',
      wheelType: '19inch Tempest',
      interior: 'All Black',
      id: '1'
    };

    const data = await request(app)
      .post('/tesla/model_s')
      .send(post)
      .expect('Content-Type', /json/)
      .expect(200);
    expect(data.body).toEqual(expectation);
  });

  // -----------------------------------------------------



  // -----------------------------------------------------

});


