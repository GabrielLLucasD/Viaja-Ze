mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGdhYnJpIiwiYSI6ImNscGZ3NnVkYTFkNHoyaWt4enhpcGs1Z2EifQ.8xYIU9D5KdnroaJRGQ4hPg';
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
                enableHighAccuracy: true
            })
            function successLocation(position){
                console.log(position);
            }
            function errorLocation(){

            }
            var map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/gabrielgabri/clpfv6c3d007b01qmbgrhfo4b'
              
            });