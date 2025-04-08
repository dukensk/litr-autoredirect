// ==UserScript==
// @name         Listen Tracker Autoredirect
// @namespace    litr-autoredirect
// @version      1.00
// @description  Automatic instant redirect, instead of 10-second waiting on the Litr.CC website
// @author       Duke
// @match        https://litr.cc/t/nr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=litr.cc
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const targetText = 'Перейдите по ссылке, если вас не перенаправило в течении нескольких секунд';
    const link = [...document.querySelectorAll('a')].find(
        el => el.textContent.trim() === targetText
    );

    if (link) {
        window.location.replace(link.href);
}
})();