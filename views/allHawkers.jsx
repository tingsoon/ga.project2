var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ShowAllHawkers extends React.Component {
  render() {

  	let message = <h1>List of Hawker Centres in Singapore</h1>;

  	const allHawkerData = this.props.all_hawkers.map( function(hawker) {

  		return (
  			
  			<div className="col-4">

	  			<div className="text">
	  				<p>{hawker.name}</p>
	  			</div>
	  			 <div>
		            <form className="goToHawkerCentre" method="POST" action={'/hawkercentres/'+hawker.id+'?_method=PUT'}>
		                <input type="hidden" name="goToHawkerCentre" />
		                <div className="buttonDiv">
		                    <input className="goToHawkerCentre" type="submit" value="View Hawker Centre" />
		                </div>
		            </form>
          		</div>
          		<p></p>
  			</div>
  			
  		)

  	});

    return (
    	<LayoutContainer>
	      <div>
	      	{message}
	      	<p></p>
          <div>
            	<form className="logout" method="POST" action="/users/logout?_method=DELETE">
                  <input type="hidden" name="logout" />
                  <div className="buttonDiv">
                      <input className="logout" type="submit" value="Logout" />
                  </div>
                </form>
          </div>
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


