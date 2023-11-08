fetch('https://raw.githubusercontent.com/eylulberil/encoded_key/main/keys.json')
  .then(response => response.json())
  .then(myObj => {
	encrypted_key = myObj[0];
	console.log(encrypted_key);
	
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.log('Error:', error);
  });

$( document ).ready(function() {



  
});


$(document).keydown(function(e) {
	var key = e.keyCode;
	
		switch(key) {
			case 13:
				console.log("13. button");
				break;
			case 87:
				break;
			case 38:
				break;
		}
	console.log(key);
});


$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
});
