/*******************************************************************************
 *
 * class Login
 *
 ******************************************************************************/

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    window.location.href = 'skp:login@' + encodeURIComponent(JSON.stringify({ username: username, password: password }));
  }

