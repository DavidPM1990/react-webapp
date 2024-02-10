const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},

			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],

			contacts: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				// getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				// const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });

				//reset the global store
				// setStore({ demo: demo });

			},

			getContacts: async () => {
				try {
					const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					};

					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/davidpardomartin-agenda", requestOptions);

					if (response.ok) {
						const data = await response.json();
						setStore({ contacts: data });
						console.log("Contactos obtenidos exitosamente:", data);
					} else {
						console.error("Error al obtener los contactos");
					}
				} catch (error) {
					console.error("Error al realizar la solicitud:", error);
				}
			},


			createContact: async (formData) => {
				try {
					const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					const raw = JSON.stringify({
						"full_name": formData.fullName,
						"email": formData.email,
						"agenda_slug": "davidpardomartin-agenda",
						"address": formData.address,
						"phone": formData.phone
					});

					const requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
					};

					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions);

					if (response.ok) {
						console.log("Contacto creado exitosamente");
					} else {
						const errorBody = await response.text();
						console.error("Error al crear el contacto - Respuesta:", response);
						console.error("Mensaje de error completo:", errorBody);
					}
				} catch (error) {
					console.error("Error al realizar la solicitud:", error);
				}
			},

		}
	};
};

export default getState;
