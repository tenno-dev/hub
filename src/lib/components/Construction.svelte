<script lang="ts">
	export let constructionProgress: any;
</script>

<div class="card bg-base-100 card-xs w-auto shadow-sm">
	<div class="card-body text-center">
		<h2
			class="card-title items-center bg-transparent"
			style="text-align: center !important; background: transparent;"
		>
			<p>Construction Progress</p>
		</h2>
		<div class="grid-container">
			<div>
				<p>Fomorian</p>
				<div
					class="radial-progress text-primary"
					style="--value:{constructionProgress?.fomorianProgress};"
					aria-valuenow={constructionProgress?.fomorianProgress}
					role="progressbar"
				>
					{constructionProgress?.fomorianProgress}%
				</div>
			</div>
			<div>
				<p>Razorback</p>
				<div
					class="radial-progress text-primary"
					style="--value:{constructionProgress?.razorbackProgress};"
					aria-valuenow={constructionProgress?.razorbackProgress}
					role="progressbar"
				>
					{constructionProgress?.razorbackProgress}%
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
		gap: 1rem; /* Spacing between grid items */
		justify-content: center; /* Center the grid horizontally */
		align-items: center; /* Center the grid vertically */
		text-align: center; /* Center text inside the grid items */
	}

	.radial-progress {
		margin: auto; /* Center the radial progress within its grid cell */
	}
</style>
