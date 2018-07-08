var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class SearchHawkers extends React.Component {
  render() {

  	let message = <h1 id="listTitle">Search Results</h1>;

  	const searchHawkerData = this.props.search_hawkers.map( function(hawker) {

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
		                <div className="buttonDiv">
		                    <input className="goToHawkerCentre" type="submit" value="View Hawker Centre" />
		                </div>
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
          <div>
          </div>
	      	<p></p>
	      	<div className="container">
  			<div className="row">
	        	{searchHawkerData}
	        </div>
  			</div>
	      </div>
	     </LayoutContainer>
    );
  }
}

module.exports = SearchHawkers;


