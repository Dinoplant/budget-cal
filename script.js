
document.addEventListener("DOMContentLoaded", function () {


  function roundToHundredth(value) {
    return Number(value.toFixed(2));
  }
  document.body.addEventListener("click", function (evt) {
    console.dir(this);

    var monthlyBudget = 0;


    monthlyBudget = (document.getElementById('annualIncome').value) / 12;

    let fedTax = monthlyBudget * .12;
    let stTax = monthlyBudget * .07;
    let socSec = monthlyBudget * 0.062;
    let stDis = monthlyBudget * 0.01;
    let med = monthlyBudget * 0.0145;
    let retInv = monthlyBudget * 0.05;

    monthlyBudget = roundToHundredth(monthlyBudget - (fedTax + stTax + socSec + med + retInv + stDis));


    let taxRet = parseFloat(document.getElementById('taxRet').value) || 0;
    let alimony = parseFloat(document.getElementById('ali').value) || 0;
    let childSup = parseFloat(document.getElementById('childSup').value) || 0;
    let monthGift = parseFloat(document.getElementById('monthGift').value) || 0;
    let otherIn = parseFloat(document.getElementById('otherIn').value) || 0;

    var adds = (taxRet + alimony + childSup + monthGift + otherIn) || 0;
    monthSav.innerText = `$` + adds;


    let saving = parseFloat(document.getElementById('saving').value) || 0;
    let stuLoan = parseFloat(document.getElementById('stuLoan').value) || 0;
    let medIns = parseFloat(document.getElementById('medIns').value) || 0;
    let ulities = parseFloat(document.getElementById('ulities').value) || 0;
    let housing = parseFloat(document.getElementById('housing').value) || 0;
    let food = parseFloat(document.getElementById('food').value) || 0;
    let clothing = parseFloat(document.getElementById('clothing').value) || 0;
    let media = parseFloat(document.getElementById('media').value) || 0;
    let entertain = parseFloat(document.getElementById('entertain').value) || 0;
    let transPor = parseFloat(document.getElementById('transPor').value) || 0;
    let emergency = parseFloat(document.getElementById('emergency').value) || 0;
    let otherEx = parseFloat(document.getElementById('otherEx').value) || 0;

    var minus = (saving + stuLoan + medIns + ulities + housing + food + clothing + media + entertain + transPor + emergency + otherEx) || 0;

    monthExp.innerText = `$` + minus;



    monthBudget.innerText = "$" + (roundToHundredth(adds + monthlyBudget - minus));
    console.log(`add` + adds)
    console.log(`minus` + minus)
    console.log(`monthly` + (adds + monthlyBudget - minus))
  });

});