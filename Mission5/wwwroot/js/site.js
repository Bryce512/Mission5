$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let hours = parseFloat($("#hours").val()); // get num hours from form
        let rate = 40; // Hourly rate

        // check input is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours (greater than 0).");
            $("#total").val(""); // Clear the old output if exists
        } else {
            let total = hours * rate;
            $("#total").val(total.toFixed(2)); // Display total 
        }
    });
});
