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
		    		<p>Search for Hawker Centres</p>
		    		<form action="/home" method="POST">
		    			<input name="hawkerCentre" type="text" />
		    			<input name="submit" type="submit" />
		    		</form>
		    	<hr className="my-4" />
	    		<div>
				  	<div className="img4">
				      <img className="imgResize " src={"https://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/nasi_goreng_seafood_tom_yam_0000x0000_0_1.jpg"} />
				      <img className="imgResize " src={"http://foodtravelbabe.com/wp-content/uploads/2018/01/tian-tian-hainanese-chicken-rice.jpg"} />
				      <img className="imgResize " src={"https://magazine.foodpanda.sg/wp-content/uploads/sites/2/2016/08/Best-Satay-Header.jpg"} />
				      <img className="imgResize " src={"http://www.shape.com.sg/wp-content/uploads/2017/08/How-to-make-Singapore-hawker-food-healthier-640x426.jpg"} />
				    </div>
				</div>
	    		<hr className="my-4" />
	    		<h2 className="display-4">Search by Regions</h2>
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
    	</LayoutContainer>
    );

  }
}

module.exports = Home;