var React = require('react');

class LayoutContainer extends React.Component {
  render() {

  	return ( 
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="http://localhost:3000/home" >
          <div id="navLogo">
          </div>
          <div id="navWord"><strong>HawkerLah</strong></div>
          </a>
              <form className="logout form-inline" method="POST" action="/users/logout?_method=DELETE">
                  <input type="hidden" name="logout" className="form-control mr-sm-2"/>
                  <div className="buttonDiv">
                      <input className="logout" type="submit" value="Logout" />
                  </div>
              </form>
          </div>
        </nav> 
      </header> 
      );
  }
}

module.exports = LayoutContainer;