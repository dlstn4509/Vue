<template>
	<li class="thumb">
		<img :src="img.src" :alt="img.title" class="w-100" @click="onChange">
	</li>
</template>

<script>
export default {
	name: 'ThumbCp',
	props: ['img'],
	methods: {
		onChange(e) {
			this.$emit('@onChange', {src: e.target.src, title: e.target.alt})
			// $emit : vue메서드, emit:내뿜다, 
		}
	}
}
</script>

<style lang="scss" scoped>
	.thumb {
		margin-right: 0 1%;
		flex-grow: 1;
		img {
			cursor: pointer;
		}
	}
</style>