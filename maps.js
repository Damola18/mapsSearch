

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


function geocode(){
  var location = '22 Main st boston MA';
  axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
    params:{
      address: location,
      key:'AIzaSyCeWuP0syCDhRGde_WvGGLsD4dn6R2z53w'
    }    
  })
  .then(function(response){
      console.log(response);

      // Formatted Address
      console.log(response.data.results[0].formatted_address);

  })
  .catch(function(error){
      console.log(error);
  });
}