// this is login page js
// import java.sql.*;  cannot use this outside
// import java.math.*;

var request;
function sendInfo()
{
  var account = document.getElementById("account").value;
  var email =
  document.getElementById("email").value;
  var password =
  document.getElementById("password").value;
  var confirm =
  document.getElementById("confirm").value;
  var username = document.getElementById("username").value;
  // var password2 =document.vinform.password2.value;
  // var name =document.vinform.name.value;
  // var url="login.jsp?val="+account+ "&email="+ "&password1="+ "&password2="+ "&name=";

  // testing url
  console.log("account: "+account);
  var url="login.jsp?account="+account+ "&email="+email+ "&password="+password+ "&username="+username;


  //check if password1 == password2?
  var n = password.localeCompare(confirm);
  // console.log("-------hello here-----------")

  if(n !==0)
  {
    alert("PLEASE INPUT THE SAME PASSWORD!");
    return;
  }


  if(window.XMLHttpRequest) {
    request=new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    request=new ActiveXObject("Microsoft.XMLHTTP");
  }

  try {
    request.onreadystatechange=getInfo;
    request.open("GET",url,true);
    request.send();
    // console.log("account: " + account);
  } catch (e) {alert("Unale to connect to server");}
}

function getInfo(){
  if(request.readyState==4){
    var val=request.responseText;
    document.getElementById('amit').innerHTML=val;
    // alert(val);
  }
}
