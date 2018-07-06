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

		// addReview: (title, review, rating, username, callback) => {

		// 	const queryString = 'INSERT INTO reviews (username, title, description, rating) VALUES ($1, $2, $3, $4) RETURNING *';

		// 	const values = [
		// 		username,
		// 		title,
		// 		description,
		// 		rating
		// 	];

		// 	db.query(queryString, values, callback);
		// }


	};
};






