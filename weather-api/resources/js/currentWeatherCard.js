function generateCurrentWeatherCard(properties) {


    let cardElement = document.createElement("div");
    cardElement.classList.add("card", "mt-3");
    cardElement.style = "max-width: 540px;";
    cardElement.id = "card-current-weather";

    let cardRow = document.createElement("div");
    cardRow.classList.add("row","g-0");

    cardElement.append(cardRow);

    let firstCol = document.createElement("div");
    firstCol.classList.add("col-md-4");
    let secondCol = document.createElement("div");
    secondCol.classList.add("col-md-8");

    cardRow.append(firstCol, secondCol);

    let imageElement = document.createElement("img");
    imageElement.classList.add("img-fluid", "rounded-start");
    imageElement.src = properties.iconLink;
    imageElement.alt = properties.condition;
    imageElement.id = "current-weather-image";

    firstCol.append(imageElement);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.innerText = properties.placeName;
    cardTitle.classList.add("card-title");

    let table = document.createElement("table");
    table.classList.add("table", "table-borderless", "table-sm", "mt-3", "w-auto");
    let tbody = document.createElement("tbody");
    
    let trTemp = document.createElement("tr");
    let trFeels = document.createElement("tr");
    let trWeather = document.createElement("tr");

    let thTemp = document.createElement("th");
    thTemp.scope = "row";
    thTemp.innerText = "Temperature:";
    let thFeels = document.createElement("th");
    thFeels.scope = "row";
    thFeels.innerText = "Feels like:";
    let thWeather = document.createElement("th");
    thWeather.scope = "row";
    thWeather.innerText = "Condition: ";

    let tdTemp = document.createElement("td");
    tdTemp.innerText = properties.temperature;
    let tdFeels = document.createElement("td");
    tdFeels.innerText = properties.feelsLike;
    let tdWeather = document.createElement("td");
    tdWeather.innerText = properties.condition;

    trTemp.append(thTemp,tdTemp);
    trFeels.append(thFeels,tdFeels);
    trWeather.append(thWeather,tdWeather);

    tbody.append(trTemp,trFeels,trWeather);
    table.append(tbody);
    
    let currentDateP = document.createElement("p");
    currentDateP.classList.add("card-text");
    let small = document.createElement("small")
    small.classList.add("text-muted");
    small.innerText = properties.currentDate;
    currentDateP.append(small);

    cardBody.append(cardTitle,table,currentDateP);

    secondCol.append(cardBody);

    return cardElement;
}

function generateForecastTable(forecasts){
    let cardElement = document.createElement("div");
    cardElement.classList.add("card", "mt-3");
    cardElement.id = "card-current-forecast";

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerText = "Forecast table";
    cardElement.append(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardElement.append(cardBody);

    let table = document.createElement("table");
    table.classList.add("table", "table-sm", "w-auto");
    
    let tbody = document.createElement("tbody");
    let thead = document.createElement("thead");

    table.append(thead,tbody);
    cardBody.append(table);

    let topRow = document.createElement("tr");
    let conditionRow = document.createElement("tr");
    let temperatureRow = document.createElement("tr");
    let feelsLikeRow = document.createElement("tr");
    thead.append(topRow, conditionRow, temperatureRow, feelsLikeRow);
    
    let firstHead = document.createElement("th");
    topRow.append(firstHead);

    
    let conditionHead = document.createElement("th");
    conditionHead.scope = "row";
    conditionHead.innerText = "Condition";
    conditionRow.append(conditionHead);

    let temperatureHead = document.createElement("th");
    temperatureHead.scope = "row";
    temperatureHead.innerText = "Temperature"
    temperatureRow.append(temperatureHead);

    let feelsLikeHead = document.createElement("th");
    feelsLikeHead.scope = "row";
    feelsLikeHead.innerText = "Feels like";
    feelsLikeRow.append(feelsLikeHead);

    let maxLength = 25;

    // hours
    for (let i = 0; i < (forecasts.length > maxLength ? maxLength : forecasts.length); i++) {
        let th = document.createElement("th");
        th.scope = "col";
        let timeOfForecast = forecasts[i].forecastTimeUtc.slice(-8,-6) + "H";
        th.innerText = timeOfForecast;
        // "2023-01-09 15:00:00"
        topRow.append(th);
    }

    
    // conditions
    for (let i = 0; i < (forecasts.length > maxLength ? maxLength : forecasts.length); i++) {
        let td = document.createElement("td");
        let image = document.createElement("img");
        image.src =`./svg/${forecasts[i].conditionCode}.svg`;
        image.alt = forecasts[i].conditionCode;
        td.append(image);
        conditionRow.append(td);        
    }

    // temperature
    for (let i = 0; i < (forecasts.length > maxLength ? maxLength : forecasts.length); i++) {
        let td = document.createElement("td");
        td.innerText = forecasts[i].airTemperature + "C";
        temperatureRow.append(td);
    }

    // feels like
    for (let i = 0; i < (forecasts.length > maxLength ? maxLength : forecasts.length); i++) {
        let td = document.createElement("td");
        td.innerText = forecasts[i].feelsLikeTemperature + "C";
        feelsLikeRow.append(td);
    }


    return cardElement;
}

function organiseData(singleForecast){
    let weatherDetails = {
        currentDate: singleForecast.forecastTimeUtc,
        condition: singleForecast.conditionCode,
        iconLink: `./svg/${singleForecast.conditionCode}.svg`,
        temperature: singleForecast.airTemperature,
        feelsLike: singleForecast.feelsLikeTemperature
    };
    // add if file does not exist show unknown.svg

    return weatherDetails;
}

export function generateWeatherCard(placeCode) {
    // remove current card
    document.querySelector("#card-current-weather")?.remove();
    document.querySelector("#card-current-forecast")?.remove();
    let mainBody = document.querySelector("#main-body");
    // get details from placecode
    fetch(`/api/v1/weather/places/${placeCode}`).then(r=>r.json()).then(data =>{
        //filter properties
        console.log(data);
        let currentForecast = organiseData(data.forecastTimestamps[0]);
        currentForecast.placeName = data.place.name;
        currentForecast.placeCode = data.place.code;
        mainBody.append(generateCurrentWeatherCard(currentForecast));
        mainBody.append(generateForecastTable(data.forecastTimestamps));
    })



    // generate new card
    return "generated weather card";

}