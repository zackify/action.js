"use strict"
var action = function(form,callback){
	var action = form.getAttribute('action')
	var method = form.getAttribute('method')
	var submit = form.querySelector('[type=submit]')
	submit.onclick = function(e){
		e.preventDefault()
		var inputs = form.querySelectorAll('[name]')
		var data = {}
		for(var i=0; i < inputs.length; i++){
			var input = inputs[i]
			data[input.name] = input.value
		}
		var request = new XMLHttpRequest()
		request.addEventListener("load", callback('loaded',form,data), false)
		request.open(method, action, true)
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
		request.send(JSON.stringify(data))
	}
}