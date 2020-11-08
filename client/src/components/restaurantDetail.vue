<template>
	<div>
		<h1> Details du restaurant: </h1>
		<p>Nom Restaurant:</p>
    <p>ID Restaurant:</p>
    <p>Cuisine proposé:</p>


	</div>
</template>

<script>

export default {
	name: "RestaurantDetail",
	props: {
  },

  methods: {
    id() {
      
    }
  },
	data: function() {
		return {
			
		};
	},
	mounted() {
		
	},
	methods: {
		getDataFromServer() {
			// ici on fait un fetch pour récupérer le détail du restaurant

		},
		
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
