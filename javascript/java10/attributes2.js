//how to change the standard google logo

let logo=document.getElementById("hplogo")
undefined
logo
<img alt=​"Google" height=​"92" id=​"hplogo" src=​"/​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png" srcset=​"/​images/​branding/​googlelogo/​1x/​googlelogo_color_272x92dp.png 1x, /​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png 2x" style=​"padding-top:​109px" width=​"272" onload=​"typeof google==='object'&&google.aft&&google.aft(this)​" data-atf=​"1" data-iml=​"1561965476978">​
logo.getAttribute
ƒ getAttribute() { [native code] }
logo.getAttribute("src")
"/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
logo.setAttribute("srcset","https://www.picsum.photos/200/300?grayscale");
undefined
logo.style.width="300px";
"300px"
logo.style.height="100px";
"100px"
links.length
VM9504:1 Uncaught ReferenceError: links is not defined
    at <anonymous>:1:1
(anonymous) @ VM9504:1
links[0).textContent
VM9553:1 Uncaught SyntaxError: Unexpected token )
let links = document.getElementByTagName
undefined
for( let i = 0; i< links.length; i++){
    console.log(links[i].texContent; }
VM9881:2 Uncaught SyntaxError: missing ) after argument list
for( let i = 0; i< links.length; i++){
    console.log(links[i].textContent; }
VM9919:2 Uncaught SyntaxError: missing ) after argument list
for( let i = 0; i< links.length; i++){
    console.log(links[i].textContent); }
VM9930:1 Uncaught TypeError: Cannot read property 'length' of undefined
    at <anonymous>:1:26
(anonymous) @ VM9930:1
 links = document.getElementByTagName("a")
VM9955:1 Uncaught TypeError: document.getElementByTagName is not a function
    at <anonymous>:1:19
(anonymous) @ VM9955:1
 links = document.getElementByTagName("a")
VM9963:1 Uncaught TypeError: document.getElementByTagName is not a function
    at <anonymous>:1:19
(anonymous) @ VM9963:1
 links = document.getElementsByTagName("a")
