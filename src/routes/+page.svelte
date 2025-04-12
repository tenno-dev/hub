<script>
	let { data } = $props();
	import Archon from '$lib/components/Archon.svelte';
	import Construction from '$lib/components/Construction.svelte';
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import Fissures from '$lib/components/Fissures.svelte';
	let heroItems = $derived(data?.news && data?.news.length > 0 ? data.news.slice(0, 5) : []);
	let constructionProgress = data.constructionProgress || 0;
	let archonHunt = data.archonHunt || 0;
	let fissures = data.fissures || 0;
</script>

<div>
	{#if heroItems}
		<HeroSlider {heroItems} />
	{/if}
	<div class="masonry grid grid-cols-3 gap-2">
		<div class="px-4"><Construction {constructionProgress} /></div>
		<div class="px-4"><Archon {archonHunt} /></div>
		<div class="px-4">
			<Fissures {fissures} />
		</div>
	</div>

	<p></p>
</div>

<style>
	.masonry {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Default for larger screens */
		grid-auto-rows: masonry;
	}

	@media (max-width: 1024px) {
		.masonry {
			grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
		}
	}

	@media (max-width: 640px) {
		.masonry {
			grid-template-columns: repeat(1, 1fr); /* 1 column for mobile */
		}
	}
</style>
