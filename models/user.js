/**
 * User model functions.
 *
 * Any time a database SQL query needs to be executed
 * relating to a user (be it C, R, U, D, or Login),
 * one or more of the functions here should be called.
 *
 * NOTE: You can add authentication logic in this model.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `db.js`.
 */

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = function(db){
	//`db` is accessible within this function scope
	return {
		checkUserName: (username, callback) => {

			let queryText = 'SELECT * FROM users WHERE username = $1';
  			const checkValue = [username];

  			db.query(queryText, checkValue, callback);

		},

		userCreate: (username, password_hash, callback) => {
			// set up query
			let queryString = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';

			const values = [username, password_hash];

			// console.log(db);

			// execute query
			db.query(queryString, values, callback);
		},

		checkLogin: (username, callback) => {

			let queryString = 'SELECT * FROM users WHERE username = $1';

			const values = [username];

			db.query(queryString, values, callback);

		}

    };
};