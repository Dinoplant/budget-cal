document.addEventListener("DOMContentLoaded", function () {



      function roundToHundredth(value) {
        return Number(value.toFixed(2));
      }
      
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
        monthlyBudget = roundToHundredth(monthlyBudget - (fedTax+stTax+socSec+med+retInv));



        monthBudget.innerText = "$" + monthlyBudget;


    });


    document.getElementById('adds').addEventListener('change', function (eventData) {



        let taxRet = (document.getElementById('taxRet').value)

        let alimony = (document.getElementById('ali').value)

        let childSup = (document.getElementById('childSup').value)

        let monthGift = (document.getElementById('monthGift').value)

        let other = (document.getElementById('other').value)

// didn't have enoguh time to fix, sry.


        let adds = (taxRet+alimony+childSup+monthGift+other)-parseInt(monthBudget.innerText);

console.log(adds)



    });







});