function doGet(e) {

var sheet = SpreadsheetApp.getActiveSpreadsheet();
var usersSheet = sheet.getSheetByName("USERS");

var action = e.parameter.action;

if(action == "login"){

var username = e.parameter.username;
var password = e.parameter.password;

var data = usersSheet.getDataRange().getValues();

for(var i=1; i<data.length; i++){

var user = data[i][1];
var pass = data[i][2];

if(user == username && pass == password){

return ContentService.createTextOutput("success");

}

}

return ContentService.createTextOutput("failed");

}

return ContentService.createTextOutput("no action");

}
