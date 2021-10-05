<template>
	<div class="app-wrapper my-5">
		<ImgCp />
	</div>
</template>

<script>
import axios from 'axios'
import ImgCp from './components/imgCp.vue'

export default { // 1개만 내보내면 export default / 2개 이상이면 export
	name: 'App',
	components: { ImgCp },
	async created() {
		const { data } = await axios.get('/json/foods.json')
		console.log(data)
	}
}
</script>

<style lang="scss" scoped>
	.app-wrapper {
		max-width: 400px;
		margin: 2em auto;
	}
</style>