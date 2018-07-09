var React = require('react');

class LayoutHomePage extends React.Component {
  render() {

  	return ( 
      <html>
  		  <head>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet" />
          <link rel="stylesheet" href="/css/style.css" />
          <script type="text/javascript" src="/modernizr.custom.86080.js"></script>

    			<title>HawkerLah!</title>   
  		</head>


  			{this.props.children}


  	</html> );

  }
}

module.exports = LayoutHomePage;