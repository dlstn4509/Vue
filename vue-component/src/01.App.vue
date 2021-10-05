<template> <!-- HTML -->
	<div class="header-wrapper">
		<h1 class="logo">Hello {{name}}</h1>
		<button @click="showAlert">alert 버튼</button>
	</div>
</template>

<script> // JS 
export default {
	name: 'App1', // 관습적으로 쓰는 네임
	data() { // 전역변수 설정, 함수로 쓰고 리턴해준다
		return {
			name: 'dlstn4509'
		}
	},
	methods: {
		showAlert(e) {
			alert('Hello' + ' ' + this.name)
		}
	}
}
</script>

<style lang="scss"> // CSS(scss)
	.header-wrapper {
		text-align: center;
		h1.logo {
			color: red;
		}
	}
</style>