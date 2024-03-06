document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('annualIncome').addEventListener('change', function (eventData) {



        // kinda broken i think, but u get the idea.


        let monthlyBudget = (document.getElementById('annualIncome').value)/12

        let fedTax = monthlyBudget*.12;

        let stTax = monthlyBudget*.07;

        let socSec = monthlyBudget*0.062

        let med = monthlyBudget*0.0145

        let retInv = monthlyBudget*0.05

        console.log(fedTax+stTax+socSec+med+retInv);

        console.log(monthlyBudget)
        monthlyBudget = monthlyBudget - (fedTax+stTax+socSec+med+retInv);




        monthBudget.innerText = "$" + monthlyBudget;


    });


});