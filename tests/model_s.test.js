const fs = require('fs');
const request = require('supertest');
const app = require('./index');
const ModelS = require('../lib/utils/tesla/model_s'); 
const pool = require('../lib/utils/pool');

describe('endpoint', () => {

    beforeAll(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });

    afterAll(() => {
        return pool.end();
    });

    test('post a new car model_s row to the data table', async() => {
        const post = {
            

        }
    })

