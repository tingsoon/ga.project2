var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Login extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div>
	    		<div>
		    		<h1>HAWKERLAH!</h1>
		    		<p></p>
		    		<form action="/users/login" method="POST">
		    			<input className="username" type="text" name="username" placeholder="username" />
		    			<input className="password" type="text" name="password" placeholder="password"/>
		    			<input className="submit" type="submit" />
		    		</form>
	    		</div>
	    		<p></p>
	    		<div>
		    		<form className="createuser" method="GET" action='/users/new'>
	                <input type="hidden" name="createuser" />
	                <div className="buttonDiv">
	                	<input className="createuser" type="submit" value="Create User" />
		            </div>
		            </form>
       		   </div>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Login;