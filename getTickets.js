require('dotenv').config()
const needle = require('needle');

async function main({devEmail}) {
  try {
    let response = await needle('get', `${process.env.GATEWAY_URL}/verticket?L3email=${devEmail}`, { headers: { 'accept': 'application/json' } });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {tickets: response.body},
    };
  } catch (err) {
    console.log(err)
    return Promise.reject({
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: { message: err.message },
    });
  }
}
exports.main = main;