<script>
	const currentYear = $state(new Date().getFullYear());
</script>

<footer class="footer bg-base-300 text-base-content p-4">
	<div class="footer-content">
		<div class="footer-left">
			<p>Copyright © {currentYear} - All rights reserved</p>
		</div>
		<nav class="footer-right">
			<span>
				Built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer"
					>Sveltekit</a
				>
				&
				<a href="https://daisyui.com" target="_blank" rel="noopener noreferrer">DaisyUI v5</a>
			</span>
			<span>
				<a
					href="https://github.com/Bitti09/mediathekcommunity"
					target="_blank"
					rel="noopener noreferrer"
					class="github-link"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="16"
						height="16"
						aria-hidden="true"
						class="github-icon"
					>
						<path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.47 11.47 0 013-.405c1.02.005 2.045.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
						/>
					</svg>
					Source
				</a>
			</span>
		</nav>
    </div>
 </footer>

<style>
	.footer {
		width: 100%;
		font-size: 0.875rem;
		line-height: 1.25rem;
		justify-content: center;
		contain: content;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		justify-items: center;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.footer-left,
	.footer-right {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	.tmdb-credit {
		font-size: clamp(0.8rem, 1.5vw, 0.9rem);
		color: var(--font-color-light);
	}

	.tmdb-logo {
		margin-top: 0.5rem;
		transform: translateZ(0);
		will-change: transform;
	}

	.tmdb-logo svg {
		height: clamp(12px, 2vw, 13.52px);
		width: auto;
	}

	.logo-path {
		fill: url(#tmdb-logo-gradient);
	}

	.github-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		transition: background-color 0.2s ease;
	}

	.github-link:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.github-icon {
		display: block;
	}

	@media (min-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
