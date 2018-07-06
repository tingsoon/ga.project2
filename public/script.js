// console.log("what");
console.log(lat);
console.log(lng);
var name = document.getElementById('hawkerName').textContent;
var address = document.getElementById('hawkerAddress').textContent;
console.log(name);

var initMap = function() {

	var hawkerLocation = { lat: lat, lng: lng}

	var map = new google.maps.Map(document.getElementById('map'), 
	{ 
		zoom: 15, 
		center: hawkerLocation 

	});

	var googleMarker = new google.maps.Marker({

		position: hawkerLocation,
		title: name,
		map: map

	});

	// bind popup to marker
	googleMarker.addListener('click', function() {
		var infoWindow = new google.maps.InfoWindow({
			content: '<p>' + name + '</p><p>' + address + '</p>'
		});
		infoWindow.open(map, googleMarker);
	})
};
