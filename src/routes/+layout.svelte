<div class="headerDiv">
	<name>&nbsp;Najman Husaini</name>
	<div class="navDiv">
		<h3><a href="/">Home</a></h3>
		<h3><a href="/about">About</a></h3>
		<h3><a href="/contacts">Contacts</a></h3>
		<!-- <h3><a href="/security">Security</a></h3> -->
	</div>
</div>
<hr />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
	@import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');

	name {
		font-family: 'Open Sans';
		font-size: 40px;
		font-weight: bold;
	}

	:global(*) {
		font-family: 'Open Sans';
		color: white;
		text-align: center;
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
		margin: auto;
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

	.headerDiv {
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
	}

	.navDiv {
		width: 300px;
		display: inline-flex;
		justify-content: space-around;
	}
</style>
