<script>
    import { page } from '$app/stores';
</script>

{#if $page.url.hostname == "manglemix.com"}
<h1>Manglemix</h1>
<h3>Or if you prefer my real name, Najman Husaini</h3>
{:else}
<h1>Najman Husaini</h1>
<h3>Or if you prefer my developer name, Manglemix</h3>
{/if}
<br>
<br>
<img src="/scruffy.jpg" alt="My Cat" width=500px><br>
<h2>Quick! Give me a summary!</h2>
<p>
	3rd Year Computer Science student with a Games emphasis at the University of Utah<br>
	Coded as a hobby for 5 years, avid rock climber for 4 years, casual badminton player and photographer<br>
	Beginner 3D modeller, laughable 2D artist, nonexistent music talent<br>
</p>
<br>
<h2>Coding you say?</h2>
<p>
	Yes! I started with Python, then moved to Rust 2 years ago<br>
	In university, I learned Java, C#, and C++. I have been a Teaching Assistant for a Java class for 2 semesters<br>
	I began using Godot 3 years ago to make games and have never considered any other alternative<br>
	I'm also the programming team lead of Utah Student Robotics, which competes in NASA Lunabotics<br>
	We use Python and work with electronics such as motors and sensors, with a club size of about 15<br>
	I also frequently write github workflows and work with docker containers (for virtualization)<br>
</p>
<br>
<h2>Made any games?</h2>
<p>
	<a href="https://bola.manglemix.com">Bola</a> is the only game I've made that is in a publicly playable state<br>
	The leaderboard used to work but due to low traffic I've shut down the API<br>
	I have plans to make a much more interesting version of this game, but I am already working on something,<br>
	A multiplayer sci-fi FPS PVP/PVE game involving robots and strategizing and luck!
</p>
<br>
<h2>Do you need any help?</h2>
<p>
	I absolutely do!<br>
	Mainly I just need 3D artists to help with developing the theme of the game at the very least<br>
	A Sound Designer is also very welcome, alongside a Front End Web Developer<br>
	If you are proficient with Godot and itching for a project to work on, feel free to contact me!
</p>