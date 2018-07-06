var React = require('react');
var LayoutContainer = require('./layout.jsx');


class Review extends React.Component {
  render() {

    return (
    	<LayoutContainer>

	    	<div>
	    		<div>
	    		<h1>Add Review</h1>
	    			<form action="/review" method="POST">
	    				<div class="form-group">
		    				<input type="text" name="title" className="title form-control" placeholder="Enter Title" />
		    			</div>
		    			<p></p>
		    			 <div class="form-group">
		    			<textarea name="description" className="review form-control" id="textBox" placeholder="Description"></textarea>
		    			</div>
		    			<p></p>
		    			<select name="rating" id="example">
						  <option value="1">1</option>
						  <option value="2">2</option>
						  <option value="3">3</option>
						  <option value="4">4</option>
						  <option value="5">5</option>
						</select>
						<p></p>
		    			<button type="submit" class="btn btn-primary">Submit</button>
	    		</form>
	    		</div>

	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Review;