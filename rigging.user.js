// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-02-09
// @description  try to take over the world!
// @author       You
// @match        https://highschool.si.com/oregon/2024/02/05/vote-who-should-be-sblives-wafd-bank-oregon-boys-basketball-athlete-of-the-week-2-5-2024*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @downloadURL  https://github.com/Coder2195Text/try-me-noobs/raw/main/rigging.user.js
// @updateURL    https://github.com/Coder2195Text/try-me-noobs/raw/main/rigging.user.js
// @grant        GM_notification
// ==/UserScript==

window.onload = (async function() {
    'use strict';
     await new Promise(resolve => setTimeout(resolve, Math.random()*2+1500));
    document.getElementById("PDI_answer59610773").click();
 await new Promise(resolve => setTimeout(resolve, Math.random()*1000+500));
document.getElementById("pd-vote-button13311823").click();
 await new Promise(resolve => setTimeout(resolve, Math.random()*3000+2000));
    if (document.getElementById("question-top-13311823")?.innerText.includes("counted")){
        await new Promise(resolve => setTimeout(resolve, 60000));
    }
window.location.reload();

})();
