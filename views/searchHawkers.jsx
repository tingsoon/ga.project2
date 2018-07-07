var React = require('react');
var LayoutContainer = require('./layout.jsx');
var NavbarContainer = require('./navbarlayout.jsx');

class SearchHawkers extends React.Component {
  render() {

  	let message = <h1 id="listTitle">Search Results</h1>;

  	const searchHawkerData = this.props.search_hawkers.map( function(hawker) {

  		return (
  			
  			<div className="col-4">
          <div className="col-sm pic_container">
            <img src ={hawker.img} className="img-thumbnail" id="imgpic"/>
          </div>
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


