/* -------------- VARIABLES -------------- */
// #region
var categories = { // Order is how they appear on the page.
	tutorials: {
		label: "Tutorials",
		status: "active",
		id: "category_tutorials"
	},
	fivem: {
		label: "FiveM",
		status: "active",
		id: "category_fivem"
	},
	thisWebsite: {
		label: "Website",
		status: "active",
		id: "category_website"
	},
	misc: {
		label: "Miscellaneous",
		status: "active",
		id: "category_misc"
	}
};

var articles = { // Order is not important, key is date/time, it gets sorted automatically.

	// Tutorials
	["2021-12-26_17-30"]: { // Dynamic Surroundings 1.18/1.19
		category: "category_tutorials",
		title: "Dynamic Surroundings",
		date: "26 Dec 2021",
		version: "1.18/1.19",
		id: "dynamic_surroundings_1.18_1.19",
		content: `
		<p>
			This is a written tutorial for my video tutorial on how to build and install Dynamic Surroundings for Minecraft 1.18 and 1.19. The
			video can be found <a target="_blank" href="https://www.youtube.com/watch?v=09jPs3ePfhE">here</a>.<br><br>

			<b>Disclaimers:</b>
		</p>
		<ul>
			<li>This only works on Fabric.</li>
			<li>At the time of writing this, only 1.18, 1.18.2 and 1.19 are available.</li>
			<li>The versions are updated by community members, bugs may be present.</li>
			<li>There's no way to get a more up to date version of the mod, unless you pick up Java to code it yourself.</li>
			<li>I have uploaded already built jar files of the mod, here's the links: <a target="_blank" href="https://workupload.com/file/tgGfjscVtUP">1.18/1.18.1</a>, <a target="_blank" href="https://workupload.com/file/GTDEQTD4Wsr">1.18.2</a>, <a target="_blank" href="https://workupload.com/file/YNYT9tbH4Lf">1.19</a>.</li>
		</ul><br>

		<p><b>Downloading requirements and other prepwork</b></p>
		<ol>
			<li>Uninstall Java if you don't have Java Development Kit 19 or newer installed. It can be found <a target="_blank" href="https://www.oracle.com/java/technologies/downloads/#jdk19-windows">here</a>.</li>
			<li>Download and run the <a target="_blank" href="https://fabricmc.net/use/installer/">Fabric Loader</a>, selecting the game version you want to use in the process.</li>
			<li>Download the <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all">Fabric API</a> for your game version.</li>
			<li>Download the <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/modmenu/files/all">Mod Menu</a> mod for your game version to configure Dynamic Surroundings later.</li>
			<li>Go to the pull requests GitHub page of <a target="_blank" href="https://github.com/OreCruncher/DynamicSurroundingsFabric/pulls">Dynamic Surroundings</a>.</li>
			<li>Choose what version you want, click on "Commits", scroll down and click the last <code>&lt;&gt;</code> button.</li>
			<li>Click the green "Code" button and choose "Download ZIP". Open the archive once it's downloaded.</li>
			<li>Drag and drop the folder that's inside the archive anywhere onto your PC, preferably your Desktop for easy access.</li>
		</ol><br>

		<p>
			Note: The following part is an explanation on how to do this on Windows. I have no idea how to do this on a Mac, but you can search Google for phrases like
			"How to change the default shell to bash on macOS" or "How to run Gradle from the command line on Mac bash".
		</p>

		<p><b>Building the mod</b></p>
		<ol>
			<li>Open the folder you just extracted. You should see a "gradlew" Windows Batch File inside.</li>
			<li>Right-click the top address bar, choose "Edit address", type in <code>cmd</code> and press enter.</li>
			<li>Inside the command prompt window, type <code>gradlew build</code> and press enter. The build process may take some minutes.</li>
			<li>Once the process is done, close the command prompt window.</li>
		</ol><br>

		<p><b>Installing it all</b></p>
		<ol>
			<li>Go into the extracted folder from the "Building the mod" step, go into "build" then into "libs" and copy the file that does not have "dev" or "sources" in it's name.</li>
			<li>Paste the file into your "mods" folder. If you don't have a "mods" folder, create it inside your Minecraft directory. Here's how to find it:</li>
			<ul>
				<li>Press the Windows button on your keyboard.</li>
				<li>Type in <code>%appdata%</code> and press enter.</li>
				<li>Open the ".minecraft" folder at the very top.</li>
			</ul>
			<li>Also copy the Mod Menu and Fabric API mods you downloaded earlier into that same "mods" folder.</li>
			<li>Start the Minecraft launcher and select the Fabric version you installed.</li>
		</ol><br>

		<p>
			This is it! Your mod should be fully installed now. Please note that some other mods may not be compatible with Dynamic Surroundings.
			I am not able to help with that as personally I only have very few mods installed at a time.
		</p>
		`
	},
	["2022-06-07_14-10"]: { // TrainGuy's Animation Overhaul 1.18.2
		category: "category_tutorials",
		title: "TrainGuy's Animation Overhaul",
		date: "07 Jun 2022",
		version: "1.18.2",
		id: "trainguys_animation_overhaul_1.18.2",
		content: `
		<p>
			This is a written tutorial for my video tutorial on how to build and install TrainGuy's Animation Overhaul for Minecraft 1.18.2. The
			video can be found <a target="_blank" href="https://www.youtube.com/watch?v=J7f28X6phQE">here</a>.<br><br>

			<b>Disclaimers:</b>
		</p>
		<ul>
			<li>This only works on Fabric.</li>
			<li>At the time of writing this, only 1.18.2 works partially. 1.19 is in the works, but unsupported.</li>
			<li>There's no way to get a more up to date version of the mod, unless you pick up Java to code it yourself.</li>
			<li>I have uploaded already built a jar file of the mod, here's the link: <a target="_blank" href="https://workupload.com/file/KPvpnqvpREq">1.18.2</a>.</li>
		</ul><br>

		<p><b>Downloading requirements and other prepwork</b></p>
		<ol>
			<li>Uninstall Java if you don't have Java Development Kit 19 or newer installed. It can be found <a target="_blank" href="https://www.oracle.com/java/technologies/downloads/#jdk19-windows">here</a>.</li>
			<li>Download and run the <a target="_blank" href="https://fabricmc.net/use/installer/">Fabric Loader</a>, selecting the game version you want to use in the process.</li>
			<li>Download the <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all">Fabric API</a> for your game version.</li>
			<li>Go to the GitHub page of <a target="_blank" href="https://github.com/Trainguy9512/trainguys-animation-overhaul">TrainGuy's Animation Overhaul</a>.</li>
			<li>In the top left drop-down menu, choose what version you want.</li>
			<li>Click the green "Code" button and choose "Download ZIP". Open the archive once it's downloaded.</li>
			<li>Drag and drop the folder that's inside the archive anywhere onto your PC, preferably your Desktop for easy access.</li>
		</ol><br>

		<p>
			Note: The following part is an explanation on how to do this on Windows. I have no idea how to do this on a Mac, but you can search Google for phrases like
			"How to change the default shell to bash on macOS" or "How to run Gradle from the command line on Mac bash".
		</p>

		<p><b>Building the mod</b></p>
		<ol>
			<li>Open the folder you just extracted. You should see a "gradlew" Windows Batch File inside.</li>
			<li>Right-click the top address bar, choose "Edit address", type in <code>cmd</code> and press enter.</li>
			<li>Inside the command prompt window, type <code>gradlew build</code> and press enter. The build process may take some minutes.</li>
			<li>Once the process is done, close the command prompt window.</li>
		</ol><br>

		<p><b>Installing it all</b></p>
		<ol>
			<li>Go into the extracted folder from the "Building the mod" step, go into "build" then into "libs" and copy the file that does not have "dev" or "sources" in it's name.</li>
			<li>Paste the file into your "mods" folder. If you don't have a "mods" folder, create it inside your Minecraft directory. Here's how to find it:</li>
			<ul>
				<li>Press the Windows button on your keyboard.</li>
				<li>Type in <code>%appdata%</code> and press enter.</li>
				<li>Open the ".minecraft" folder at the very top.</li>
			</ul>
			<li>Also copy the Fabric API mod you downloaded earlier into that same "mods" folder.</li>
			<li>Start the Minecraft launcher and select the Fabric version you installed.</li>
		</ol><br>

		<p>
			This is it! Your mod should be fully installed now. Please note that some other mods may not be compatible with TrainGuy's Animation Overhaul.
			I am not able to help with that as personally I only have very few mods installed at a time.
		</p>
		`
	},

	// FiveM
	["2022-11-17_07-08"]: { // Propinfo
		category: "category_fivem",
		title: "Propinfo",
		date: "22 Dec 2022",
		version: "v1.0",
		id: "fivem_pun_propinfo_v1.0",
		content: `
		<p>Features:</p>
		<ul>
			<li>Point your gun at nearly any ped, vehicle or object to find out its' hash, name, position and rotation.</li>
			<li>Draw boxes around peds, vehicles and objects to mark them easily.</li>
			<li>Draw text about multiple peds, vehicles or objects containing their info on screen.</li>
			<li>In game customizability with client-sided saving functionality using resource KVP's.</li>
			<li>Periodic version checks.</li>
			<li>Native addon vehicle support, just click Update in game.</li>
			<li>Potential addon ped and prop support via community based lists.</li>
			<li>HTML based UI for all the customizable options.</li>
			<li>Only slightly botched code.</li>
		</ul><br>

		<p>
			More info: <a target="_blank" href="https://forum.cfx.re/t/id-gun-successor-pun-propinfo/4973307">Cfx.re post</a><br>
			Download: <a target="_blank" href="https://github.com/Puntherline/pun_propinfo">Via GitHub</a>
		</p>
		`
	},
	["2022-11-17_07-08"]: { // Resource Starter
		category: "category_fivem",
		title: "Resource Starter",
		date: "17 Nov 2022",
		version: "v1.0",
		id: "fivem_pun_resourcestarter_v1.0",
		content: `
		<p>
			This is a resource I haven't actually released on the Cfx.re forums. It should help to mitigate startup lag or even crashes on servers
			that are either running hardware from 2 decades ago or rented from Zap hosting.<br><br>

			The main feature that it's got is allowing you to place <code>wait [ms]</code> lines inside your server.cfg file - Or rather the
			replacement that this resource comes with. For more detailed information, go to the download link.<br><br>

			Download: <a href="https://github.com/Puntherline/pun_resourcestarter" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2021-04-12_19-42"]: { // Docs Dark mode
		category: "category_fivem",
		title: "Docs Dark Mode",
		date: "12 Apr 2021",
		version: "v1.0",
		id: "fivem_docs_dark_mode_v1.0",
		content: `
		<p>
			Not directly related to FiveM itself, but the documentation (<a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a>)
			and the native reference (<a href="https://docs.fivem.net/natives/" target="_blank">docs.fivem.net/natives</a>): Adding a dark mode so
			that your eyes may finally rest while looking up documentation.<br><br>

			Installation in Chrome and Opera GX:
		</p>
		<ul>
			<li>Go to the <a href="https://chrome.google.com/webstore/category/extensions" target="_blank">Chrome Web Store</a> and download the extension called <a href="https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld" target="_blank">User JavaScript and CSS</a>.</li>
			<li>Open <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">this link</a> in a new tab and copy all of the code it has.</li>
			<li>Go to <a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a>, click the User JavaScript and CSS extension icon, then "Add new".</li>
			<li>At the top URL field, remove the <code>docs/</code> part. This is so that it also works on the "natives" page.</li>
			<li>Paste the CSS code you copied earlier into the right half of the page.</li>
			<li>Hover over "Options" and make sure that the "Enabled" box is ticked.</li>
			<li>Click "Save", close the tab and reload the FiveM Docs page. It should now be in dark mode.</li>
		</ul><br>
		<p>
			Installation in Firefox:
		</p>
		<ul>
			<li>Go to the <a href="https://addons.mozilla.org/en-US/firefox/" target="_blank">Mozila Add-On Browser</a> and download the extension called <a href="https://addons.mozilla.org/en-US/firefox/addon/styl-us/" target="_blank">Stylus</a>.</li>
			<li>Open <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">this link</a> in a new tab and copy all of the code it has.</li>
			<li>Go to <a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a> and click the Stylus extension icon.</li>
			<li>Under "Write this style for:" click the "docs" part of the full URL it shows you.</li>
			<li>Paste the CSS code you copied earlier into the code window.</li>
			<li>At the bottom of the page, make sure that <code>URLs on the domain</code> is selected, and that the URL is <code>docs.fivem.net</code>.</li>
			<li>Click "Save" in the top left, close the tab and the FiveM Docs should now be in dark mode.</li>
		</ul><br>
		<p>
			Screenshot:<br>
			<img class="contentImage" src="/media/fivem/docs_dark_mode/showcase.jpg"><br><br>

			More info: <a href="https://forum.cfx.re/t/fivem-docs-native-reference-dark-mode/2627301" target="_blank">Cfx.re post</a><br>
			Get: <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">Open CSS code file</a>
		</p>
		`
	},
	["2021-03-05_00-06"]: { // Clothing File Renamer
		category: "category_fivem",
		title: "Clothing File Renamer",
		date: "05 Mar 2021",
		version: "v1.0",
		id: "fivem_clothing_file_renamer_v1.0",
		content: `
		<p>
			This batch script allows you to rename clothing files in bulk when creating FiveM streamable resources.<br><br>

			You can find an explanation as for how to use it on the Cfx.re forums.<br><br>

			More info: <a href="https://forum.cfx.re/t/batch-clothing-file-renamer-thing/2339674" target="_blank">Cfx.re post</a><br>
			Download: <a href="https://github.com/Puntherline/fivem_clothing_renamer" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2021-02-05_19-09"]: { // Player Identifier
		category: "category_fivem",
		title: "Player Identifier",
		date: "05 Feb 2021",
		version: "v1.0",
		id: "fivem_player_identifier_v1.0",
		content: `
		<p>
			This is a resource for developers only because it's bare-bones.<br><br>

			It checks your database (via its own table) if any identifiers that FiveM provides match to an account that's already
			banned on your server. The identifiers it checks are steam, license, xbox live app, xbox live account, discord, FiveM account,
			FiveM tokens and also resource KVP's.<br><br>

			Important function however, like banning and unbanning players, are not included, hence why it's a resource for devs.<br><br>

			More info and download: <a href="https://github.com/Puntherline/pun_identify_players" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2020-05-08_20-40"]: { // Smart Allowlist (v1.0)
		category: "category_fivem",
		title: "Smart Allowlist",
		date: "08 May 2020",
		version: "v1.0",
		id: "fivem_pun_allowlist_v1.0",
		content: `
		<p>
			I admit, it's overly complicated, but it works!<br><br>

			Features:
		</p>
		<ul>
			<li>Standalone, meaning no SQL required.</li>
			<li>Easy to configure (add people to allowlist, restart script, done).</li>
			<li>Allowlist only mode (only people on the allowlist are able to join).</li>
			<li>Password only mode (you have to enter the password).</li>
			<li>Allowlist + Password mode (you have to be allowlisted <i>and</i> enter the password).</li>
			<li>Smart mode (either be allowlisted <i>or</i> enter the password).</li>
			<li>Experimental version has ConnectQueue support.</li>
		</ul><br>
		<p>
			More info: <a href="https://forum.cfx.re/t/release-smart-allowlist-and-password-protection-script-no-sql-required/1198795" target="_blank">Cfx.re post</a><br>
			Download: <a href="https://github.com/Puntherline/pun_allowlist" target="_blank">Via GitHub</a><br>
			Download (experimental): <a href="https://github.com/Puntherline/pun_allowlist/tree/experimental" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2020-02-28_05-35"]: { // ESX Pun Carwash (v1.0)
		category: "category_fivem",
		title: "ESX Car Wash",
		date: "28 Feb 2020",
		version: "v1.0",
		id: "fivem_pun_carwash_v1.0",
		content: `
		<p>
			There's not much to talk about other than that it allows you to clean your car on ESX servers.
			Nothing fancy, still including it here though.<br><br>

			Features:
		</p>
		<ul>
			<li>Washing your car for a price.</li>
			<li>Price will scale depending on dirtiness of the car.</li>
			<li>You can not move while your car is being cleaned.</li>
			<li>Easy to use config for blips, markers, prices, locations, etc.</li>
			<li>Multi-language support, although only english is available as of right now.</li>
			<li>Depending on what marker you choose, it will change properties by itself so if you use a floating marker you don't have to change coordinates, just switch back and forth.</li>
			<li>If you have enough money in the bank, it will pay using the bank only.</li>
			<li>If you don't have enough money in the bank, it will pay using the rest of the money in the bank, then use cash for the rest.</li>
			<li>If you don't have enough money in total, you can not wash your car.</li>
			<li>Extremely performance-friendly.</li>
		</ul><br>
		<p>
			Screenshot:<br>
			<img class="contentImage" src="/media/fivem/esx_pun_carwash/showcase.jpg"><br><br>

			More info: <a href="https://forum.cfx.re/t/release-esx-puntherlines-car-wash/1039870" target="_blank">Cfx.re post</a><br>
			Download: <a href="https://github.com/Puntherline/esx_pun_carwash" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2020-01-22_21-07"]: { // ID Gun
		category: "category_fivem",
		title: "ID Gun",
		date: "22 Jan 2020",
		version: "v1.0",
		id: "fivem_pun_idgun_v1.0",
		content: `
		<p>
			My surprisingly popular ID Gun script which gives you coordinates, headings and hashes of whatever object, vehicle or
			ped you aim your gun at.<br><br>

			Screenshot:<br>
			<img class="contentImage" src="/media/fivem/pun_idgun/showcase.jpg"><br><br>

			More info: <a href="https://forum.cfx.re/t/id-gun-find-out-object-coords-headings-and-hashes/984257" target="_blank">Cfx.re post</a><br>
			Download: <a href="https://github.com/Puntherline/pun_idgun" target="_blank">Via GitHub</a>
		</p>
		`
	},

	// Website
	["2022-12-06_04-00"]: { // JS Update (v1.2)
		category: "category_website",
		title: "JS Update",
		date: "06 Dec 2022",
		version: "v1.2",
		id: "website_v1.2",
		content: `
		<p>
			The 1st change: Letting JavaScript objects carry all the necessary data, so I won't have to keep editing the index.html file,
			copying loads of unnecessary tags. In simple terms: Cleaner code, easier to create entries for me.<br><br>

			The 2nd change: Added a modal, meaning you can click images now and they will go into a fullscreen preview. Click anywhere
			to close it again. No matter what size the actual image is, it should be scaling properly without distorting.<br><br>

			The 3rd change: More of a fix, but when clicking a link to this website, it will check if a hash is set (the
			<code>[…].io/#target_article</code> part) and then scroll that into view like it is supposed to.<br><br>

			The 4th change: When collapsing one of the categories on the left (e.g. by clicking the "Miscellaneous" button), all articles
			that are in that category will now automatically be hidden to declutter the main page.<br><br>

			The 5th change: When clicking a link which would lead to an article that by default is hidden, it will instead be shown,
			while the rest of the category will still be hidden.<br><br>

			The final change: Addition of the "FiveM" category. Normally I wouldn't mention it, but you might want to check it out!
		</p>
		`
	},
	["2022-08-31_23-49"]: { // Tiny Website Update (v1.1)
		category: "category_website",
		title: "Tiny Website Update",
		date: "31 Aug 2022",
		version: "v1.1",
		id: "website_v1.1",
		content: `
		<p>Just a few adjustments and quality of life changes:</p>
		<ul>
			<li>Added date and version information underneath navbar buttons: All dates and versions in one overview!</li>
			<li>Made the horizontal rules (lines under the headers) a bit dimmer.</li>
			<li>Nudged a the horizontal rules and the buttons around, they fit better now.</li>
			<li>Added some padding to the content, meaning everything including the scrollbar should now fit better.</li>
			<li>Nudged the navbar toggle button for mobile around a bit. I might move it to the left, don't know yet.</li>
			<li>Edited the Website Creation text, I want to try and keep a single-sentence summary above the list.</li>
			<li>Adjusted the size of text on the mobile layout.</li>
		</ul>
		`
	},
	["2022-08-31_19-25"]: { // Website Creation (v1.0)
		category: "category_website",
		title: "Website Creation",
		date: "31 Aug 2022",
		version: "v1.0",
		id: "website_v1.0",
		content: `
		<p>I've done many things, but here's a compact list:</p>
		<ul>
			<li>Added a background image that I took a long time ago.</li>
			<li>Split the page design up into two parts: Navbar (left) and the content (right).</li>
			<li>Created a mobile layout where the navbar is toggleable via a button.</li>
			<li>Set up a media query so that if the screens' aspect ratio is below 10/9, it will switch to the mobile layout.</li>
			<li>Buttons on the navbar can now extend and retract the lists below them, for now they're extended by default.</li>
			<li>Added a button in front of headers which will copy the link to that part of the document when clicked.</li>
			<li>Added a few meta tags to improve looks of embeds, for example in Twitter and Discord.</li>
		</ul>
		`
	},

	// Miscellaneous
	["2023-05-16_16-32"]: { // Infinitris
		category: "category_misc",
		title: "Infinitris",
		date: "16 May 2023",
		version: "v1.0",
		id: "misc_infinitris_v1.0",
		content: `
			<p>
				It's a very simple game, essentially just tetris, but 100% in plain JavaScript with no libraries.
				Oh, and you can't lose at it. Here's the link: <a href="/infinitris/">Infinitris</a>
			</p>
		`
	},
	/*["2023-01-29_20-52"]: { // Graphics Settings Comparer | GSC
		category: "category_misc",
		title: "Graphics Settings Comparer",
		date: "29 Jan 2023",
		version: "v1.0",
		id: "misc_graphics_settings_comparer_v1.0",
		content: `
			<p>
				Comparing what effect different graphics settings have on CPU, GPU, RAM and VRAM usage,
				as well as providing screenshots to compare the looks and see if it's even worth turning
				a specific setting on or off.<br><br>

				I've had this idea a while ago when trying to get decent FPS with good graphics in GTA V.
				I managed to find <a target="_blank" href="">this article</a> by Nvidia which does
				a pretty decent job at showing all the data needed to decide what settings you might want
				to use. Anyways, when playing Flight Sim 2020, I struggle to find similar guides, so that
				is the reason why I now decided to make this tool.<br><br>

				Here's the link: <a href="/graphics-settings-comparer/">Graphics Settings Comparer</a>
			</p>
		`
	},*/
	["2020-12-31_23-21"]: { // RGB to hexadecimal and integer converter
		category: "category_misc",
		title: "LUA: RGB to Hex/Int",
		date: "31 Dec 2020",
		version: "v1.0",
		id: "misc_rgb_to_hex_int",
		content: `
		<p>
			Just a bit of a helper function to convert RGB values to hexadedimal and integer. Example: <code>ConvertRGB({220, 20, 60})</code> will return <code>{"DC143C", 14423100}</code>.<br><br>

			This is very useful when creating Discord embeds which only accept integer colors, not RGB codes.<br><br>

			Download: <a href="https://gist.github.com/Puntherline/9d7f9721dbc8149a4a3a6112ca71a543" target="_blank">Via GitHub</a>
		</p>
		`
	},
	["2017-08-24_02-11"]: { // Custom Cursors
		category: "category_misc",
		title: "Custom Cursors",
		date: "24 Aug 2017",
		version: "v1.0",
		id: "misc_custom_cursors",
		content: `
		<p>
			I've made some custom cursors way back in 2017 so that's what I'm going to date this entry as. Some say that they might
			have a close resemblance to a fairly popular game series, and anything like that is of course purely coincidental... Yeah.<br><br>

			Screenshot:<br>
			<img style="vertical-align: top;" class="contentImage" src="/media/misc/custom_cursors/custom_cursors.gif"><br><br>

			Installation guide + Download: <a href="/media/misc/custom_cursors/Custom Cursors.zip" download>Custom Cursors.zip</a> <span class="smallSubtext">(143 KB)</span>
		</p>
		`
	}
};
// #endregion



/* -------------- FUNCTIONS -------------- */
// #region
function toggleNavbar() { // Toggles navbar visibility
    document.getElementById("navbarContainer").classList.toggle("mobileHidden");
}

function copyLink(event) { // Copies link to specific part of site
	const targetId = event.target.parentElement.id;
	document.location.hash = targetId;
	navigator.clipboard.writeText(document.location.href);
}

function toggleDropdown(event) { // Toggles dropdown in navbar and article visibility

	// Dropdown only
	const ddElement = event.target.parentElement.querySelector(".ddContent");
	ddElement.classList.toggle("ddHidden");
	event.target.classList.toggle("active");

	// Hide or Show articles
	const targetArticleClasses = event.target.parentElement.querySelector("div").id;
	const targetArticles = document.getElementsByClassName(targetArticleClasses);
	var newDisplay = "none";
	if (event.target.classList.contains("active")) newDisplay = null;

	for (i = 0; i < targetArticles.length; i++) targetArticles[i].style.display = newDisplay;
}

function toggleLinkActive(event) { // Switches active link in navbar
	// Remove active from buttons if any are active
	const currentlyActive = document.querySelectorAll(".ddContent a.active");
	for (i = 0; i < currentlyActive.length; i++) {
		currentlyActive[i].classList.remove("active");
	}

	// Get target, if it's <p> or <span> get parent element
	let targetElement = event.target;
	if (targetElement.tagName == "P" || targetElement.tagName == "SPAN") targetElement = event.target.parentElement;

	// Add active class
	targetElement.classList.add("active");
}

function openModal(event) { // Open modal and set image
	document.getElementById("modalContainer").style.display = "flex";
	const modalImageElement = document.querySelector("#modalImage img");
	const imgSrc = event.target.getAttribute("src");
	modalImageElement.setAttribute("src", imgSrc);
}

function closeModal() { // Close modal and set image link to none
	document.getElementById("modalContainer").style.display = "none";
	document.querySelector("#modalImage img").removeAttribute("src");
}

function checkForArticleId() { // Checking if user clicked on a link linking to an article

	// Getting URL
	var hash = window.location.hash;

	// If it's defined
	if (hash != "") {
		var targetArticle = document.getElementById(hash.substring(1));
		if (targetArticle != undefined) {
			if (targetArticle.parentElement.style.display == "none") {
				targetArticle.parentElement.style.display = null;
			}
			targetArticle.scrollIntoView();
		}
	}
}

function addEventListenersForElements() { // Getting elements and adding event listeners

	// Getting important elements
	const navbarToggleButton = document.getElementById("navbarToggle");
	const copyLinkButtons = document.querySelectorAll(".copyLink");
	const ddButtons = document.querySelectorAll(".ddButton");
	const ddContentLinks = document.querySelectorAll(".ddContent a");
	const contentImages = document.querySelectorAll(".contentImage");
	const modalContainerElement = document.getElementById("modalContainer");

	// Adding event listeners
	navbarToggleButton.addEventListener("click", toggleNavbar);
	for (i = 0; i < copyLinkButtons.length; i++) copyLinkButtons[i].addEventListener("click", copyLink);
	for (i = 0; i < ddButtons.length; i++) ddButtons[i].addEventListener("click", toggleDropdown);
	for (i = 0; i < ddContentLinks.length; i++) ddContentLinks[i].addEventListener("click", toggleLinkActive);
	for (i = 0; i < contentImages.length; i++) contentImages[i].addEventListener("click", openModal);
	modalContainerElement.addEventListener("click", closeModal);

	// Check for a selected article ID
	checkForArticleId();
}

function loadWebsiteContent() { // Loading from categories and articles objects
	var navbarList = document.getElementById("navbarCenter");
	var articleList = document.getElementById("contentContainer");
	var hiddenArticles = [];

	// Iterating and creating categories
	for (const [k, v] of Object.entries(categories)) {

		// Dealing with showing/hiding by default
		var buttonClass = "";
		var divClass = "";
		if (v.status == "active") {
			buttonClass = "active";
		} else {
			divClass = "ddHidden";
			hiddenArticles.push(v.id);
		}

		var insert = `
			<div class="ddContainer">
				<button class="ddButton ${buttonClass}">${v.label}</button>
				<div class="ddContent ${divClass}" id="${v.id}">
					<!-- More to be inserted here later -->
				</div>
			</div>
		`;
		navbarList.insertAdjacentHTML("beforeend", insert);
	}

	// Sorting, iterating and creating articles
	Object.keys(articles).sort().forEach(function(v) {

		// Dealing with hiding by default
		var extraStyle = ``;
		if (hiddenArticles.includes(articles[v].category)) extraStyle = `style="display: none;"`;

		// Create the article
		var articleInsert = `
			<div class="${articles[v].category}" ${extraStyle}>
				<h1 id="${articles[v].id}"><img class="copyLink"> ${articles[v].title} <span class="largeSubtext"> | ${articles[v].date} | ${articles[v].version}</span></h1><hr>
				${articles[v].content}
				<div class="contentSpacer"></div>
			</div>
		`;
		articleList.insertAdjacentHTML("afterbegin", articleInsert);

		// Getting navbar category
		var targetCategory = document.getElementById(articles[v].category);

		// If there's an entry already, insert <hr> below too
		var navbarHrInsert = ``;
		if (targetCategory.querySelectorAll("a").length >= 1) {navbarHrInsert = `<hr>`;}

		// Create navbar entry
		var navbarInsert = `
			<a href="#${articles[v].id}"><p>${articles[v].title}</p><span class="smallSubtext">${articles[v].date} | ${articles[v].version}</span></a>
			${navbarHrInsert}
		`;
		document.getElementById(articles[v].category).insertAdjacentHTML("afterbegin", navbarInsert);
	});

	// Going over to the event listener function
	addEventListenersForElements();
}
// #endregion



/* -------------- ON WEBSITE LOAD -------------- */
// #region
window.addEventListener("DOMContentLoaded", () => {
	loadWebsiteContent();
});
// #endregion
