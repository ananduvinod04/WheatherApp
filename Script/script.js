let featcherBtn = document.getElementById("featcherBtn");



featcherBtn.addEventListener("click", async () => {
    try {
        let location = document.getElementById("searchInput").value;
        let apiKey = "f8164ca0151139c0cc22c616dd26d2fa"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f8164ca0151139c0cc22c616dd26d2fa`)//enter url
        const data = await response.json();
        console.log(data)
        // transfering data
        document.getElementById("searchInput").value = "";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("humidityValue").innerHTML = "";
        document.getElementById("windFlowRate").innerHTML = "";
        if (document.getElementById("wheatherImage")) {
            document.getElementById("wheatherImage").remove();
        }

        document.getElementById("locationName").innerHTML = data.name;
        let tempValue = data.main.temp - 273.15;
        document.getElementById("temp").innerHTML = tempValue.toFixed(1);
        document.getElementById("humidityValue").innerHTML = data.main.humidity;
        document.getElementById("windFlowRate").innerHTML = data.wind.speed;


        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Displaying the weather icon
        const imgElement = document.createElement('img');
        imgElement.src = iconUrl;
        imgElement.alt = data.weather[0].description;
        imgElement.id = "wheatherImage"

        // Append to the body or any specific element in your page
        let humiditylogo = document.getElementById("imageLoader");
        humiditylogo.appendChild(imgElement);
    }
    catch (e) {
        alert("failed to fetch data!!!")
    }
})



