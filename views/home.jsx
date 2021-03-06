var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class Home extends React.Component {
  render() {

  	const user = this.props.user;

    return (
    	<LayoutContainer>
    	<NavbarContainer>
        </NavbarContainer>
	    	<div>
	    		<div className="jumbotron">
	    			<div className="container" id="searchHome">
	    			<h4>Hello, {user}</h4>
		    		<h1 className="display-3 homeWelcome">WELCOME TO EAT HAWKER LAH!</h1>
		    		<div className="container">
			    		<div className="row">
				    		<div className="col-sm">
				    			<p>Search for Hawker Centres</p>
					    		<form action="/home" method="POST">
					    			<input id="homeSearchHawker" name="hawkerCentre" type="text" />
					    			<button className="btn btn-secondary" id="homeSubmit" name="submit" type="submit">Submit</button>
					    		</form>
				    		</div>
				    		<div className="col-sm">
				    			<p>Hawker Centres in Singapore</p>
				    			<form className="getAllHawkers" method="GET" action='/hawkercentres'>
				                	<button className="getAllHawkers btn btn-secondary" type="submit">View All</button>
		            			</form>
				    		</div>
			    		</div>
		    		</div>
		    		</div>
		    	<div>
		    	<hr className="my-4" />
		    	<h3 id="regionHeading">Search by Regions</h3>
	    		<div>
				  	<div className="container" id="imagebox">

				  		<div className="row-1">
				  		<a href="/hawkers/north">
				  		<div className="location rounded" id="north">
				  			<span className="location-name">North</span>
				  		</div>
				  		</a>

				  		<a href="/hawkers/east">
				  		<div className="location rounded" id="east">
				  			<span className="location-name">East</span>
				  		</div>
				  		</a>
				  		</div>

				  		<div className="row-2">
				  		<a href="/hawkers/central">
				  		<div className="location rounded" id="central">
				  			<span className="location-name">Central</span>
				  		</div>
				  		</a>

				  		<a href="/hawkers/west">
				  		<div className="location rounded" id="west">
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