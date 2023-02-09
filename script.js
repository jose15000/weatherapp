
$(document).ready(getData => {
    const input = document.getElementById('input');

    fetch(`http://api.weatherapi.com/v1/current.json?key=f548666ddc324432bd331134222912&q=${input}&aqi=no`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const desiredData = data.location.name;
        const desiredTemp = data.current.temp_c;
        document.getElementById("City").innerHTML = desiredData;
        document.getElementById("temp").innerHTML = desiredTemp;
        console.log(data);
  });
});

