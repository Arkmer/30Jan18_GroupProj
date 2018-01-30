var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function bonusCalc (ipEmployee){
  var lBonus;
  if (ipEmployee.reviewRating === 3){
    lBonus = 4
  } else if (ipEmployee.reviewRating === 4){
    lBonus = 6
  } else {
    lBonus = 10
  };
  if (ipEmployee.length == 4){
    lBonus += 5
  };
  if (ipEmployee.annualSalary > 65000){
    lBonus --
  };
  if (ipEmployee.reviewRating <= 2){
    lBonus = 0
  }
  if (lBonus > 13){
    lBonus = 13
  };
  if (lBonus < 0){
    lBonus = 0

  };
  lBonus = lBonus/100
  //console.log(lBonus)
  return lBonus;
};

function totalBonus (ipPerson){
  var finalBonus = ipPerson.annualSalary * bonusCalc(ipPerson);
  //console.log(ipPerson.annualSalary);
  var output = Math.round(finalBonus)
  return output;
};

function totalCompensation(ipPerson){
  //console.log('totalCompensation');
  var output = parseInt(ipPerson.annualSalary) + totalBonus(ipPerson)
  return output;
};

function PersonCreator(ipName, ipBonusPercentage, ipTotalBonus, ipTotalComp){
  this.name = ipName;
  this.bonusPercentage = ipBonusPercentage;
  this.totalBonus = ipTotalBonus;
  this.totalComp = ipTotalComp;
};

function createPersonArray(ipEmployees){
  var employeePayArray = [];
  for(var i=0; i<ipEmployees.length; i++){
    var newPerson = new PersonCreator(ipEmployees[i].name, bonusCalc(ipEmployees[i]), totalBonus(ipEmployees[i]), totalCompensation(ipEmployees[i]));
    employeePayArray.push(newPerson);
  }
  return employeePayArray;
}

console.log(createPersonArray(employees));

$(document).ready(onReady2);
function onReady2(){
  $('#reveal').on('click', theThingWeDo)
};

function theThingWeDo(){
  var arrayToBreak = createPersonArray(employees);
  for(i=0; i<arrayToBreak.length; i++){
    var onePayResult = arrayToBreak[i];
    var name = onePayResult.name;
    var percentage = onePayResult.bonusPercentage;
    var totalBonus = onePayResult.totalBonus;
    var totalComp = onePayResult.totalComp;

    var paste = name + ': ' + percentage + ' , ' + totalBonus + ' , ' + totalComp
    // $('.appender').append('<p>');
    $('.appender').append('<p>'+paste+'</p>');
    // $('.appender').append('</p>');
  };
};
