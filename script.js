function signIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  let form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);

  let params = {
    client_id: "", // Replace with your client ID
    redirect_uri: "http://127.0.0.1:5500/profile.html",
    response_type: "token",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read",
    include_granted_scopes: "true",
    state: "pass-through-value",
  };

  for (let p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
  /*
  Sources
    https://www.youtube.com/watch?v=bOd4eFqIg00

https://console.cloud.google.com/apis/credentials?project=nifty-inn-427108-c1

https://developers.google.com/oauthplayground/

https://www.codexworld.com/login-with-google-account-using-javascript/

https://www.youtube.com/watch?v=_6A0b9sQ7bo

https:*/
}
