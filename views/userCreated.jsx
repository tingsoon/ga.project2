var React = require('react');
var LayoutContainer = require('./layout.jsx');

class NewUser extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div>
	    		<h1>User Created</h1>
		    		<form className="goBackLoginPage" method="GET" action='/users/login'>
		                <input type="hidden" name="goBackLoginPage" />
		                <div className="buttonDiv">
		                	<input className="goBackLoginPage" type="submit" value="Return To Login Page." />
			            </div>
		            </form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = NewUser;