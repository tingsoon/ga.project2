/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */

/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

const sha256 = require('js-sha256');

const SALT = "hawkerlah";

module.exports = function(db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const newUserForm = (request, response) => {

    response.render('newUser');

  };  

  const create = (request, response) => {

    // create a user
    let password_hash = sha256(request.body.password);
    let username = request.body.username;

    db.users.checkUserName(username, (error, queryResult) => {

      // check for same username
      if (error) {
        response.send('Database error 8: ', error.message);
      } else {

        const queryRows = queryResult.rows;

        if (queryRows.length > 0) {

          response.send('User name already exists. Go back and choose again.');

        } else {
              // continue to add user
              db.users.userCreate(username, password_hash, (error, queryResult) => {

              if (error) {
                response.send('Database error 6: ', error.message);
              } else {
                let user_id = queryResult.rows[0].id;
                response.redirect('/users/created');
              }
    });
        }
      }

    });


  };

  const created = (request, response) => {

    response.render('userCreated');

  };

  const loginPage = (request, response) => {

    response.render('login');

  };

  const loginData = (request, response) => {

    let username = request.body.username;

    db.users.checkLogin(username, (error, queryResult) => {

      if (error) {
        response.send('Database error 7: ' , error.message);
      } else {
        const queryRows = queryResult.rows;

        if (queryRows.length < 1) {
          response.status(401).send('Wrong username or password. Try again.');
        } else {

          let db_pass_hash = queryRows[0].password;

          let request_pass_hash = sha256(request.body.password);

          let user_id = queryRows[0].id;

          let currentSessionCookie = sha256(user_id + 'logged_in' + SALT);

          if (db_pass_hash === request_pass_hash) {

            response.cookie('logged_in', currentSessionCookie);
            response.cookie('user_id', user_id);

            response.redirect('/home')
          } else {
            response.status(401).send('Wrong username or password. Try again.');
          }
        }
      }

    })


  };

  const logout = (request, response) => {

    response.clearCookie('user_id');
    response.clearCookie('logged_in');
    response.redirect('/users/login');

  };


  return {
    newUserForm : newUserForm,
    create : create,
    created : created,
    loginPage: loginPage,
    loginData : loginData,
    logout : logout
  }


};
