<script>
	import '../app.css';
	import Navbar from '$components/navbar.svelte';
</script>

<Navbar />

<div class="bg-darker px-4 h-screen pt-28">
	<div class="container max-w-[800px] mx-auto">
		<slot />
	</div>
</div>
