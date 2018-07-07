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

		addReview: (input, username, hawkerId, callback) => {

			const queryString = 'INSERT INTO reviews (username, title, description, rating, hawkerId) VALUES ($1, $2, $3, $4, $5) RETURNING *';

			const values = [username, input.title, input.description, input.rating, hawkerId];

			console.log(values);

			db.query(queryString, values, callback);
		}


	};
};






