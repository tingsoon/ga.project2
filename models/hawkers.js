/**
 * Pokemon model functions.
 *
 * Any time a database SQL query needs to be executed
 * relating to a pokemon (be it C, R, U, or D),
 * one or more of the functions here should be called.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `db.js`.
 */

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

// make module.exports as a function

module.exports = (db) => {

	//`dbPoolInstance` is accessible within this function scope
	return {

		// Show all hawker centres
		getAllHawkers: (smth, callback) => {

			const queryString = 'SELECT * FROM hawkercentres ORDER BY name ASC';

			db.query(queryString, callback);
		},

		getHawkerCentre: (id, callback) => {

			const queryString = 'SELECT * FROM hawkercentres WHERE id = $1';

			const values = [id];

			db.query(queryString, values, callback);
		},

		searchHawker: (input, callback) => {

			const queryString = "SELECT * FROM hawkercentres WHERE name LIKE '%'||$1||'%'";

			// capitalize input
			function capitalize(str) {
			    let string = str.split(" ");

			    for (var i = 0, x = string.length; i < x; i++) {
			        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
			    }

			    return string.join(" ");
			};

			let inputWord = capitalize(input)

			const values = [inputWord];

			db.query(queryString, values, callback);

		},

		searchNorthHawkers: (smth, callback) => {

			const queryString = "SELECT * FROM hawkercentres WHERE region = 'north'";

		db.query(queryString, callback);
		},

		searchWestHawkers: (smth, callback) => {

			const queryString = "SELECT * FROM hawkercentres WHERE region = 'west'";

		db.query(queryString, callback);
		},

		searchEastHawkers: (smth, callback) => {

			const queryString = "SELECT * FROM hawkercentres WHERE region = 'east'";

		db.query(queryString, callback);
		},

		searchCentralHawkers: (smth, callback) => {

			const queryString = "SELECT * FROM hawkercentres WHERE region = 'central'";

		db.query(queryString, callback);
		}








	};
};






