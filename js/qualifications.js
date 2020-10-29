$(document).ready(function(){

    let screensize = $(window).width();

    if (screensize < 768) {
        $("#navbar").removeClass("d-flex h15");
        $(".btn").addClass("col-12");
    }

    $("#ACCCO").click(() => { swapQualifications(1); });
    $("#CPTFAT").click(() => { swapQualifications(2); });
    $("#FSC").click(() => { swapQualifications(3); });
    $("#RSARSG").click(() => { swapQualifications(4); });
    
});

function swapQualifications(option) {
    
    if (option == 1) {
        $("#ACCCO").addClass(" active");
        $("#CPTFAT").removeClass(" active");
        $("#FSC").removeClass(" active");
        $("#RSARSG").removeClass(" active");

        $("#qualification1").attr("src", "./Images/Cetificates&Qualifications/ACCCO-Page1.png");
        $("#qualification2").attr("src", "./Images/Cetificates&Qualifications/ACCCO-Page2.png");
    }
   else if (option == 2) {
        $("#ACCCO").removeClass(" active");
        $("#CPTFAT").addClass(" active");
        $("#FSC").removeClass(" active");
        $("#RSARSG").removeClass(" active");

        $("#qualification1").attr("src", "./Images/Cetificates&Qualifications/CPT.png");
        $("#qualification2").attr("src", "./Images/Cetificates&Qualifications/FirstAid.png");
    }

   else if (option == 3) {
        $("#ACCCO").removeClass(" active");
        $("#CPTFAT").removeClass(" active");
        $("#FSC").addClass(" active");
        $("#RSARSG").removeClass(" active");

        $("#qualification1").attr("src", "./Images/Cetificates&Qualifications/FoodSafety2.png");
        $("#qualification2").attr("src", "./Images/Cetificates&Qualifications/FoodSafety1.png");
    }

   else {
        $("#ACCCO").removeClass("active");
        $("#CPTFAT").removeClass("active");
        $("#FSC").removeClass("active");
        $("#RSARSG").addClass("active");

        $("#qualification1").attr("src", "./Images/Cetificates&Qualifications/Service-Of-Alcohol.png");
        $("#qualification2").attr("src", "./Images/Cetificates&Qualifications/Service-Of-Gambling.png");
    }

}

