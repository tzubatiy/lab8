function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

 function statusChangeCallback(response) {
 	if(response.status=== 'connected') {
 	console.log('Successfully logged in with Facebook');
 	FB.api('/me?fields=name,first_name,picture.width(480)', changeUser)
 	}
 }

 function changeUser(response){
 	console.log (response);
 	$("#name").html(response.name);

 	//<img> 

 }
    


// first_name
// :
// "Toma"
// id
// :
// "10202754648063184"
// name
// :
// "Toma Zubatiy"
// picture
// :
// Object///