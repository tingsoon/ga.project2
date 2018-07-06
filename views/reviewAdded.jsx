var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ReviewAdded extends React.Component {
  render() {

    return (
    	<LayoutContainer>
	    	<div>
	    		<h1>Review Added</h1>
		    		<form className="goBackHomePage" method="GET" action='/home'>
		                <input type="hidden" name="goBackHomePage" />
		                <div className="buttonDiv">
		                	<input className="goBackHomePage" type="submit" value="Return To Home Page." />
			            </div>
		            </form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = ReviewAdded;