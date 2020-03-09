/// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    
    // Retrieving the values of form elements 
	var fname = document.forms["applicationForm"]["firstname"].value;
	var lname = document.forms["applicationForm"]["lastname"].value;
	var gender = document.forms["applicationForm"]["gender"];
	var qualification = document.forms["applicationForm"]["education"];
	var date = document.forms["applicationForm"]["date"].value;
	
	// Defining error variables with a default value    
	var firstnameError = lastnameError = genderError = qualError = dateError =  true;
	
	// Validate name   
    if(fname == "") {
        printError("firstnameError", "First name field can't be blank");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) === false) {
            printError("firstnameError", "Only Alphabets are allowed");
        } else {
            printError("firstnameError", "");
            firstnameError = false;
        }
	}

	// Validate name   
    if(lname == "") {
        printError("lastnameError", "Last name field can't be blank");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) === false) {
            printError("lastnameError", "Only Alphabets are allowed");
        } else {
            printError("lastnameError", "");
            lastnameError = false;
        }
	}

	//Gender Validation	
    var hasSelected = [];
    for(i = 0; i < gender.length; i++)
    {
        if(gender[i].checked)
        {
            hasSelected.push(gender.value)
        }
    }
    if(hasSelected.length == 0){
        printError("genderError", "Please Select at least one of the options.");
    }else{
        printError("genderError", "");
        genderError = false;
	}
	
	//Qualification Validation
	var hasChecked = [];
    for(i = 0; i < qualification.length; i++)
    {
        if(qualification[i].checked)
        {
            hasChecked.push(qualification.value)
        }
    }
    if(hasChecked.length == 0){
        printError("qualError", "Please check at least one of the options.");
    }else{
        printError("qualError", "");
        qualError = false;
	}

	//Date Validation
	if(date == ""){
		printError("dateError", "Date field can't be blank");
	}else{
		// it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
		var optimizedBirthday = date.replace(/-/g, "/");

		//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
		var myBirthday = new Date(optimizedBirthday);

		// set current day on 01:00:00 hours GMT+0100 (CET)
		var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

		// calculate age comparing current date and borthday
		var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

		if(myAge < 18) {
			printError("dateError", "Enter valid date of Birth.");
			
		}else{
			printError("dateError", "");
			dateError = false;
			
		}
	}

	// Prevent the form from being submitted if there are any errors
    if((firstnameError || lastnameError || genderError || qualError || dateError) == true) {
        return false;
     } else {
         // Creating a string from input data for preview
         var dataPreview = "You've entered the following details: \n" +
						   "Username: " + fname + "\n" +
						   "LastName: " + lname + "\n" +
						   "Gender: " + gender.value + "\n" +
						   "Qualification: " + qualification.value + "\n" +
						   "Date Of Birth: " + date ;
         
        // Display input data in a dialog box before submitting the form
        // alert(dataPreview);
    }
};