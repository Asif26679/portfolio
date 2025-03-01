const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd3474e335amsh38bdef2bdfe04b8p120483jsnda52f0636b4f',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url,options)
.then(response => response.json())
.then((data) => {
	console.log(data)

	temp.innerHTML=data.location.localtime;
})
.catch(err => console.log(err));  