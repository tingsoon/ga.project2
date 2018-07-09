var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class ShowAllHawkers extends React.Component {
  render() {

  	let message = <h1 id="listTitle">List of Hawker Centres in Singapore</h1>;

  	const allHawkerData = this.props.all_hawkers.map( function(hawker) {

  		return (
  			
        <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src ={hawker.img} alt="Card image cap" id="imgpic"/>
          </div>
          <div className="card-body">
             <h5 className="card-title">{hawker.name}</h5>
           <div>
                <form className="goToHawkerCentre" method="POST" action={'/hawkercentres/'+hawker.id+'?_method=PUT'}>
                    <input type="hidden" name="goToHawkerCentre" />
                        <button className="goToHawkerCentre btn btn-secondary" type="submit">View Hawker Centre</button>
                </form>
            </div>
          </div>
            <p></p>
        </div>

  			
  		)

  	});

    return (
    	<LayoutContainer>
        <NavbarContainer>
        </NavbarContainer>
	      <div className="hawkerPage">
	      	{message}
	      	<p></p>
	      	<p></p>
	      	<div className="container">
  			<div className="row">
	        	{allHawkerData}
	        </div>
  			</div>
	      </div>
	     </LayoutContainer>
    );
  }
}

module.exports = ShowAllHawkers;


