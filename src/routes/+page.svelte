<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	// @ts-ignore
	import Archon from '$lib/components/Archon.svelte';
	import Construction from '$lib/components/Construction.svelte';
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import Fissures from '$lib/components/Fissures.svelte';
	import Alerts from '$lib/components/Alerts.svelte';
	let heroItems = $derived(data?.news && data?.news.length > 0 ? data.news.slice(0, 5) : []);
	let constructionProgress = data.constructionProgress || 0;
	let archonHunt = data.archonHunt || 0;
	let fissures = data.fissures || 0;
	let alerts = data.alerts || 0;
	// @ts-ignore
	let masonry = null;

	onMount(async () => {
		const module = await import('masonry-layout');
		const Masonry = module.default;

		// Initialize the masonry layout
		var elem = document.querySelector('.grid1');
		var msnry = new Masonry(elem, {
			// options
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});

		console.log('Masonry initialized:', x);
	});

	$effect(() => {
		// @ts-ignore
		var elem = document.querySelector('.grid1');
		var msnry = new Masonry(elem, {
			// options
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	});
</script>

<div>
	{#if heroItems}
		<HeroSlider {heroItems} />
	{/if}
	<div class="grid1 flex w-full" id="horizontal">
		<div class="grid-sizer"></div>

		<div class="grid-item w-auto px-4"><Construction {constructionProgress} /></div>
		<div class=" grid-item px-4"><Archon {archonHunt} /></div>
		<div class=" grid-item px-4">
			<Fissures {fissures} />
		</div>
		<div class="grid-item px-4"><Alerts {alerts} /></div>
	</div>

	<p></p>
</div>

<style>
	/* fluid 5 columns */
	.grid-sizer,
	.grid-item {
		width: 100%; /* Default width for extra small screens */
	}

	/* Extra Small devices (phones, less than 576px) - Optional, as it's the default */
	@media (min-width: 576px) {
		.grid-sizer,
		.grid-item {
			width: 50%; /* Small devices (landscape phones, 576px and up) */
		}
	}

	@media (min-width: 768px) {
		.grid-sizer,
		.grid-item {
			width: 33.333%; /* Medium devices (tablets, 768px and up) */
		}
	}

	@media (min-width: 992px) {
		.grid-sizer,
		.grid-item {
			width: 25%; /* Large devices (desktops, 992px and up) */
		}
	}

	@media (min-width: 1200px) {
		.grid-sizer,
		.grid-item {
			width: 20%; /* Extra large devices (large desktops, 1200px and up) */
		}
	}
</style>
