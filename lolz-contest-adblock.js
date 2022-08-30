// ==UserScript==
// @name         Lolz Contest AdBlock
// @version      0.4
// @description  Скрывает контент постов с розыгрышами
// @author       InfiniteC0re
// @homepage     https://github.com/InfiniteC0re/TamperMonkey-Scripts
// @downloadURL  https://raw.githubusercontent.com/InfiniteC0re/TamperMonkey-Scripts/main/lolz-contest-adblock.js
// @updateURL    https://raw.githubusercontent.com/InfiniteC0re/TamperMonkey-Scripts/main/lolz-contest-adblock.js
// @match        https://lolz.guru/threads/*
// @match        https://zelenka.guru/threads/*
// @icon         https://lolz.guru/favicon.svg
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let contentBlock = document.querySelector(".messageText.SelectQuoteContainer.baseHtml.ugc");
    let contestBlock = document.querySelector(".contestThreadBlock");
    let pollBlock = document.querySelector(".PollContainer")

    if (contestBlock) {
        contentBlock.remove();
        pollBlock.remove();
    }
})();
