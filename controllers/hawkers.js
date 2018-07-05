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
 	const home = (request, response) => {

 		response.render('home');

 	};

 	const search = (request, response) => {

 		// let inputSearch = request.body;
 		let input = request.body.hawkerCentre;

 		db.hawkers.searchHawker(input, (error, queryResult) => {

 			if (error) {
 				console.error('query error 2: ', error.stack);
 			} else {

 				const queryRows = queryResult.rows;
 				console.log(queryRows);

 				// no search values
 				if (queryRows.length < 1) {
 					response.send('No search result');
 				} else {
 					const data = {
 						search_hawkers : queryRows
 					};

 					response.render('searchHawkers', data);
 				}
 			}

 		});

 	};

 	const showAllHawkers = (request, response) => {

 		let smth;

 		db.hawkers.getAllHawkers(smth, (error, queryResult) => {

 			const hawkerData = queryResult.rows;

 			if (error) {
 				console.error('query error 1: ', error.stack);
 			} else {

 				const data = {
 					all_hawkers : hawkerData
 				};

 				response.render('allHawkers', data);
 			}

 		});
 	};

 	const showHawkerCentre = (request, response) => {

 		let hawkerId = parseInt(request.params.id);

 		db.hawkers.getHawkerCentre(hawkerId, (error, queryResult) => {

 			if (error) {
 				console.error('error 2 getting hawker centre: ', error.message);
 			} else {
 				if (queryResult.rows.length > 0) {

 					queryResult.rows[0].region = queryResult.rows[0].region.charAt(0).toUpperCase() + queryResult.rows[0].region.slice(1);
 					console.log(queryResult.rows[0].region);

 					response.render('showHawker', { hawker : queryResult.rows[0] });
 				} else {
 					response.send('Hawker Centre not found.')
 				}
 			}
 		});
 	};






/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

 	return {
 		home,
 		search,
 		showAllHawkers,
 		showHawkerCentre

 	};




};