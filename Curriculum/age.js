function calculateAge() {
    var birthDate = new Date("2001-05-01");
    var currentDate = new Date();

    // Calculate age in years
    var difference = currentDate - birthDate;
    var ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    // Display the age on your page
    document.getElementById("age").innerText = ageInYears;
}