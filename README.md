action.js
=========

Action.js is for easily turning your regular, lame form posts (and soon gets) into ajax calls. It's so easy to use 
inside of `window.onload` or `$(document).ready`:

```
action(form,callback)

```
The callback will be called on at certain points, for now it will look like this

```
var callback = function(msg,form){
		console.log(msg,form)
}
```
It will get a message, the only one currently is `loaded` which is called after clicking submit and the form posts along with the form that was submitted in the case of using multiple forms on a page.

#### What's Next?

If you like the idea let me know and I will continue working on this. Try pulling and opening up index.html and taking a look at the console to see how simple it is!