"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// ACCORDION
_toConsumableArray(document.querySelectorAll('.acc_head')).map(function (head) {
  head.onclick = function () {
    this.nextElementSibling.classList.toggle("active");
  };
}); // const heads = document.querySelectorAll('.acc_head');
// for(let i = 0; i < heads.length; i++)
// {
//     heads[i].onclick = function() { this.nextElementSibling.classList.toggle("active") }
// }
// END OF ACCORDION


_toConsumableArray(document.querySelectorAll('.left_menu li')).forEach(function (li, i) {
  li.onclick = function () {
    //remove active from previous li
    document.querySelector('.left_menu li.active').classList.remove("active"); //add active to new li

    this.classList.add("active"); //remove active from previous info_div

    document.querySelector('.info_div.active').classList.remove("active");
    var id = this.getAttribute("data-id");
    var infoDiv = document.querySelector(".info_div[data-id=\"".concat(id, "\"]"));
    infoDiv.classList.add("active"); //add active to new info_div
  };
});