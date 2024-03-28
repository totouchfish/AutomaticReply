// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      2024-03-28
// @match        http://localhost:8080
// @match        http://localhost:8080/#/*
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...
  setTimeout(() => {
    $('.el-input__inner').val('123123');
    $('.el-input__inner')[0].dispatchEvent(new Event('input'));
    //$(".send").triggerHandler("click");
    $('.send')[0].dispatchEvent(new MouseEvent('click'));
  }, 2000);
})();
