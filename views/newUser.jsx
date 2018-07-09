var React = require('react');
var LayoutContainer = require('./layout.jsx');

class NewUser extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div className="newUserPage">
				<div className="userLogo">
				</div>
	    		<form action="/users/new" method="POST">
	    			<h1 className="h3 mb-3 font-weight-normal" id="pleaseSignIn">Enter User Details</h1>
	    			<input className="username form-control" type="text" name="username" placeholder="username" />
	    			<input className="password form-control" type="text" name="password" placeholder="password" />
	    			<p></p>
	    			<button className="submit btn btn-lg btn-secondary btn-block" type="submit" >Submit</button>
	    		</form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = NewUser;