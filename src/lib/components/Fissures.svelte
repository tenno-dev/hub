<script lang="ts">
	export let fissures: any;

	// Sort fissures into categories
	let categorizedFissures = {
		storms: [],
		steel: [],
		normal: []
	};

	if (fissures && fissures.length > 0) {
		categorizedFissures = fissures.reduce(
			(acc: { storms: any[]; steel: any[]; normal: any[] }, fissure: any) => {
				if (fissure.isStorm) {
					acc.storms.push(fissure);
				} else if (fissure.isHard) {
					acc.steel.push(fissure);
				} else {
					acc.normal.push(fissure);
				}
				return acc;
			},
			{ storms: [], steel: [], normal: [] }
		);
	}

	console.log('Categorized Fissures:', categorizedFissures);
</script>

<div>
	<h2
		class="card-title justify-center bg-transparent"
		style="text-align: center !important; background: transparent;"
	>
		<p>Fissures</p>
	</h2>
	{#if fissures && fissures.length > 0}
		<div class="tabs tabs-border">
			<input type="radio" name="my_tabs_2" class="tab" checked aria-label="Alle" />
			<div class="tab-content border-base-300 bg-base-100">
				<ul class="list bg-base-100 rounded-box w-full shadow-md">
					{#each fissures as fissure}
						<li class="list-row">
							{fissure.type} - {fissure.node}
						</li>
					{/each}
				</ul>
			</div>

			<input type="radio" name="my_tabs_2" class="tab" aria-label="Storm" />
			<div class="tab-content border-base-300 bg-base-100">
				<ul class="list bg-base-100 rounded-box w-full shadow-md">
					{#each categorizedFissures.storms as fissure}
						<li class="list-row">
							{fissure.type} - {fissure.node}
						</li>
					{/each}
				</ul>
			</div>
			<input type="radio" name="my_tabs_2" class="tab" aria-label="Steel Path" />
			<div class="tab-content border-base-300 bg-base-100">
				<ul class="list bg-base-100 rounded-box w-full shadow-md">
					{#each categorizedFissures.steel as fissure}
						<li class="list-row">
							{fissure.type} - {fissure.node}
						</li>
					{/each}
				</ul>
			</div>
			<input type="radio" name="my_tabs_2" class="tab" aria-label="Fissues" />
			<div class="tab-content border-base-300 bg-base-100">
				<ul class="list bg-base-100 rounded-box w-full shadow-md">
					{#each categorizedFissures.normal as fissure}
						<li class="list-row">
							{fissure.type} - {fissure.node}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{:else}
		<p>No fissures available.</p>
	{/if}
</div>
