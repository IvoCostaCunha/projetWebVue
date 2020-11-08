<template>
	<div>
		<h1> Details du restaurant: </h1>
		<p>Nom Restaurant: </p>
    <p>ID Restaurant:</p>
    <p>Cuisine proposé:</p>


	</div>
</template>

<script>

export default {
  name: "RestaurantDetail",
  
	props: {
  },

	data: function() {
		return {
      restaurant: [],
			apiURL: "/api/restaurants/"+this.$route.query.id
		};
  },
  
	mounted() {
    console.log("test");
		//this.getDataFromServer();
  },
  
	methods: {
		getDataFromServer() {
			// ici on fait un fetch pour récupérer des
			// restaurants sur le serveur.

			/*fetch(this.apiURL)
				.then(reponseJSON => {
					return reponseJSON.json();
				})
				.then(reponseJS => {
					// ici on a la réponse sous la forme
					// d'un objet JS
          this.restaurant = reponseJS.data;
          console.log(this.restaurant);
				});*/
		}
		
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
