
	function load_shop_detail(marker) {
			/*  Define the additional elements for the list below  */
			console.log(" Hello world, this is the shop", marker.title, marker.phone);
			//document.querySelector("div#shopdetail").innerHTML="<p>Hello world, this is the shop</p>";
			/* Adds elements to the list */
			document.getElementById('shopTitle').innerHTML = marker.title;
			document.getElementById('shopPhone').innerHTML = marker.phone;
			document.getElementById('shopdetail').classList.remove('hide');
	};
		
	function initMap(){
      /* Map options, sets Zoom and location of centre */
      var options = {
        zoom:10,
        center:{lat:51.7819,lng:-2.5765}
      }

      var map = new google.maps.Map(document.getElementById('map'), options);

      /* Listen for click on map */
      google.maps.event.addListener(map, 'click', function(event){
        /* Add marker */
        addMarker({coords:event.latLng});
    });

      

      /* Array of markers */
      var markers = [
        {
          coords:{lat:51.7661148,lng:-2.556003},
          title: "Dean Forest Cycles",
          phone: "<img src='./assets/figures/phone.png'></img>" + " 01594 368009",
		  content:"<div><h2>Dean Forest Cycles</h2><p>Cafe, Spares and Accessory Sales</p></div>" +
		  "<div><p>Tele: 01594 368009</p></div>" + "<img src='./assets/figures/dean.png'></img>"
        },
        {
		  coords:{lat:51.809485,lng:-2.5692920},
          title: "Peddle a Bike Away",
		  phone: "<img src='./assets/figures/phone.png'></img>" + " 01594 729000",
          content:"<h2>Peddle a Bike Away</h2><p>Cycle Center, Cafe, and Bike Repairs</p>" +
          "<p>Tele: 01594 729000</p>" + "<img src='./assets/figures/peddle.png'></img>" 
		  
		  
        },
        {
          
          coords:{lat:51.8333019,lng:-2.5119103},
          title: "Sprung Suspension",
          phone: "<img src='./assets/figures/phone.png'></img>" + " 01594 729030",
		  content:"<h2>Sprung Suspension</h2><p>For all your suspension repairs and wheel trueing</p>" +
          "<p>Tele: 01594 729030</p>" + "<img src='./assets/figures/sprung.png'></img>" 
		
		},

		{
         
          coords:{lat:51.790908,lng:-3.0034466},
          title: "Treads N Trail",
          phone: "<img src='./assets/figures/phone.png'></img>" + " 01633 729030",
          content:"<h2>Treads N Trails</h2><p>For all your suspension repairs and wheel trueing</p>" +
          "<p>Tele: 01633 729030</p>" + "<img src='./assets/figures/treads.png'></img>" 
          
          
	  
        },
{
          
          coords:{lat:51.87542254,lng:-2.9832272},
          title: "Black Mountain Cycle Centre",
          phone: "<img src='./assets/figures/phone.png'></img>" + " 01633 729111",
		  content:"<h2>Black Mountain Cycle Centre</h2><p>Trail Centre (Basic)</p>" +
          "<p>Tele: 01633 729111</p>" + "<img src='./assets/figures/BMcycle.png'></img>" 
	  
	     },
{
          
          coords:{lat:51.7148259,lng:-3.3707652},
          title: "BikePark Wales",
          phone: "<img src='./assets/figures/phone.png'></img>" + " 01633 729791",
          content:"<h2>BikePark Wales</h2><p>Trail centre, cafe, and bike repairs</p>" +
          "<p>Tele: 01633 729791</p>" + "<img src='./assets/figures/bike.png'></img>" 
	  
        }];

      /* Loop through markers */
      for(var i = 0;i < markers.length;i++){
       addMarker(markers[i]);
      }

      /* Add Marker Function */
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          title: props.title,
          phone: props.phone,
        });

        /* Check for customicon */
        if(props.iconImage){
          marker.setIcon(props.iconImage);
        }

        /* Check content */
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(event){
            infoWindow.open(map, marker);
			load_shop_detail(marker);
               
          });
        }
      }
      
	
    }
