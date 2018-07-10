var React = require('react');

class LayoutContainer extends React.Component {
  render() {

  	return ( 
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="/home" >
          <div id="navLogo">
          </div>
          <div id="navWord"><strong>EatHawkerLah</strong></div>
          </a>
            <a className="py-2 d-none d-md-inline-block" href="/about">
            <div id="navBar-words">About</div>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/hawkercentres">
            <div id="navBar-words">All Hawkers</div>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/hawkers/north">
            <div id="navBar-words">North Hawkers</div>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/hawkers/east">
            <div id="navBar-words">East Hawkers</div>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/hawkers/central">
            <div id="navBar-words">Central Hawkers</div>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/hawkers/west">
            <div id="navBar-words">West Hawkers</div>
            </a>
            <form className="logout form-inline" method="POST" action="/users/logout?_method=DELETE">
                <input type="hidden" name="logout" className="form-control mr-sm-2"/>
                    <button className="logout btn btn-secondary" type="submit">Logout</button>
            </form>
          </div>
        </nav> 
      </header> 
      );
  }
}

module.exports = LayoutContainer;