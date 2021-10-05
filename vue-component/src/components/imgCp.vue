<template>
	<div class="img-wrapper">
		<img src="/img/f1.jpg" alt="아이스크림" class="w-100">
		<!-- public은 경로가 / 임, 생략가능 -->
		<div class="title-wrap">아이스크림</div>
	</div>
</template>

<script>
export default {
	name: 'ImgCp'
}
</script>

<style lang="scss" scoped>
	.img-wrapper {
		border: 1px solid #ff0000;
		padding: .5em;
		border-radius: .325em;
		position: relative;
		img {
			opacity: 1;
			transition: all .5s;
			&:hover {
				opacity: .5;
			}
		}
		.title-wrap {
			position: absolute;
			background-color: rgba(0, 0, 0, .75);
			color: #fff;
			font-size: 1.5em;
			text-align: center;
			width: calc(100% - .65em);
			left: .325em;
			bottom: .325em;
			padding: .5em 0;
		}
	}
</style>