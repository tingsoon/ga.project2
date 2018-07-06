/**
 * Pokemon controller functions.
 *
 * Each pokemon-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */

module.exports = (db) => { 


/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

 	const showReviewForm = (request, response) => {

 		response.render('addReview');

 	};

 	// const addReviewData = (request, response) => {

 	// 	let input = request.body

 	// 	db.reviews.addReview

 	// };




/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

 	return {
 		showReviewForm
 		// addReviewData

 	};




};