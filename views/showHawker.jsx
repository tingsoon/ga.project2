var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class ShowHawker extends React.Component {

  render() {

  	// const review = this.props.reviews;
  	// console.log(review);

  	let formAction = '/hawkercentres/' + this.props.hawker.id + '/review';
  	const hidden={display:'none'}

  	const allHawkerReviews = this.props.reviews.map( function(review) {

  		return (
	      	<div className="col-sm hawkerReviews">
	      		<hr className="my-4" />
	      		<h4>{review.title}</h4>
	      	<ul className="list-unstyled">
	      		<li>{review.username}</li>
		      	<li>{review.rating}</li>
	      	</ul>
	      	<p>{review.description}</p>
	      	</div>
  		)
  	});


    return (
    	<LayoutContainer>
    	<NavbarContainer>
        </NavbarContainer>
    		{/* This trick allows var to be called in a global level  */}
    		<span id="hawkerName" style={hidden}>{this.props.hawker.name}</span>
    		<span id="hawkerAddress" style={hidden}>{this.props.hawker.address}</span>
    		<script>
    			var lat = {this.props.hawker.lat};
    			var lng = {this.props.hawker.lng};
    		</script>
    		<p></p>
 			<div className="container">
 				<div className="col-sm pic_container">
 					<img src ={this.props.hawker.img} />
		      	</div>
		      	<p></p>
		      	<div className="col-sm information">
		      	<h1>{this.props.hawker.name}</h1>
		      	<ul className="list-unstyled">
			      	<li>Address : {this.props.hawker.address} </li>
			      	<li>Region : {this.props.hawker.region} </li>
			      	<li>Number of Stalls : {this.props.hawker.cookedfoodstalls} </li>
		      	</ul>
		      	<h5 className="h5"><u>Description</u></h5>
		      	<p>{this.props.hawker.description}</p>
		      	</div>
		      	<div className="container">
		      	<div className="container">
		      	<div className="row">
		      	<h2>Location</h2>
		      	<img src="/placeholder.png" id="locationLogo" />
		      	</div>
				</div>
    			<div id="map"></div>
		      	<p></p>
		      	<div>
		    		<form className="writeReview" method="GET" action={formAction}>
	                <input type="hidden" name="writeReview" />
	                	<button className="writeReview btn btn-light" type="submit">Write a review</button>
		            </form>
       		    </div>
       		   	{allHawkerReviews}
       		   	</div>
		      	<script src="/script.js"></script>
		      	<script async defer
				  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0eLkjdHUsR_SX4Eon_CP8OdW4Qa4aztU&callback=initMap">
				</script>
	      	</div>
	    </LayoutContainer>
     
    );
  }
}

module.exports = ShowHawker;



