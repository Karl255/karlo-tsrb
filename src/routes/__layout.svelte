<script>
	import "../styles/main.scss";
	import NavigationDropdown from "$lib/NavigationDropdown.svelte";
	import { pageTitle } from "$lib/pageStores.js";
	
	let title;
	pageTitle.subscribe(val => title = val);
</script>

<svelte:head>
	<title>{title}</title>	
</svelte:head>

<header>
	<div class="subcontainer-main">
		<h1>{title}</h1>
		<ul>
			<li><a href=".">Home</a></li>
			<li>
				<NavigationDropdown title="Tools">
					<a href="/converter">Converter</a>
					<a href=".">Fake link 1</a>
					<a href=".">Fake link 2</a>
					<a href=".">Fake link 3</a>
				</NavigationDropdown>
			</li>
			<li><a href="/about">About & Contact</a></li>
		</ul>
	</div>
</header>
<main>
	<slot></slot>
</main>
<footer>
	<span>Copyleft <span style="display: inline-block; transform: scaleX(-1)">©</span> Karl</span>
</footer>
