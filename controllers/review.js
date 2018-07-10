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

 		// console.log(request.params.id);
 		let hawkerId = parseInt(request.params.id);
		response.cookie('hawkerId', hawkerId);
		if (request.cookies.user_id === undefined) {
			response.redirect('/users/login');
		} else {
 		response.render('addReview');
		}
 	};

 	const addReviewData = (request, response) => {

 		let hawkerId = parseInt(request.cookies['hawkerId']);
 		// console.log(request.body);
 		let input = request.body;
 		let username = request.cookies['username'];

 		db.reviews.addReview(input, username, hawkerId, (error, queryResult) => {

 			response.render('reviewAdded', {id: hawkerId});

 		});

 	};

 	const reviewAdded = (request, response) => {

		response.clearCookie('hawkerId');
		if (request.cookies.user_id === undefined) {
			response.redirect('/users/login');
		} else {
		response.redirect('/home');
		}
 	};

 	const about = (request, response) => {

		if (request.cookies.user_id === undefined) {
			response.redirect('/users/login');
		} else {
		response.render('about');
		}
 	};




/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

 	return {
 		showReviewForm,
 		addReviewData,
 		reviewAdded,
 		about

 	};




};