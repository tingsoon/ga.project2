var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class ShowHawker extends React.Component {

  render() {

  	const hawker = this.props.hawker;
  	// const reviews = this.props.reviews;
  	// console.log(hawker);

  	let formAction = '/hawkercentres/' + this.props.hawker.id + '/review';
  	const hidden={display:'none'}


  	const allHawkerReviews = this.props.reviews.map( function(review) {

  		return (
	      	<div className="col-sm hawkerReviews">
	      		<h4>{review.title}</h4>
	      	<ul className="list-unstyled">
	      		<li>Reviewed By {review.username} </li>
		      	<li>Ratings : {review.rating} / 5 </li>
		      	<li>{review.description} </li>
	      	</ul>
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
 			<div className="container">
 				<div className="col-sm pic_container">
 					<img src ={this.props.hawker.img} />
		      	</div>
		      	<div className="col-sm information">
		      	<h1>{this.props.hawker.name}</h1>
		      	<ul className="list-unstyled">
			      	<li>Address : {this.props.hawker.address} </li>
			      	<li>Region : {this.props.hawker.region} </li>
			      	<li>Number of Stalls : {this.props.hawker.cookedfoodstalls} </li>
			      	<li>{this.props.hawker.description} </li>
		      	</ul>
		      	</div>
		      	<h2>Location</h2>
    			<div id="map"></div>
		      	<p></p>
		      	<div>
		    		<form className="writeReview" method="GET" action={formAction}>
	                <input type="hidden" name="writeReview" />
	                <div className="buttonDiv">
	                	<input className="writeReview" type="submit" value="Write a review." />
		            </div>
		            </form>
       		    </div>
       		   	{allHawkerReviews}
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



