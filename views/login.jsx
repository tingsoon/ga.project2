var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Login extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div>
	    		<div>
	    			<div className="container" id="loginPage">
	    			<div className="loginLogo">
	    			</div>
		    		<form action="/users/login" method="POST">
		    			<h1 className="h3 mb-3 font-weight-normal" id="pleaseSignIn">Please sign in</h1>
		    			<input className="username form-control" type="text" name="username" placeholder="Username" />
		    			<input className="password form-control" type="text" name="password" placeholder="Password"/>
		    			<p></p>
		    			<button className="submit btn btn-lg btn-secondary btn-block" type="submit" >Sign In</button>
		    		</form>
	    	
	    		<p></p>
	    		<div>
		    		<form className="createuser" method="GET" action='/users/new'>
	                <input type="hidden" name="createuser" />
	                
	                	<button className="createuser btn btn-lg btn-light btn-block" type="submit">Create User</button>
		     
		            </form>
       		   	</div>
       		   	</div>
       		   	</div>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Login;