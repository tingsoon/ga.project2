/**
 * Routes file.
 *
 * All routes you want to match in the app should appear here.
 * Upon match, a corresponding controller method should be called.
 *
 * Export as a function using `module.exports`,
 * to be imported (using `require(...)`) in `index.js`.
 */


module.exports = (app, db) => {

	const users = require('./controllers/user.js')(db);
	const hawkers = require('./controllers/hawkers')(db);
	const review = require('./controllers/review')(db);

	// users
	app.get('/users/new', users.newUserForm);
	app.post('/users/new', users.create);
	app.get('/users/created', users.created);
	app.get('/users/login', users.loginPage);
	app.post('/users/login', users.loginData);
	app.delete('/users/logout', users.logout);

	// hawkers
	app.get('/home', hawkers.home);
	app.post('/home', hawkers.search);
	app.get('/hawkers/north', hawkers.searchNorth);
	app.get('/hawkers/west', hawkers.searchWest);
	app.get('/hawkers/east', hawkers.searchEast);
	app.get('/hawkers/central', hawkers.searchCentral);		
	app.get('/hawkercentres', hawkers.showAllHawkers);
	app.put('/hawkercentres/:id', hawkers.showHawkerCentre);

	// reviews
	app.get('/hawkercentres/:id/review', review.showReviewForm);
	app.post('/hawkercentres/:id/review', review.addReviewData);
	app.delete('/hawkercentres/reviewAdded', review.reviewAdded);





	// default login page
	app.get('/', users.loginPage);
};
