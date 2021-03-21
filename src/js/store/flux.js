const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://swapi.dev/api/";
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
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(apiUrl + "planets/", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ planets: result.results }))
					.catch(error => console.log("error", error));
			},
			loadCharacters: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(apiUrl + "people/", requestOptions)
					.then(response => response.json())
					//.then(result => console.log(result.results))
					.then(result => setStore({ characters: result.results }))
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
			},

			updateFavorites: () => {
				const store = getStore();
			}
		}
	};
};

export default getState;
