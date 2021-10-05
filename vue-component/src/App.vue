<template>
	<div class="app-wrapper my-5">
		<ImgCp :title="title" :src="src" />
		<!-- 부모가 자식한테 보낼때는 v-bind로 보낸다 -->
		<ul class="thumb-wrap">
			<ThumbCp v-for="v in foods" :key="v.id" :img="v" />
		</ul>
	</div>
</template>

<script>
/* 
1. 부모 컴포넌트가 자식 컴포넌트에게 변수를 전달할 때는 v-bind로 전달
2. 자식 컴포넌트는 부모로부터 props로 변수를 전달 받음
*/

import axios from 'axios'
import ImgCp from './components/imgCp.vue'
import ThumbCp from './components/ThumbCp.vue'

export default {
	name: 'App',
	components: { ImgCp, ThumbCp },
	data() { // 전역 변수들
		return {
			foods: [],
			title: '',
			src: '',
		}
	},
	async created() {
		const { data } = await axios.get('/json/foods.json')
		this.foods = data;
		this.title = this.foods[0].title
		this.src = this.foods[0].src
	}
}
</script>

<style lang="scss" scoped>
	.app-wrapper {
		max-width: 400px;
		margin: 2em auto 1em auto;
		.thumb-wrap {
			border: 1px solid #4400ff;
			padding: .5em;
			border-radius: .325em;
			display: flex;
			width: 101%;
		}
	}
</style>