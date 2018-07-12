const jsonfile = require('jsonfile');
const FILE = 'hawkers.json';

// REMEMBER TO CHANGE YOUR CONFIGS BEFORE RUNNING THIS SCRIPT!!
const pg = require('pg');
// inside of db.js

//require the url library
//this comes with node, so no need to yarn add
const url = require('url');

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
	user: 'angtingsoon',
	host: '127.0.0.1',
	database: 'hawkerlah',
	port: '5432'
  };
}


const client = new pg.Client(configs);

jsonfile.readFile(FILE, (fileReadError, obj)=>{

	if (fileReadError) {

		throw new Error('File read error' + fileReadError.message);

	} else {

		client.connect((dbConnectError) => {
	
			if (dbConnectError) {

				throw new Error('Connection error: ' + dbConnectError.message);

			} else {

				console.log('Connected to database.');

				let hawkers = obj.hawkers;
				// console.log(hawkers);
				// console.log(hawkers.length);
				let text = 'INSERT INTO hawkerCentres (name, address, cookedfoodstalls, lat, lng, img, description, region) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
				let values = null;

				hawkers.forEach((hawker) => {
					values = [hawker.name, hawker.address, hawker.cookedfoodstalls, hawker.lat, hawker.lng, hawker.img, hawker.description, hawker.region];
					console.log(values);
					client.query(text, values, (dbQueryError, result) => {
						if (dbQueryError) {

							console.log(dbQueryError);

						} else {

							console.log("Entry added:", result.rows[0].id);

						}
						if (result.rows[0].id == hawkers.length) { client.end() };
					});
				});
			}
		});
	}
});