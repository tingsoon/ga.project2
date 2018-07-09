var React = require('react');
var LayoutHomePage = require('./layoutHomePage.jsx');

class HomePage extends React.Component {
  render() {

    return (

    	<LayoutHomePage>
        <body id="page" cz-shortcut-listen="true">
            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li><span>Image 05</span></li>
                <li><span>Image 06</span></li>
            </ul>
        <div class="container">
    	<div className="cover" id="home-page">
        <div className="container" id="home-container">
        <a href="http://localhost:3000/users/login">
    	<div className="logo rounded-circle" id="homePageLogo">
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
        </div>
        </body>
    	</LayoutHomePage>

    );

  }
}

module.exports = HomePage;