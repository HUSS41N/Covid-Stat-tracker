// fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=India", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "88cf01bb23mshc474836ac64deb3p137843jsn14f729697499",
// 		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response.json());
// })
// .catch(err => {
// 	console.error(err);
// });

getCovidData = () => {
    user_input = getUserInput()
    const covidData = fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${user_input}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "88cf01bb23mshc474836ac64deb3p137843jsn14f729697499",
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
	}
    })
    return covidData.then(response =>{
        return response.json()
    })
}

getJSONCovidData = () =>{
    getCovidData().then((response)=>{
        console.log(response);
        showCovidDataToUser(response)
    })
}

getUserInput = () => {
    const userInput = document.getElementById('user_input').value
    return userInput
}

showCovidDataToUser = (response) =>{
    const unactive = document.getElementById('unactive')
    unactive.classList.remove('unactive')
    const cases = document.getElementById('cases').innerHTML = response.data.confirmed
    const deaths = document.getElementById('deaths').innerHTML = response.data.deaths
    const recovered = document.getElementById('recovered').innerHTML = response.data.recovered
}