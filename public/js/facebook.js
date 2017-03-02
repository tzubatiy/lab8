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
 	$("#photo").attr('src',response.picture.data.url);
 	//$.attr('src', "https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/13900228_10201877590937304_7921450944529592797_n.jpg?oh=917892eb73a70da3f3a7ca17d7f5f3fd&oe=59327ABC");
 	
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