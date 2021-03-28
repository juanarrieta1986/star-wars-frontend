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
			favPlanet: [false, false, false, false, false, false, false, false, false, false],
			favChar: [false, false, false, false, false, false, false, false, false, false],
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

			updateFavChar: (index, name) => {
				//Section below will toggle the like symbol
				const store = getStore();
				const favList = store.favChar.map((elm, i) => {
					if (i === index) elm = !elm;
					return elm;
				});
				setStore({ favChar: favList });

				//Section below will add/delete from favorites list
				if (store.favChar[index]) {
					let newFavArray = store.favorites;
					newFavArray.push({ name: name, index: index, cardType: "characters" });
					setStore({ favorites: newFavArray });
					console.log("add");
				} else {
					let newFavArray;
					newFavArray = store.favorites.filter(namesList => namesList.name !== name);
					setStore({ favorites: newFavArray });
					console.log("delete");
				}
			},
			updateFavPlanet: (index, name) => {
				//Section below will toggle the like symbol
				const store = getStore();
				const favList = store.favPlanet.map((elm, i) => {
					if (i === index) elm = !elm;
					return elm;
				});
				setStore({ favPlanet: favList });

				//Section below will add/delete from favorites list
				if (store.favPlanet[index]) {
					let newFavArray = store.favorites;
					newFavArray.push({ name: name, index: index, cardType: "planets" });
					setStore({ favorites: newFavArray });
					console.log("add");
				} else {
					let newFavArray;
					newFavArray = store.favorites.filter(namesList => namesList.name !== name);
					setStore({ favorites: newFavArray });
					console.log("delete");
				}
			},
			updateFavList: index => {
				//Section below will toggle the like symbol
				const store = getStore();
				const favList = store.favPlanet.map((elm, i) => {
					if (i === index) elm = !elm;
					return elm;
				});
				setStore({ favPlanet: favList });
			}
		}
	};
};

export default getState;
