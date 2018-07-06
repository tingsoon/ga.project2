var React = require('react');
var LayoutContainer = require('./layout.jsx');

class NewUser extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div>
	    		<h1>Create New User</h1>
	    		<form action="/users/new" method="POST">
	    			<input className="username" type="text" name="username" placeholder="username" />
	    			<input className="password" type="text" name="password" placeholder="password" />
	    			<input className="submit" type="submit" />
	    		</form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = NewUser;