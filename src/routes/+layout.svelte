<title>Manglemix</title>
<header>
	<nav>
		<h3><a href="/">Home</a></h3>
		<h3><a href="/contacts">Contacts</a></h3>
	</nav>
</header>

<div style="height: 4.5rem"/>
<slot />
<div style="height: 4.5rem"/>

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
	@import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');

	:global(*) {
		font-family: 'Open Sans';
		color: white;
		text-align: center;
		margin: 0px;
		padding: 0px;
	}

	a {
		text-decoration: none;
	}

	:global(body) {
		background-color: #0c0c0c;
	}

	:global(p) {
		line-height: 35px;
		max-width: 800px;
		text-align: left;
	}

	:global(h1) {
		font-size: 60px;
	}

	:global(h2) {
		font-size: 40px;
	}

	:global(code) {
		border-radius: 5px;
		padding: 2px;
		background-color: #16161a;
		font-family: 'Jetbrains Mono';
	}

	header {
		width: 100%;
		justify-content: center;
		background-color: #111111;
		height: 4rem;
		display: flex;
		align-items: center;
		box-shadow: 0px 2px 10px #050505;
		position: fixed;
	}

	nav {
		width: 300px;
		display: inline-flex;
		justify-content: space-around;
	}
</style>
