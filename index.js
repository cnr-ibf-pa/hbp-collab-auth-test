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

  const authorization = client.getToken();
  console.log(authorization)
  authorization.then((session) => {
    var token = session.access_token;
  }); 
  var header = {headers: {'Authorization': 'Bearer ' + token}};
  console.log(header);
  document.getElementById().innerHTML = token
  return authorization;
}

init();
