<script>
	import NavItem from './nav-item.svelte';

	let navs = [
		{ name: 'Home', color: 'purple', href: '/' },
		{ name: 'About', color: 'red', href: '/about' },
		{ name: 'Projects', color: 'green', href: '/projects' }
	];
</script>

<nav class="ml-8">
	{#each navs as nav}
		<NavItem href={nav.href} color={nav.color}>{nav.name}</NavItem>
	{/each}
</nav>
