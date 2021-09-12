
        function initMap() {
            // The location 
            const chicago = { lat: 41.97064185193681, lng: -87.67252902606086 };
            const la = { lat: 34.06795388968647, lng: -118.21264706626333 };
            const ny = { lat: 40.7086014430729, lng: -73.98933186851586 };
            // The map
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 2,
                center: { lat: 40.48025388211728, lng: -101.42997305306888 }
            });
            // The marker
            const marker = new google.maps.Marker({
                position: chicago,
                map: map,
            });
            const mark = new google.maps.Marker({
                position: ny,
                map: map,
            });
            const m = new google.maps.Marker({
                position: la,
                map: map,
            });
        }