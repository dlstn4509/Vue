<template>
	<div class="app-wrapper my-5">
		<ImgCp :title="title" :src="src" />
		<!-- 부모가 자식한테 보낼때는 v-bind로 보낸다 -->
		<ul class="thumb-wrap">
			<ThumbCp v-for="v in foods" :key="v.id" :img="v" @@onChange="imgChange" />
		</ul>
	</div>
</template>

<script>
/* 
1. 부모 컴포넌트가 자식 컴포넌트에게 변수를 전달할 때는 v-bind로 전달
2. 자식 컴포넌트는 부모로부터 props로 변수를 전달 받음
3. 자식 컴포넌트가 부모 컴포넌트에게 변수를 전달할 때는 이벤트로 전달 ($emit)
4. 부모 컴포넌트는 자식으로부터 v-on으로 이벤트를 통한 변수를 받음(v-on 이름은 내가 만들어서 정함, 보통 앞에 @ 붙임)
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
	methods: {
		imgChange(v) {
			this.src = v.src
			this.title = v.title
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