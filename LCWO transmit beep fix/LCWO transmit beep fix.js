// ==UserScript==
// @name         LCWO transmit beep fix
// @description  Fix for the "An AudioContext was prevented from starting automatically" issue.
// @namespace    https://greasyfork.org/en/users/697139-labuwx
// @version      0.1
// @author       labuwx
// @match        https://lcwo.net/transmit
// @match        https://lcwo.net/*/transmit
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var old_down_func = down;

    down = (function() {
        audioCtx.resume();
        down = old_down_func;
        down();
    });
})();
