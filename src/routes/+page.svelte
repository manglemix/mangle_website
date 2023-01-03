<script>
	import { is_empty } from 'svelte/internal';

	/** @type {import('./$types').PageData} */
	export let data;
</script>


{#if data.blogs.length == 0}
	<br/>
	<h3>Sorry, we could not load any blogs right now</h3>
{:else}
	{#each data.blogs as post}
	{@html post.title}
	{#if post.date != null}
		<p><em>{post.date}</em></p>
	{/if}
	<p>{@html post.body}</p>
	{/each}
{/if}
