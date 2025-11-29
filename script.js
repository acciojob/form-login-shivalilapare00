function getFormvalue() {
    //Write your code here
	
    event.preventDefault(); // Stop form from reloading the page

    // Get the form element
    const form = document.getElementById("form1");

    // Retrieve values & trim extra spaces
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();

    // Create full name
    const fullName = fname + " " + lname;

    // Show alert
    alert(fullName);
}



