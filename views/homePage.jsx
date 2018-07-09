var React = require('react');
var LayoutContainer = require('./layout.jsx');

class HomePage extends React.Component {
  render() {

    return (

    	<LayoutContainer>
        
    	<div className="cover" id="home-page">
        <div className="container">
        <a href="http://localhost:3000/users/login">
    	<div className="logo" id="homePageLogo">
    	</div>
        </a>
        <div className="homeText">
    	<h1 className="cover-heading">Eat Hawker Lah</h1>
    	<p className="lead">"TEXT text text"</p>
    	<p className="lead">
    		<a href="http://localhost:3000/users/login" className="btn btn-lg btn-secondary">Login</a>
    	</p>
        </div>
        </div>
    	</div>

    	</LayoutContainer>

    );

  }
}

module.exports = HomePage;