<script>
	export let href;
	export let color;
</script>

<a
	{href}
	class="px-2 py-1 transition-all duration-150 ease-out text-[1.2em] font-normal rounded-md  text-white ml-4 first:ml-0 hover:bg-darker hover:text-{color}"
>
	<slot />
</a>
