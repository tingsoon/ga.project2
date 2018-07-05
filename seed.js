const jsonfile = require('jsonfile');
const FILE = 'hawkers.json';

// REMEMBER TO CHANGE YOUR CONFIGS BEFORE RUNNING THIS SCRIPT!!
const pg = require('pg');
const config = {
	user: 'angtingsoon',
	host: '127.0.0.1',
	database: 'hawkerlah',
	port: '5432'
};

const client = new pg.Client(config);

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