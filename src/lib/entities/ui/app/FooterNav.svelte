<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';
	import { actualScreen } from '$lib/shared'

</script>

<footer class="app-navigation">
	<button on:click={()=> $actualScreen = 0} class="app-nav-link w-inline-block">
		<img src="images/icons/manual.svg" alt="" class="footer-nav-icon" />
		<div class="footer-nav-text">Manual</div>
	</button>
	<button on:click={()=>  $actualScreen = 1} class="app-nav-link w-inline-block">
		<img src="images/icons/play.svg" alt="" class="footer-nav-icon" />
		<div class="footer-nav-text">Playing</div>
	</button>
	<button on:click={()=>  $actualScreen = 2} class="app-nav-link w-inline-block">
		<img src="images/icons/search.svg" alt="" class="footer-nav-icon" />
		<div class="footer-nav-text">Search</div>
	</button>
	<!-- <button on:click={()=>  actualScreen = 3} class="app-nav-link w-inline-block">
		<img src="images/icons/search.svg" alt="" class="footer-nav-icon" />
		<div class="footer-nav-text">Search</div>
	</button> -->
</footer>

<style lang="postcss">
	.app-nav-link {
		grid-column-gap: 7px;
		grid-row-gap: 7px;
		opacity: 1;
		filter: none;
		color: #2b2b2b;
		flex-direction: column;
		flex: 0 auto;
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		justify-content: center;
		align-items: center;
		padding-left: 3%;
		padding-right: 3%;
		font-style: normal;
		text-decoration: none;
		transition:
			filter 0.2s,
			opacity 0.2s;
		display: flex;
	}

	.app-nav-link:hover {
		z-index: 1;
		opacity: 0.6;
	}

	.app-nav-link:active {
		opacity: 1;
		filter: none;
	}

	.app-nav-link:focus,
	.app-nav-link:visited {
		filter: none;
	}

	.app-nav-link.w--current {
		opacity: 0.6;
		color: #e0e0e0;
	}

	.app-nav-link.w--current:active {
		filter: none;
	}

	.footer-nav-icon {
		filter: invert();
		width: 27px;
	}

	.footer-nav-text {
		color: #fff;
		text-align: center;
		font-size: 11px;
		font-weight: 400;
		line-height: 1;
		display: block;
	}

	.app-navigation {
		z-index: 95;
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		background-color: rgba(71, 71, 71, 0.2);
		border-radius: 100rem;
		justify-content: space-around;
		align-items: center;
		width: 380px;
		margin-left: auto;
		margin-right: auto;
		padding: 15px 10px;
		display: flex;
		position: fixed;
		top: auto;
		bottom: 20px;
		left: 0%;
		right: 0%;
	}

	@media screen and (max-width: 991px) {
		.app-navigation {
			width: 45%;
			padding: 15px;
		}
		.app-nav-link {
			flex: 1;
			padding-top: 0;
			top: 0;
			bottom: 5px;
		}

		.footer-nav-icon {
			width: 23px;
			margin-bottom: 1px;
		}

		.footer-nav-text {
			margin-top: 5px;
			font-size: 10px;
		}
	}

	@media screen and (max-width: 767px) {
		.app-navigation {
			border-radius: 0;
			width: 100%;
			padding-bottom: 21px;
			bottom: 0;
		}
		.app-nav-link {
			flex: 1;
		}

		.footer-nav-text {
			margin-top: 0;
		}
	}

	@media screen and (max-width: 479px) {
		.app-navigation {
			border-radius: 0;
			width: 100%;
			height: auto;
			padding: 13px 10px 30px;
			bottom: 0;
		}
		.app-nav-link {
			flex-direction: column;
			flex: 1;
			padding-bottom: 0;
			padding-left: 4%;
			padding-right: 4%;
			transition: filter 0.2s;
			display: flex;
			top: 0;
			bottom: 0;
		}

		.app-nav-link:hover {
			opacity: 1;
		}

		.app-nav-link.w--current {
			color: #fcaa9e;
		}

		.footer-nav-icon {
			width: 20px;
			margin-bottom: 0;
		}

		.footer-nav-text {
			font-size: 9.5px;
		}
	}
</style>
