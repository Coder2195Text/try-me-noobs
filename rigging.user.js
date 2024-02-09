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
// @grant        none
// ==/UserScript==

window.onload = (async function() {
    'use strict';
     await new Promise(resolve => setTimeout(resolve, 3000));
    document.getElementById("PDI_answer59610773").click();
 await new Promise(resolve => setTimeout(resolve, 300));
document.getElementById("pd-vote-button13311823").click();
 await new Promise(resolve => setTimeout(resolve, 1000));
window.location.reload();

})();
