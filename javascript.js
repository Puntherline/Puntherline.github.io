var categories = { fivem: { label: "FiveM", status: "active", id: "category_fivem" }, thisWebsite: { label: "Website", status: "active", id: "category_website" }, misc: { label: "Miscellaneous", status: "active", id: "category_misc" } }; var articles = { ["2022-11-17_07-08"]: { category: "category_fivem", title: "Resource Starter", date: "17 Nov 2022", version: "v1.0", id: "fivem_pun_resourcestarter_v1.0", content: ` <p> This is a resource I haven't actually released on the Cfx.re forums. It should help to mitigate startup lag or even crashes on servers that are either running hardware from 2 decades ago or rented from Zap hosting.<br><br> The main feature that it's got is allowing you to place <code>wait [ms]</code> lines inside your server.cfg file - Or rather the replacement that this resource comes with. For more detailed information, go to the download link.<br><br> Download: <a href="https://github.com/Puntherline/pun_resourcestarter" target="_blank">Via GitHub</a> </p> ` }, ["2021-04-12_19-42"]: { category: "category_fivem", title: "Docs Dark Mode", date: "12 Apr 2021", version: "v1.0", id: "fivem_docs_dark_mode_v1.0", content: ` <p> Not directly related to FiveM itself, but the documentation (<a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a>) and the native reference (<a href="https://docs.fivem.net/natives/" target="_blank">docs.fivem.net/natives</a>): Adding a dark mode so that your eyes may finally rest while looking up documentation.<br><br> Installation in Chrome and Opera GX: </p> <ul> <li>Go to the <a href="https://chrome.google.com/webstore/category/extensions" target="_blank">Chrome Web Store</a> and download the extension called <a href="https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld" target="_blank">User JavaScript and CSS</a>.</li> <li>Open <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">this link</a> in a new tab and copy all of the code it has.</li> <li>Go to <a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a>, click the User JavaScript and CSS extension icon, then "Add new".</li> <li>At the top URL field, remove the <code>docs/</code> part. This is so that it also works on the "natives" page.</li> <li>Paste the CSS code you copied earlier into the right half of the page.</li> <li>Hover over "Options" and make sure that the "Enabled" box is ticked.</li> <li>Click "Save", close the tab and reload the FiveM Docs page. It should now be in dark mode.</li> </ul><br> <p> Installation in Firefox: </p> <ul> <li>Go to the <a href="https://addons.mozilla.org/en-US/firefox/" target="_blank">Mozila Add-On Browser</a> and download the extension called <a href="https://addons.mozilla.org/en-US/firefox/addon/styl-us/" target="_blank">Stylus</a>.</li> <li>Open <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">this link</a> in a new tab and copy all of the code it has.</li> <li>Go to <a href="https://docs.fivem.net/docs/" target="_blank">docs.fivem.net/docs</a> and click the Stylus extension icon.</li> <li>Under "Write this style for:" click the "docs" part of the full URL it shows you.</li> <li>Paste the CSS code you copied earlier into the code window.</li> <li>At the bottom of the page, make sure that <code>URLs on the domain</code> is selected, and that the URL is <code>docs.fivem.net</code>.</li> <li>Click "Save" in the top left, close the tab and the FiveM Docs should now be in dark mode.</li> </ul><br> <p> Screenshot:<br> <img class="contentImage" src="/media/fivem/docs_dark_mode/showcase.jpg"><br><br> More info: <a href="https://forum.cfx.re/t/fivem-docs-native-reference-dark-mode/2627301" target="_blank">Cfx.re post</a><br> Get: <a href="/media/fivem/docs_dark_mode/stylesheet.css" target="_blank">Open CSS code file</a> </p> ` }, ["2021-03-05_00-06"]: { category: "category_fivem", title: "Clothing File Renamer", date: "05 Mar 2021", version: "v1.0", id: "fivem_clothing_file_renamer_v1.0", content: ` <p> This batch script allows you to rename clothing files in bulk when creating FiveM streamable resources.<br><br> You can find an explanation as for how to use it on the Cfx.re forums.<br><br> More info: <a href="https://forum.cfx.re/t/batch-clothing-file-renamer-thing/2339674" target="_blank">Cfx.re post</a><br> Download: <a href="https://github.com/Puntherline/fivem_clothing_renamer" target="_blank">Via GitHub</a> </p> ` }, ["2021-02-05_19-09"]: { category: "category_fivem", title: "Player Identifier", date: "05 Feb 2021", version: "v1.0", id: "fivem_player_identifier_v1.0", content: ` <p> This is a resource for developers only because it's bare-bones.<br><br> It checks your database (via its own table) if any identifiers that FiveM provides match to an account that's already banned on your server. The identifiers it checks are steam, license, xbox live app, xbox live account, discord, FiveM account, FiveM tokens and also resource KVP's.<br><br> Important function however, like banning and unbanning players, are not included, hence why it's a resource for devs.<br><br> More info and download: <a href="https://github.com/Puntherline/pun_identify_players" target="_blank">Via GitHub</a> </p> ` }, ["2020-05-08_20-40"]: { category: "category_fivem", title: "Smart Allowlist", date: "08 May 2020", version: "v1.0", id: "fivem_pun_allowlist_v1.0", content: ` <p> I admit, it's overly complicated, but it works!<br><br> Features: </p> <ul> <li>Standalone, meaning no SQL required.</li> <li>Easy to configure (add people to allowlist, restart script, done).</li> <li>Allowlist only mode (only people on the allowlist are able to join).</li> <li>Password only mode (you have to enter the password).</li> <li>Allowlist + Password mode (you have to be allowlisted <i>and</i> enter the password).</li> <li>Smart mode (either be allowlisted <i>or</i> enter the password).</li> <li>Experimental version has ConnectQueue support.</li> </ul><br> <p> More info: <a href="https://forum.cfx.re/t/release-smart-allowlist-and-password-protection-script-no-sql-required/1198795" target="_blank">Cfx.re post</a><br> Download: <a href="https://github.com/Puntherline/pun_allowlist" target="_blank">Via GitHub</a><br> Download (experimental): <a href="https://github.com/Puntherline/pun_allowlist/tree/experimental" target="_blank">Via GitHub</a> </p> ` }, ["2020-02-28_05-35"]: { category: "category_fivem", title: "ESX Car Wash", date: "28 Feb 2020", version: "v1.0", id: "fivem_pun_carwash_v1.0", content: ` <p> There's not much to talk about other than that it allows you to clean your car on ESX servers. Nothing fancy, still including it here though.<br><br> Features: </p> <ul> <li>Washing your car for a price.</li> <li>Price will scale depending on dirtiness of the car.</li> <li>You can not move while your car is being cleaned.</li> <li>Easy to use config for blips, markers, prices, locations, etc.</li> <li>Multi-language support, although only english is available as of right now.</li> <li>Depending on what marker you choose, it will change properties by itself so if you use a floating marker you don't have to change coordinates, just switch back and forth.</li> <li>If you have enough money in the bank, it will pay using the bank only.</li> <li>If you don't have enough money in the bank, it will pay using the rest of the money in the bank, then use cash for the rest.</li> <li>If you don't have enough money in total, you can not wash your car.</li> <li>Extremely performance-friendly.</li> </ul><br> <p> Screenshot:<br> <img class="contentImage" src="/media/fivem/esx_pun_carwash/showcase.jpg"><br><br> More info: <a href="https://forum.cfx.re/t/release-esx-puntherlines-car-wash/1039870" target="_blank">Cfx.re post</a><br> Download: <a href="https://github.com/Puntherline/esx_pun_carwash" target="_blank">Via GitHub</a> </p> ` }, ["2020-01-22_21-07"]: { category: "category_fivem", title: "ID Gun", date: "22 Jan 2020", version: "v1.0", id: "fivem_pun_idgun_v1.0", content: ` <p> My surprisingly popular ID Gun script which gives you coordinates, headings and hashes of whatever object, vehicle or ped you aim your gun at.<br><br> Screenshot:<br> <img class="contentImage" src="/media/fivem/pun_idgun/showcase.jpg"><br><br> More info: <a href="https://forum.cfx.re/t/id-gun-find-out-object-coords-headings-and-hashes/984257" target="_blank">Cfx.re post</a><br> Download: <a href="https://github.com/Puntherline/pun_idgun" target="_blank">Via GitHub</a> </p> ` }, ["2022-12-06_04-00"]: { category: "category_website", title: "JS Update", date: "06 Dec 2022", version: "v1.2", id: "website_v1.2", content: ` <p> The 1st change: Letting JavaScript objects carry all the necessary data, so I won't have to keep editing the index.html file, copying loads of unnecessary tags. In simple terms: Cleaner code, easier to create entries for me.<br><br> The 2nd change: Added a modal, meaning you can click images now and they will go into a fullscreen preview. Click anywhere to close it again. No matter what size the actual image is, it should be scaling properly without distorting.<br><br> The 3rd change: More of a fix, but when clicking a link to this website, it will check if a hash is set (the <code>[…].io/#target_article</code> part) and then scroll that into view like it is supposed to.<br><br> The 4th change: When collapsing one of the categories on the left (e.g. by clicking the "Miscellaneous" button), all articles that are in that category will now automatically be hidden to declutter the main page.<br><br> The 5th change: When clicking a link which would lead to an article that by default is hidden, it will instead be shown, while the rest of the category will still be hidden.<br><br> The final change: Addition of the "FiveM" category. Normally I wouldn't mention it, but you might want to check it out! </p> ` }, ["2022-08-31_23-49"]: { category: "category_website", title: "Tiny Website Update", date: "31 Aug 2022", version: "v1.1", id: "website_v1.1", content: ` <p>Just a few adjustments and quality of life changes:</p> <ul> <li>Added date and version information underneath navbar buttons: All dates and versions in one overview!</li> <li>Made the horizontal rules (lines under the headers) a bit dimmer.</li> <li>Nudged a the horizontal rules and the buttons around, they fit better now.</li> <li>Added some padding to the content, meaning everything including the scrollbar should now fit better.</li> <li>Nudged the navbar toggle button for mobile around a bit. I might move it to the left, don't know yet.</li> <li>Edited the Website Creation text, I want to try and keep a single-sentence summary above the list.</li> <li>Adjusted the size of text on the mobile layout.</li> </ul> ` }, ["2022-08-31_19-25"]: { category: "category_website", title: "Website Creation", date: "31 Aug 2022", version: "v1.0", id: "website_v1.0", content: ` <p>I've done many things, but here's a compact list:</p> <ul> <li>Added a background image that I took a long time ago.</li> <li>Split the page design up into two parts: Navbar (left) and the content (right).</li> <li>Created a mobile layout where the navbar is toggleable via a button.</li> <li>Set up a media query so that if the screens' aspect ratio is below 10/9, it will switch to the mobile layout.</li> <li>Buttons on the navbar can now extend and retract the lists below them, for now they're extended by default.</li> <li>Added a button in front of headers which will copy the link to that part of the document when clicked.</li> <li>Added a few meta tags to improve looks of embeds, for example in Twitter and Discord.</li> </ul> ` }, ["2020-12-31_23-21"]: { category: "category_misc", title: "LUA: RGB to Hex/Int", date: "31 Dec 2020", version: "v1.0", id: "misc_rgb_to_hex_int", content: ` <p> Just a bit of a helper function to convert RGB values to hexadedimal and integer. Example: <code>ConvertRGB({220, 20, 60})</code> will return <code>{"DC143C", 14423100}</code>.<br><br> This is very useful when creating Discord embeds which only accept integer colors, not RGB codes.<br><br> Download: <a href="https://gist.github.com/Puntherline/9d7f9721dbc8149a4a3a6112ca71a543" target="_blank">Via GitHub</a> </p> ` }, ["2017-08-24_02-11"]: { category: "category_misc", title: "Custom Cursors", date: "24 Aug 2017", version: "v1.0", id: "misc_custom_cursors", content: ` <p> I've made some custom cursors way back in 2017 so that's what I'm going to date this entry as. Some say that they might have a close resemblance to a fairly popular game series, and anything like that is of course purely coincidental... Yeah.<br><br> Screenshot:<br> <img style="image-rendering: pixelated;" class="contentImage" src="/media/misc/custom_cursors/custom_cursors.gif"><br><br> Installation guide + Download: <a href="/media/misc/custom_cursors/Custom Cursors.zip" download>Custom Cursors.zip</a> <span class="smallSubtext">(143 KB)</span> </p> ` } }; function toggleNavbar() { document.getElementById("navbarContainer").classList.toggle("hidden"); } function copyLink(event) { const targetId = event.target.parentElement.id; document.location.hash = targetId; navigator.clipboard.writeText(document.location.href); } function toggleDropdown(event) { const ddElement = event.target.parentElement.querySelector(".ddContent"); ddElement.classList.toggle("ddHidden"); event.target.classList.toggle("active"); const targetArticleClasses = event.target.parentElement.querySelector("div").id; const targetArticles = document.getElementsByClassName(targetArticleClasses); var newDisplay = "none"; if (event.target.classList.contains("active")) newDisplay = null; for (i = 0; i < targetArticles.length; i++) targetArticles[i].style.display = newDisplay; } function toggleLinkActive(event) { const currentlyActive = document.querySelectorAll(".ddContent a.active"); for (i = 0; i < currentlyActive.length; i++) { currentlyActive[i].classList.remove("active"); } let targetElement = event.target; if (targetElement.tagName == "P" || targetElement.tagName == "SPAN") targetElement = event.target.parentElement; targetElement.classList.add("active"); } function openModal(event) { document.getElementById("modalContainer").style.display = "flex"; const modalImageElement = document.querySelector("#modalImage img"); const imgSrc = event.target.getAttribute("src"); const customStyle = event.target.getAttribute("style"); modalImageElement.setAttribute("src", imgSrc); modalImageElement.setAttribute("style", customStyle); } function closeModal() { document.getElementById("modalContainer").style.display = "none"; document.querySelector("#modalImage img").removeAttribute("src"); document.querySelector("#modalImage img").removeAttribute("style"); } function checkForArticleId() { const hash = window.location.hash; window.location.hash = ""; window.location.hash = hash; } function addEventListenersForElements() { const navbarToggleButton = document.getElementById("navbarToggle"); const copyLinkButtons = document.querySelectorAll(".copyLink"); const ddButtons = document.querySelectorAll(".ddButton"); const ddContentLinks = document.querySelectorAll(".ddContent a"); const contentImages = document.querySelectorAll(".contentImage"); const modalContainerElement = document.getElementById("modalContainer"); navbarToggleButton.addEventListener("click", toggleNavbar); for (i = 0; i < copyLinkButtons.length; i++) copyLinkButtons[i].addEventListener("click", copyLink); for (i = 0; i < ddButtons.length; i++) ddButtons[i].addEventListener("click", toggleDropdown); for (i = 0; i < ddContentLinks.length; i++) ddContentLinks[i].addEventListener("click", toggleLinkActive); for (i = 0; i < contentImages.length; i++) contentImages[i].addEventListener("click", openModal); modalContainerElement.addEventListener("click", closeModal); checkForArticleId(); } function loadWebsiteContent() { var navbarList = document.getElementById("navbarCenter"); var articleList = document.getElementById("contentContainer"); var hiddenArticles = []; for (const [k, v] of Object.entries(categories)) { var buttonClass = ""; var divClass = ""; if (v.status == "active") { buttonClass = "active"; } else { divClass = "ddHidden"; hiddenArticles.push(v.id); } var insert = ` <div class="ddContainer"> <button class="ddButton ${buttonClass}">${v.label}</button> <div class="ddContent ${divClass}" id="${v.id}"> <!-- More to be inserted here later --> </div> </div> `; navbarList.insertAdjacentHTML("beforeend", insert); } Object.keys(articles).sort().forEach(function(v) { var extraStyle = ``; if (hiddenArticles.includes(articles[v].category)) extraStyle = `style="display: none;"`; var articleInsert = ` <div class="${articles[v].category}" ${extraStyle}> <h1 id="${articles[v].id}"><img class="copyLink"> ${articles[v].title} <span class="largeSubtext"> | ${articles[v].date} | ${articles[v].version}</span></h1><hr> ${articles[v].content} <div class="contentSpacer"></div> </div> `; articleList.insertAdjacentHTML("afterbegin", articleInsert); var targetCategory = document.getElementById(articles[v].category); var navbarHrInsert = ``; if (targetCategory.querySelectorAll("a").length >= 1) {navbarHrInsert = `<hr>`;} var navbarInsert = ` <a href="#${articles[v].id}"><p>${articles[v].title}</p><span class="smallSubtext">${articles[v].date} | ${articles[v].version}</span></a> ${navbarHrInsert} `; document.getElementById(articles[v].category).insertAdjacentHTML("afterbegin", navbarInsert); }); addEventListenersForElements(); } window.addEventListener("DOMContentLoaded", () => { loadWebsiteContent(); });
