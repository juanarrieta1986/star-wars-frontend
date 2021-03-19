const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://swapi.py4e.com/api/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				var myHeaders = new Headers();
				myHeaders.append("Cookie", "__cfduid=d3e5242c92f8f533f884f0407f34f004a1616125125");
				//myHeaders.append("Host", "<calculated when request is sent>");

				//var raw = "";

				var requestOptions = {
					method: "GET",
					//mode: "no-cors",
					headers: myHeaders,
					//body: raw,
					redirect: "follow"
				};

				fetch(apiUrl + "planets", requestOptions)
					.then(response => response.json())
					//.then(result => console.log(result.results))
					.then(result => setStore({ planets: result.results }))
					.catch(error => console.log("error", error));
				//setStore({ planets: fillPlanets });
				//console.log(store.planets);
			},
			loadCharacters: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(apiUrl + "people", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			loadStarships: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(apiUrl + "starships", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
