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

				  		<a href="http://localhost:3000/hawkers/East">
				  		<div className="location" id="east">
				  			<span className="location-name">East</span>
				  		</div>
				  		</a>
				  		</div>

				      	<a className="Central" href="http://localhost:3000/hawkers/central">
				      		<img className="imgResize " src={"https://magazine.foodpanda.sg/wp-content/uploads/sites/2/2016/08/Best-Satay-Header.jpg"} />
				      	</a>
				      	<a className="West" href="http://localhost:3000/hawkers/west">
				      		<img className="imgResize " src={"http://www.shape.com.sg/wp-content/uploads/2017/08/How-to-make-Singapore-hawker-food-healthier-640x426.jpg"} />
				    	</a>
				    </div>
				</div>
	    		<hr className="my-4" />
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
       		   </div>    		   
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Home;