<h2>Security</h2>

<p>
	Web security is undeniably an important aspect in web development. In any project I expose to the
	public, you can be assured that I took great care into ensuring that you or your data is not
	vulnerable to attacks. If you are an experienced individual in cybersecurity and you notice that I
	have some weakness in my infrastructure, you are more than welcome to send me an email. I take
	these messages very seriously.
	<br />
	<br />
	Currently, all of my web architecture runs on one Amazon Web Server, specifically through 3 docker
	containers. I will eventually switch to Podman as that is slightly more secure. One container runs
	Nginx, and it is the only public facing container. It performs HTTPS authentication and serves static
	content. From here, requests are either routed to my website container, which is just Node.js, or to
	my API, which is built on Rust. View the security details for it
	<a href="security/mangle_api">here</a>.
	<br />
	<br />
	All these crates only have the ability to read from specific directories that I have to explicitly
	allow. This means that attackers cannot enter the Nginx container and modify the TLS certificates,
	and since only Nginx performs HTTPS authentication, these certificates are not even visible through
	the other containers. This also means that if someone were to break into the website container, they
	also cannot modify the page to include some malicious script that will run on any visitor. Thus, the
	weakest point would be the API. However, the only files that the API can modify are the databases.
	As of right now, there is no way to insert malicious code into the database such that it will be run
	on clients when accessed, as the databases simply cannot store anything that complicated yet. This
	section will update when that becomes the case.
	<br />
	<br />
	As a result, the worst thing an attacker could, given that they can even infiltrate the server, is
	delete the databases used in the API, which I make backups for every once in a while. That is if there
	isn't some zero-day vulnerability in Docker that I have yet to find, which could be a big issue as
	the Docker daemon has root privileges, but privilege can be reduced by using Podman though.
</p>
