let client = new jso.JSO({
	providerID: "HBP",
	client_id: "6e90bf62-0f4e-4839-af1d-7a6948f15d07",
	redirect_uri: "https://lbologna.github.io/hbp-collab-auth-test/", // The URL where you is redirected back, and where you perform run the callback() function.
	authorization: "https://services.humanbrainproject.eu/oidc/authorize",
})


function init() {
  try {
    client.callback();
  } catch (e) {
    console.warn('Issue decoding the token');
  }

const USER_API = 'https://services.humanbrainproject.eu/idm/v1/api/user/me';
var authorization = client.getToken();
console.log(authorization)
authorization.then((session) => {
var header = {headers: {Authorization: 'Bearer ' + session.access_token}};
document.getElementById("hbp-token").innerHTML = session.access_token;
console.log(header);
//$.get(USER_API);
//$.get(USER_API, header);
$.getJSON(USER_API)
    .then(function (response) {
       resolve(response.data);
       console.log(response.data);
 }); 
  
 
 }); 
	 return authorization;
}
		   

init();
