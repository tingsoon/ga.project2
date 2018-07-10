var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class ReviewAdded extends React.Component {
  render() {

    return (
    	<LayoutContainer>
        <NavbarContainer>
        </NavbarContainer>
	    	<div className="container reviewBox">
	    		<h1>Review Added</h1>
		    		<form className="goBackHomePage" method="POST" action='/hawkercentres/reviewAdded?_method=DELETE'>
		                <input type="hidden" name="goBackHomePage" />
		                <p></p>
		                <button className="goBackHomePage btn btn-secondary" type="submit">Return to Home Page</button>
		            </form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = ReviewAdded;