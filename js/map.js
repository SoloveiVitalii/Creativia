// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 7,
//           center: {lat: 25.275850, lng: 30.371369},
//           disableDefaultUI: true
//         });
//       }

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 7,
        center: {lat: 27.25738, lng: 33.81291},
    };
    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {lat: 25.562845, lng: 30.576958},
        map: myMap
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<p style="text-align:left; color:#fff;"> Egypt, Creativia <br> Address: cairo 123 <br> Phone: +0201091915171 <br> Email: gfx3mr@gmail.com </p>'
    });

    InfoWindow.open(myMap, marker);

    marker.addListener('click', function(){
         InfoWindow.open(myMap, marker);
    })
}













// var coordinates = {lat: 25.275850, lng: 30.371369},
//     popupContent = this.$popupContent.html(),
//     markerImage = 'img/data.png',
//     zoom = 15,

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: coordinates,
//         zoom: zoom,
//         disableDefaultUI: true
//     }),

//     infowindow = new google.maps.InfoWindow({
//         content: popupContent
//     }),

//     marker = new google.maps.Marker({
//         position: coordinates,
//         map: map,
//         icon: markerImage
//     });
