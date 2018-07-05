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

	// users
	app.get('/users/new', users.newUserForm);
	app.post('/users/new', users.create);
	app.get('/users/created', users.created);
	app.get('/users/login', users.loginPage);
	app.post('/users/login', users.loginData);
	app.delete('/users/logout', users.logout);

	// hawkers
	app.get('/home', hawkers.home);
	app.post('/home', hawkers.search)
	app.get('/hawkercentres', hawkers.showAllHawkers);
	app.put('/hawkercentres/:id', hawkers.showHawkerCentre);






	// default login page
	app.get('/', users.loginPage);
};
