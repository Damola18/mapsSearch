// const button = document.getElementById('searchButton');
// const defaultMap = document.getElementById('map');
// const address = document.getElementById('address').value;
// var latLng =  {lat:7.3775, lng:3.94709};
function initMap(){
    const map = new google.maps.Map(document.getElementById('#map'), {
        zoom: 10,
        center:{
            lat:7.3775, 
            lng:3.94709
        }
    });

    const geocoder = new google.maps.Geocoder();
    document.getElementById('searchButton').addEventListener('click', ()=>{
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap){
    const address = document.getElementById('address').value;
    geocoder.geocode(
        {
            address: address
        }, 
        (results, status) => {
            if(status == 'OK'){
                resultsMap.setCenter(result[0].geometry.location);
                new google.maps.Marker({
                    map: resultsMap,
                    position:results[0].geometry.location
                });
            } else{
                alert('blablblah' + status);
            }
        }
    );
}
