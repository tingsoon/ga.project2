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
	    	<div className="container reviewBox">
	    		<div>
	    		<h1>Add Review</h1>
	    			<form action={formAction} method="POST">
	    				<div className="form-group">
		    				<input type="text" name="title" className="title form-control" placeholder="Enter Title" />
		    			</div>
		    			<p></p>
		    			 <div className="form-group">
		    			<textarea name="description" className="review form-control" id="textBox" placeholder="Description"></textarea>
		    			</div>
		    			<p></p>
		    			<p>Ratings (from 1 to 5)</p>

						<div className="form-check form-check-inline">
						  <input className="form-check-input" type="radio" name="rating" id="inlineRadio1" value="1" />
						  <label className="form-check-label" for="inlineRadio1" name="rating">1</label>
						</div>
						<div className="form-check form-check-inline">
						  <input className="form-check-input" type="radio" name="rating" id="inlineRadio2" value="2" />
						  <label className="form-check-label" for="inlineRadio1" name="rating">2</label>
						</div>
						<div className="form-check form-check-inline">
						  <input className="form-check-input" type="radio" name="rating" id="inlineRadio3" value="3" />
						  <label className="form-check-label" for="inlineRadio1" name="rating">3</label>
						</div>
						<div className="form-check form-check-inline">
						  <input className="form-check-input" type="radio" name="rating" id="inlineRadio4" value="4" />
						  <label className="form-check-label" for="inlineRadio1" name="rating">4</label>
						</div>
						<div className="form-check form-check-inline">
						  <input className="form-check-input" type="radio" name="rating" id="inlineRadio5" value="5" />
						  <label className="form-check-label" for="inlineRadio1" name="rating">5</label>
						</div>
						<p></p>
		    			<button type="submit" className="btn btn-primary">Submit</button>
	    		</form>
	    		</div>

	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Review;