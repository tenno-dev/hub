<script lang="ts">
	export let archonHunt: any;
</script>

<div>
	<h2 class="card-title justify-center">
		<p>Archon Hunt</p>
	</h2>
	<div class="card bg-base-100 card-xs w-auto shadow-sm">
		<div class="card-body text-center">
			<div class="grid-container">
				<div class="grid grid-cols-2 gap-4">
					<p>Active: {archonHunt?.boss}</p>
					<p>ETA: {archonHunt?.eta}</p>
				</div>
				<ul class="list bg-base-100 rounded-box shadow-md">
					<li class="p-4 pb-2 text-xs tracking-wide opacity-60">Active Missions</li>
					{#each archonHunt?.missions as mission}
						<li class="list-row">
							{mission.type} - {mission.node}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
</style>
