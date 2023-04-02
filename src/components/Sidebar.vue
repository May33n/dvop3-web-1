<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
            <img src="../assets/logo.png" alt="Vue">
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-bars-staggered" /></span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-table-columns" /></span>
				<span class="text">Dashboard</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-map" /></span>
				<span class="text">Map</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-location-pin" /></span>
				<span class="text">Saved Location</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-calendar-days" /></span>
				<span class="text">Calendar</span>
			</router-link>
            <router-link to="/contact" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-gear" /></span>
				<span class="text">Settings</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /></span>
				<span class="text">Log Out</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--light);
	color: var(--dark);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 1.2rem;
				color: var(--dark);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
        padding: rem;
	}

	h3 {
		color: var(--dark);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 1rem 2rem;

			.material-icons {
				font-size: 1rem;
				color: var(--dark);
				transition: 0.2s ease-in-out;
			}
			.text {
                display: flex;
				color: var(--dark);
				transition: 0.2s ease-in-out;
                text-align: right;
                
			}

			&:hover {
                text-decoration: underline;
                

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
                padding-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>