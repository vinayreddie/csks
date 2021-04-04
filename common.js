var API = 'http://localhost:8013/api/';
var loginAPI = API + '/logincheck';
var forgotPasswordAPI = API + '/changepassword';
var registerDonor = API + '/donorSignup';
var getAllReciever = API + '/getAllReciever';
var getLastLogin = API + '/getLastLogin';

function SetUserName(username){
    sessionStorage.setItem("username", username)
}

function GetUserName(){
    return sessionStorage.getItem("username");
}

function RemoveUserName(){
    sessionStorage.removeItem('username')
}

window.onbeforeunload = function (e) { RemoveUserName(); };