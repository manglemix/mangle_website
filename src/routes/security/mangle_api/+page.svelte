<h2>Mangle API</h2>

<p>
	Mangle API is a program that I created that performs any API operation that I need in my personal
	career. This includes performing user authentication, and storing user data for Bola. In the
	future, the program will also serve as a signalling server for WebRTC to allow for multiplayer
	Bola games.
	<br />
	<br />
	The API is built with Rust, and there is no
	<a href="https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html">unsafe</a>
	code, so memory safety is a guarantee. The <a href="https://rocket.rs/v0.5-rc/">Rocket</a> library
	is used to serve on HTTPS (HTTP Connections are actively blocked). This library protects from
	numerous web vulnerabilities such as directory traversal and remote code execution.
	<br />
	<br />
	User authentication depends only on passwords (for now). Passwords are never stored in any form on
	disk. Instead, passwords are hashed, and the hashes are stored. Attackers can only determine the real
	password from its hash by doing a brute force attack, where they generate random passwords, hash it,
	and see if the hashes are the same (if they are, the attacker has found the password). There are many
	different ways to hash a password, but I used
	<a href="https://github.com/p-h-c/phc-winner-argon2">Argon2id</a>
	as it is the recommended hash function as of its introduction.
	<br />
	<br />
	Since attackers must use the same hash function to perform their brute force attack, they are also
	forced to use Argon2id. The problem is that Argon2id is not only a computationally intense function,
	it also requires a lot of memory (can be configured to use up to a few gigabytes to hash just one password).
	In addition, I also use a salt to further thwart attacks. If two users used the same password, they
	would have the same hash, which would make an attacker's life easier. However, before a password is
	hashed, I add a unique salt. That way, users who share the same password will no longer have the same
	salt. This does not stop attackers from trying a password they found against other users, it just means
	that they have to try it against all other users. With all this being said, you should still use a
	strong password that you do not use elsewhere.
	<br />
	<br />
	Rocket adds type safety when handling HTTP Requests from clients. This is important because it means
	that an attacker cannot simply insert a malicious string somewhere where I only expect an integer or
	vice-versa. A common type of malicious string involves SQL Injection, which occurs when I build a query,
	from user data, to access a database, but the user data itself contains its own query that can do anything
	to the database, such as getting other people's user data or deleting the database. The good thing
	is that this attack is only possible if I build a query with user data that contains strings. The only
	string that could do this is a username, so if someone's username contains SQL code, then it could
	cause this attack. Fortunately, usernames cannot contain strings and must be alphanumeric, which means
	that they cannot possibly encode a query.
</p>
