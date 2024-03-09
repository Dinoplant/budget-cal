
document.addEventListener("DOMContentLoaded", function () {



  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }



  function roundToHundredth(value) {
    return Number(value.toFixed(2));
  }

  document.getElementById('annualIncome').addEventListener('change', function (eventData) {


    var monthlyBudget = (document.getElementById('annualIncome').value) / 12
    let fedTax = monthlyBudget * .12;
    let stTax = monthlyBudget * .07;
    let socSec = monthlyBudget * 0.062
    let med = monthlyBudget * 0.0145
    let retInv = monthlyBudget * 0.05

    console.log(fedTax + stTax + socSec + med + retInv);
    console.log(monthlyBudget)

    monthlyBudget = roundToHundredth(monthlyBudget - (fedTax + stTax + socSec + med + retInv));



    document.getElementById('adds').addEventListener('change', function (eventData) {

      let taxRet = parseFloat(document.getElementById('taxRet').value) || 0;
      let alimony = parseFloat(document.getElementById('ali').value) || 0;
      let childSup = parseFloat(document.getElementById('childSup').value) || 0;
      let monthGift = parseFloat(document.getElementById('monthGift').value) || 0;
      let otherIn = parseFloat(document.getElementById('otherIn').value) || 0;

      var adds = (taxRet + alimony + childSup + monthGift + otherIn) || 0;

      monthSav.innerText = `$` + adds;
    });

    document.getElementById(`minus`).addEventListener(`change`, function (eventData) {

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
    });

    
    
    console.log(taxRet)
    console.log(monthlyBudget)
    console.log(adds)
    console.log(minus)

// taxRet gives the section and html. fix it

    monthBudget.innerText = "$" + monthlyBudget;
    console.log((adds + monthlyBudget - minus))
    monthBudget.innerText = "$" + (adds + monthlyBudget - minus);

  });










});