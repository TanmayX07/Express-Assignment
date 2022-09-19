// var url = "https://demo2211087.mockable.io/mock";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader("Content-Type", "application/json");
// // xhr.setRequestHeader("Content-Length", "0");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};

// xhr.send();
// main.js

// POST request using fetch()
fetch("https://demo2211087.mockable.io/mock", {
	
	// Adding method type
	method: "POST",
	
	// Adding body or contents to send
	body: JSON.stringify({
		Name: "foo",
		Email: "bar",
		Status: "active"
	}),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));

