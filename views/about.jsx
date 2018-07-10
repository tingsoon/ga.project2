var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');


class Review extends React.Component {
  render() {

  	let formAction = '/hawkercentres/' + this.props.id + '/review'

    return (
    	<LayoutContainer>
        <NavbarContainer>
        </NavbarContainer>
        	<div className="container aboutBox">
	        	<div className="row">
				  <div className="col-8">
				  <p>Created using react-express</p>
				  <p>Api from Google Maps, Data.gov.sg(https://data.gov.sg/dataset/hawker-centres), HawkerAPI from Jae Lee.</p>
				  <p>Slideshow source code (https://tympanus.net)</p>
				  </div>
				  <div className="col-4">
				  	<div className="card">
					  <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
					  <div className="card-body">
					    <p className="card-text">I love food. Especially hawker food.</p>
					    <p></p>
					    <p className="card-text">I created this blog as part of my second project for the Web Development Immersive course in General Assembly, Singapore, as well as due to my love for cheap hawker foods :)</p>
					  </div>
					</div>
				  </div>
				</div>
			</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Review;