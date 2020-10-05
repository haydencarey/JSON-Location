let locations = [];

window.addEventListener('load', function() {
    fetch("location.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locations = data;
            //console.log(data.new_york.latitude)
            //console.log(data.new_york.longitude)


            // get reference to location dropdown
            let locationDropdown = document.getElementById("location-dropdown");


            let option = document.createElement('option');
            option.text = 'Choose location';
            locationDropdown.add(option);

            locations.forEach(function(location) {
                console.log(location);



                // Adding new options (locations) to select
                let option = document.createElement('option');
                option.text = location.name;
                option.id = location.id;
                option.value = location.id;
                locationDropdown.add(option);


            });

        });

})

function setUIElements() {
    let locationDrop = document.getElementById
}

document.querySelector("#location-dropdown").addEventListener('change', function() {

    console.log(this.value);

    // get select location from json / array

    const found = locations.find(city => city.id === this.value)
    console.log(found)


    // populate input with selected object

    document.getElementById("input-lat").value = found.latitude;
    document.getElementById("input-long").value = found.longitude;

});




document.querySelector("#location-button").addEventListener('click', function() {

    let inputTextLat = document.getElementById("input-lat").value
    let inputTextLong = document.getElementById("input-long").value
    console.log(inputTextLat)
    console.log(inputTextLong)



    let API_url = `http://api.timezonedb.com/v2.1/get-time-zone?key=1ZDW2CLEKDWR&format=json&by=position&lat=${inputTextLat}&lng=${inputTextLong}`;

    // choose city
    // whatever city name is selected, access JSON by calling back a function
    //store latitude and longitude in inputText, somewhere where my api link can use it
    // call the fetch API_url


    fetch(API_url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let hour = parseInt(data.formatted.slice(11, 13))
            console.log(hour)
            let locationTime = document.getElementById('location-time');
            let locationCity = document.getElementById('location-city');
            let locationZone = document.getElementById('location-zone');
            // how do i make it i can append child within html without replacing what's there?
            locationTime.innerHTML = data.formatted;
            locationCity.innerHTML = data.zoneName;
            locationZone.innerHTML = data.abbreviation;
            let awakeAsleep = document.getElementById('awakeAsleep');
            if (hour >= 8 && hour <= 16) {
                awakeAsleep.innerHTML = 'Awake and During Work Hours!'
            } else if (hour > 16 && hour < 23) {
                awakeAsleep.innerHTML = 'Awake, But Outside of Work Hours!'
            } else {
                awakeAsleep.innerHTML = 'Asleep!'
            }


            // headingelement.innerHTML = data.name;

            // let weightElement = document.getElementById('pokemon-weight')
            // weightElement.innerHTML = data.weight;

            // let imageElement = document.getElementById('pokemon-image')
            // imageElement.src = data.sprites.front_default;

            // let typeElement = document.getElementById('pokemon-type')
            // typeElement.innerHTML = data.types[0].type.name;
        })
        // .catch(err => {
        //     console.log(err)
        //     let headingelement = document.getElementById('pokemon-title')
        //     headingelement.innerHTML = "Could not find a Pokemon";

    //     let weightElement = document.getElementById('pokemon-weight')
    //     weightElement.innerHTML = "";

    //     let imageElement = document.getElementById('pokemon-image')
    //     imageElement.src = "";

    //     let typeElement = document.getElementById('pokemon-type')
    //     typeElement.innerHTML = "";
    // })
})

function GoTo() {
    window.location = "index0.html";
}