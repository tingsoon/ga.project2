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
		    			<select name="rating" id="example">
						  <option value="1">1</option>
						  <option value="2">2</option>
						  <option value="3">3</option>
						  <option value="4">4</option>
						  <option value="5">5</option>
						</select>
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