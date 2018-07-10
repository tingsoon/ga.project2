var React = require('react');
var LayoutContainer = require('./layout.jsx');

class NewUser extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div className="container reviewBox">
	    		<h1>User Created</h1>
		    		<form className="goBackLoginPage" method="GET" action='/users/login'>
		                <input type="hidden" name="goBackLoginPage" />
		                	<button className="goBackLoginPage btn btn-secondary" type="submit">Return to Login Page</button>
		            </form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = NewUser;