<script>
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	export let alerts = null; // Initialize Alerts as null or an empty array
</script>

<div>
	<h2 class="card-title justify-center">
		<p>Archon Hunt</p>
	</h2>
	<div class="card bg-base-100 card-xs w-auto shadow-sm">
		<div class="card-body text-center">
			<div class="grid-container">
				{#if alerts.length > 0}
					{#each alerts as alert}
						<div class="alert alert-info shadow-lg">
							<div>
								<h2>{alert.title}</h2>
							</div>
						</div>
					{/each}
				{:else}
					<h2 class="card-title"><p>No alerts available.</p></h2>
				{/if}
			</div>
		</div>
	</div>
</div>
