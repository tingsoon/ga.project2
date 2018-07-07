var React = require('react');

class LayoutContainer extends React.Component {
  render() {

  	return ( 
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="http://localhost:3000/home" >HawkerLah</a>
              <form className="logout form-inline" method="POST" action="/users/logout?_method=DELETE">
                  <input type="hidden" name="logout" className="form-control mr-sm-2"/>
                  <div className="buttonDiv">
                      <input className="logout" type="submit" value="Logout" />
                  </div>
              </form>
        </nav> );
  }
}

module.exports = LayoutContainer;