HTMLCollection(44) [a, a, a.gb_d, a.gb_d, a.gb_x.gb_dc, a#gb192.gb_c, a#gb1.gb_c, a#gb8.gb_c, a#gb36.gb_c, a#gb78.gb_c, a#gb23.gb_c, a#gb53.gb_c, a#gb49.gb_c, a#gb24.gb_c, a#gb51.gb_c, a#gb31.gb_c, a#gb6.gb_c, a.gb_D.gb_Wf, a#gb25.gb_c, a#gb10.gb_c, a#gb30.gb_c, a#gb461.gb_c, a#gb300.gb_c, a#gb136.gb_c, a#gb357.gb_c, a#gb429.gb_c, a#gb338.gb_c, a.gb_E.gb_Of, a#gb_70.gb_Xd.gb_1.gb_kb, a.lh87ke, a#sbfblt.duf3.aciXEb, a, a.Fx4vi, a.Fx4vi, a#fsettl.Fx4vi, a, a, a, a, a, a#dk2qOd, a.Fx4vi, a.Fx4vi, a.Fx4vi, gb192: a#gb192.gb_c, gb1: a#gb1.gb_c, gb8: a#gb8.gb_c, gb36: a#gb36.gb_c, gb78: a#gb78.gb_c, …]
for( let i = 0; i< links.length; i++){
    console.log(links[i].textContent); }
VM10032:2 About
VM10032:2 Store
VM10032:2 Gmail
VM10032:2 Images
VM10032:2 
VM10032:2 Account
VM10032:2 Search
VM10032:2 Maps
VM10032:2 YouTube
VM10032:2 Play
VM10032:2 Gmail
VM10032:2 Contacts
VM10032:2 Drive
VM10032:2 Calendar
VM10032:2 Translate
VM10032:2 Photos
VM10032:2 Shopping
VM10032:2 More
VM10032:2 Docs
VM10032:2 Books
VM10032:2 Blogger
VM10032:2 Duo
VM10032:2 Hangouts
VM10032:2 Keep
VM10032:2 Jamboard
VM10032:2 Earth
VM10032:2 Collections
VM10032:2 Even more from Google
VM10032:2 Sign in
VM10032:2 Learn more
VM10032:2 Report inappropriate predictions
VM10032:2 Deutsch
VM10032:2 Privacy
VM10032:2 Terms
VM10032:2 Settings
VM10032:2 Search settings
VM10032:2 Advanced search
VM10032:2 Your data in Search
VM10032:2 History
VM10032:2 Search Help
VM10032:2 Send feedback
VM10032:2 Advertising
VM10032:2 Business
VM10032:2   How Search works 
undefined
    let links = document.querySelectorAll("a")
VM10922:1 Uncaught SyntaxError: Identifier 'links' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM10922:1
for(let i = 0; i< links.length; i++){
    console.log(links[i].getAttribute("href"));}
VM11170:2 /intl/en/about/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header
VM11170:2 https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042
VM11170:2 https://mail.google.com/mail/?tab=wm0&ogbl
VM11170:2 https://www.google.de/imghp?hl=en&tab=wi0&ogbl
VM11170:2 https://www.google.de/intl/en/about/products?tab=wh0
VM11170:2 https://myaccount.google.com/?utm_source=OGB&tab=wk0&utm_medium=app
VM11170:2 https://www.google.de/webhp?tab=ww0
VM11170:2 https://maps.google.de/maps?hl=en&tab=wl0
VM11170:2 https://www.youtube.com/?gl=DE&tab=w10
VM11170:2 https://play.google.com/?hl=en&tab=w80
VM11170:2 https://mail.google.com/mail/?tab=wm0
VM11170:2 https://contacts.google.com/?hl=en&tab=wC0
VM11170:2 https://drive.google.com/?tab=wo0
VM11170:2 https://www.google.com/calendar?tab=wc0
VM11170:2 https://translate.google.de/?hl=en&tab=wT0
VM11170:2 https://photos.google.com/?tab=wq0&pageId=none
VM11170:2 https://www.google.de/shopping?hl=en&source=og&tab=wf0
VM11170:2 https://www.google.de/intl/en/about/products?tab=wh0
VM11170:2 https://docs.google.com/document/?usp=docs_alc
VM11170:2 https://books.google.de/bkshp?hl=en&tab=wp0
VM11170:2 https://www.blogger.com/?tab=wj0
VM11170:2 https://duo.google.com/?usp=duo_ald
VM11170:2 https://hangouts.google.com/
VM11170:2 https://keep.google.com/
VM11170:2 https://jamboard.google.com/?usp=jam_ald
VM11170:2 https://earth.google.com/web/
VM11170:2 https://www.google.de/save
VM11170:2 https://www.google.de/intl/en/about/products?tab=wh0
VM11170:2 https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/
VM11170:2 https://support.google.com/websearch/answer/106230?hl=en-DE
VM11170:2 #
VM11170:2 https://www.google.com/setprefs?sig=0_LS4aNHdnZCa6pcNCSJ_HOP3qhuE%3D&hl=de&source=homepage&sa=X&ved=0ahUKEwiXqI_rlpPjAhWJsaQKHWn7DQwQ2ZgBCAs
VM11170:2 https://www.google.com/intl/en_de/policies/privacy/?fg=1
VM11170:2 https://www.google.com/intl/en_de/policies/terms/?fg=1
VM11170:2 https://www.google.com/preferences?hl=en
VM11170:2 https://www.google.com/preferences?hl=en-DE&fg=1
VM11170:2 /advanced_search?hl=en-DE&fg=1
VM11170:2 /history/privacyadvisor/search?utm_source=googlemenu&fg=1
VM11170:2 /history/optout?hl=en-DE&fg=1
VM11170:2 //support.google.com/websearch/?p=ws_results_help&hl=en-DE&fg=1
VM11170:2 #
VM11170:2 https://www.google.com/intl/en_de/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
VM11170:2 https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
VM11170:2 //google.com/search/howsearchworks/?fg=1
undefined
for(let i = 0; i< links.length; i++){
    links[i].setAttribute("href","http://www.bing.com");}
undefined
for(let i = 0; i< links.length; i++){
    links[i].style.backgroundColor="pink";
}
"pink"

