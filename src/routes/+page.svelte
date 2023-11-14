<script>
    import { page } from '$app/stores';
</script>

{#if $page.url.hostname == "www.manglemix.com"}
<h1>Manglemix</h1>
<h3>Or if you prefer my real name, Najman Husaini</h3>
{:else}
<h1>Najman Husaini</h1>
<h3>Or if you prefer my developer name, Manglemix</h3>
{/if}
<img src="/scruffy.webp" alt="My Cat" width=500px><br>
<h2>Quick! Give me a summary!</h2>
<p>
	3rd Year Computer Science student with a Games emphasis at the University of Utah.
	Coded as a hobby for 5 years, avid rock climber for 4 years, casual badminton player and photographer.
	Beginner 3D modeller, laughable 2D artist, budding drummer.
</p>
<h2>Coding you say?</h2>
<p>
	Yes! I started with Python, then moved to Rust 2 years ago.
	In university, I learned Java, C#, and C++. I have been a Teaching Assistant for a Java class for 3 semesters.
	I began using Godot 3 years ago to make games and have never considered any other alternative.
	I'm also the programming team lead of Utah Student Robotics, which competes in NASA Lunabotics.
	We use Python and Rust and work with electronics such as motors and sensors, with a club size of about 15.
	I also frequently write github workflows and work with docker containers (for virtualization).
	We are now moving into computer vision and autonomous navigation for this year's competition cycle.
</p>
<h2>Made any games?</h2>
<p>
	<a href="https://bola.manglemix.com">Bola</a> is the only game I've made that is in a publicly playable state.
	The leaderboard used to work but due to low traffic I've shut down the API. Throughout my life I've pursued many
	ideas and made several proof of concepts, but I've never been able to take them further due to university getting
	harder. I am always interested to show off what I've made to anyone who is interested.
</p>

<style>
	h2 {
		margin-top: 3rem;
	}

	img {
		margin-top: 2rem;
	}

	p {
		margin: auto;
	}
</style>