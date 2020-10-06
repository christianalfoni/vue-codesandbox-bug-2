<template>
	<div id="app">
		<router-link :to="{ name: 'admin' }">
			admin
		</router-link>
		|
		<router-link :to="{ name: 'tag-moderation' }">
			tag moderation
		</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>

<style>
	#app {
		font-family: 'Exo 2', 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		/* margin-top: 60px; */
	}
</style>