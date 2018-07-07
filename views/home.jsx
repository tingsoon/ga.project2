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
	    		<div className="jumbotron">
		    		<h1 className="display-3">WELCOME TO HAWKERLAH!</h1>
		    		<div className="container">
			    		<div className="row">
				    		<div className="col-sm">
				    			<p>Search for Hawker Centres</p>
					    		<form action="/home" method="POST">
					    			<input name="hawkerCentre" type="text" />
					    			<input name="submit" type="submit" />
					    		</form>
				    		</div>
				    		<div className="col-sm">
				    			<p>Search for Hawker Centres in Singapore</p>
				    			<form className="getAllHawkers" method="GET" action='/hawkercentres'>
				                <div className="buttonDiv">
				                	<input className="getAllHawkers" type="submit" value="View Hawkers" />
					            </div>
		            			</form>
				    		</div>
			    		</div>
		    		</div>
		    	<div>
		    	<hr className="my-4" />
		    	<h2 className="display-4">Search by Regions</h2>
	    		<div>
				  	<div className="container" id="imagebox">

				  		<div className="row-1">
				  		<a href="http://localhost:3000/hawkers/north">
				  		<div className="location" id="north">
				  			<span className="location-name">North</span>
				  		</div>
				  		</a>

				  		<a href="http://localhost:3000/hawkers/east">
				  		<div className="location" id="east">
				  			<span className="location-name">East</span>
				  		</div>
				  		</a>
				  		</div>

				  		<div className="row-2">
				  		<a href="http://localhost:3000/hawkers/central">
				  		<div className="location" id="central">
				  			<span className="location-name">Central</span>
				  		</div>
				  		</a>

				  		<a href="http://localhost:3000/hawkers/west">
				  		<div className="location" id="west">
				  			<span className="location-name">West</span>
				  		</div>
				  		</a>
				  		</div>

				    </div>
				</div>
	    		<hr className="my-4" />
       		   </div> 
       		   </div>    		   
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Home;