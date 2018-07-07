var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class Home extends React.Component {
  render() {

    return (
    	<LayoutContainer>
    	<NavbarContainer>
        </NavbarContainer>
	    	<div>
	    		<div>
		    		<h1>WELCOME TO HAWKERLAH!</h1>
		    		<p>Search for Hawker Centres</p>
		    		<form action="/home" method="POST">
		    			<input name="hawkerCentre" type="text" />
		    			<input name="submit" type="submit" />
		    		</form>
	    		</div>
	    		<p></p>
	    		<h2>Search by Regions</h2>
	    		<div>
		    		<form className="searchNorth" method="GET" action='/hawkers/north'>
	                <input type="hidden" name="searchNorth" />
	                <div className="buttonDiv">
	                	<input className="searchNorth" type="submit" value="North" />
		            </div>
		            </form>
       		   </div>
	    		<div>
		    		<form className="searchEast" method="GET" action='/hawkers/east'>
	                <input type="hidden" name="searchEast" />
	                <div className="buttonDiv">
	                	<input className="searchEast" type="submit" value="East" />
		            </div>
		            </form>
       		   </div>
	    		<div>
		    		<form className="searchCentral" method="GET" action='/hawkers/central'>
	                <input type="hidden" name="searchCentral" />
	                <div className="buttonDiv">
	                	<input className="searchCentral" type="submit" value="Central" />
		            </div>
		            </form>
       		   </div>
	    		<div>
		    		<form className="searchWest" method="GET" action='/hawkers/west'>
	                <input type="hidden" name="searchWest" />
	                <div className="buttonDiv">
	                	<input className="searchWest" type="submit" value="West" />
		            </div>
		            </form>
       		   </div>       		   
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Home;