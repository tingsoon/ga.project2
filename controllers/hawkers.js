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

		let username = request.cookies.username;

		if (request.cookies.user_id === undefined) {
			response.redirect('/users/login');
		} else {
			response.render('home', {
				user: username
			});
		}

	};

	const search = (request, response) => {

		let input = request.body.hawkerCentre;

		db.hawkers.searchHawker(input, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 2: ', error.stack);
			} else {

				const queryRows = queryResult.rows;
				// console.log(queryRows);

				// no search values
				if (queryRows.length < 1) {
					response.send('No search result');
				} else {
					const data = {
						search_hawkers: queryRows
					};
					response.render('searchHawkers', data);
				}
			}

		});

	};

	const searchNorth = (request, response) => {

		let smth;

		db.hawkers.searchNorthHawkers(smth, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 1: ', error.stack);
			} else {

				const queryRows = queryResult.rows;

				const data = {
					search_hawkers: queryRows
				};

				response.render('searchHawkers', data);
			}
		});

	};


	const searchWest = (request, response) => {

		let smth;

		db.hawkers.searchWestHawkers(smth, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 1: ', error.stack);
			} else {

				const queryRows = queryResult.rows;

				const data = {
					search_hawkers: queryRows
				};

				response.render('searchHawkers', data);
			}
		});

	};


	const searchEast = (request, response) => {

		let smth;

		db.hawkers.searchEastHawkers(smth, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 1: ', error.stack);
			} else {

				const queryRows = queryResult.rows;

				const data = {
					search_hawkers: queryRows
				};

				response.render('searchHawkers', data);
			}
		});

	};


	const searchCentral = (request, response) => {

		let smth;

		db.hawkers.searchCentralHawkers(smth, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 1: ', error.stack);
			} else {

				const queryRows = queryResult.rows;

				const data = {
					search_hawkers: queryRows
				};

				response.render('searchHawkers', data);
			}
		});

	};

	const showAllHawkers = (request, response) => {

		let smth;

		db.hawkers.getAllHawkers(smth, (error, queryResult) => {

			const hawkerData = queryResult.rows;

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('query error 1: ', error.stack);
			} else {

				const data = {
					all_hawkers: hawkerData
				};

				response.render('allHawkers', data);
			}

		});
	};

	const showHawkerCentre = (request, response) => {

		let hawkerId = parseInt(request.params.id);

		db.hawkers.getHawkerCentre(hawkerId, (error, queryResult) => {

			if (request.cookies.user_id === undefined) {
				response.redirect('/users/login');
			} else if (error) {
				console.error('error 2 getting hawker centre: ', error.message);
			} else {
				if (queryResult.rows.length > 0) {

					queryResult.rows[0].region = queryResult.rows[0].region.charAt(0).toUpperCase() + queryResult.rows[0].region.slice(1);

					hawkerData = queryResult.rows[0];

					db.hawkers.getReview(hawkerId, (err, result) => {

						if (err) {
							console.error('error 3 getting reviews: ', err.message);
						} else {
							if (result.rows.length > 0) {

								hawkerReviews = result.rows;

								for (let i = 0; i < result.rows.length; i++) {
									hawkerReviews[i].username = "Reviewed By : " + hawkerReviews[i].username;
									hawkerReviews[i].rating = "Ratings : " + hawkerReviews[i].rating + " / 5";
								}

								response.render('showHawker', {
									hawker: hawkerData,
									reviews: hawkerReviews
								});
							} else {

								// let hawkerNoReviews = result.rows;
								let hawkerNoReviews = [{
									title: "No reviews yet.",
									rating: "",
									username: "",
									description: ""
								}]

								response.render('showHawker', {
									hawker: hawkerData,
									reviews: hawkerNoReviews
								});
							}
						}

					});


				} else {
					response.send('Hawker Centre not found.');
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
		searchNorth,
		searchWest,
		searchEast,
		searchCentral,
		showAllHawkers,
		showHawkerCentre

	};




};