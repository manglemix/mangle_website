<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>


{#each data.blogs as post}
	{@html post.title}
	{#if post.date != null}
		<p><em>{post.date}</em></p>
	{/if}
	<p>{@html post.body}</p>
{/each}