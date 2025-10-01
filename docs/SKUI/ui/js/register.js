/*******************************************************************************
 *
 * class Register
 *
 ******************************************************************************/
function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    window.location.href = 'skp:register@' + encodeURIComponent(JSON.stringify({ username: newUsername, email: newEmail, password: newPassword }));
  }
