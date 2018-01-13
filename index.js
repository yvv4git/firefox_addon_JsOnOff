var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
/*function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
*/

var buttons = require('sdk/ui/button/action');
//var tabs = require("sdk/tabs");
var prefs = require("sdk/preferences/service");
var js_state = "javascript.enabled";

const StateJsOn = {
  "label": "JS включен",
  "icon": "./js_blue_32.png",
}

const StateJsOff = {
  "label": "JS выключен",
  "icon": "./js_blue_32_off.png",
}


var button = buttons.ActionButton({
  id: "Js_turn_on_off",
  label: "Вкл/Выкл JS",
  icon: {
    "16": "./js_blue_16.png",
    "32": "./js_blue_32.png",
    "64": "./js_blue_64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  //tabs.open("https://www.mozilla.org/");
  //alert("work");
  console.log("====> Click the button-icon");
  console.log("State: ", prefs.get(js_state)); // прочитать состояние параметра (true - значит js включен)
  
  if (prefs.get(js_state)) {
	prefs.set(js_state, false);
	button.label = "JS выключен";
	button.state(button, StateJsOff);
  } else {
	prefs.set(js_state, true);
	button.label = "JS включен";
	button.state(button, StateJsOn);
  }
  
}



/*
 * 
 * jpm run --binary-args -jsconsole
 * jpm run --binary-args --jsconsole -b /usr/bin/firefox-esr
 * 
 */
