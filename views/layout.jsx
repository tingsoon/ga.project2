var React = require('react');

class LayoutContainer extends React.Component {
  render() {

  	return ( 
      <html>
  		  <head>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet" />
          <link rel="stylesheet" href="/css/style.css" />

    			<title>HawkerLah!</title>   
  		</head>
  		<body>
        <div id="background-image">
  			{this.props.children}
        </div>
  		</body>
  	</html> );

  }
}

module.exports = LayoutContainer;