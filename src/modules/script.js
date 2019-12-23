google.charts.load('current', {'packages':['corechart']});
import table from './createTables';
var newArray =[];
newArray.push(new Phone("Имя", "Пол", "Коэффициент", "Адаптация", "Девианта"));

function disp(coefficient){
    return (2 * Math.cos(coefficient) / (Math.sqrt(coefficient) * Math.sqrt(coefficient + 1)) + 0.1).toFixed(5)
}

function mat(coefficient){
    return ((Math.log(coefficient)/2) * Math.sin(coefficient) + 10).toFixed(5)
}

function Phone(name,company,gender,dispersia,math){
    this.name = ko.observable(name);
    this.company = ko.observable(company);
    this.gender = ko.observable(gender);
    this.dispersia = ko.observable(dispersia);
    this.math= ko.observable(math);
}

var viewModel ={
    phones:  ko.observableArray(newArray),
    nameForAdd: ko.observable(""),
    dispersiaForAdd: ko.observable(""),
    nameForDelete: ko.observable(""),
    companyForAdd: ko.observableArray(['Мужской', 'Женский']),
    colorForText: ko.observable(""),
    colorForCells: ko.observable(""),
    colorForInCells: ko.observable("")
};


window.onload = function(){
  let div = document.getElementById("nado");
  div.innerHTML = '<table id = "fack" data-bind = "foreach: phones"><table>';
  let tr = document.createElement('tr');
  for(let i=0; i< 5; i++ ){
      let data = document.createElement('td');
       if(i==0){
         data.innerHTML = "<input  disabled data-bind='textInput: name'>"
       }
       else if(i==1){
         data.innerHTML = "<input disabled = 'true' data-bind='textInput: company'>"
       }
       else if(i==2){
         data.innerHTML = "<input disabled = 'true' data-bind='textInput: gender'>"
       }
       else if(i==3){
         data.innerHTML = "<input disabled = 'true' data-bind='textInput: dispersia'>"
       }
       else if(i==4){
         data.innerHTML = "<input disabled = 'true' data-bind='textInput: math'>"
       }
       data.setAttribute('class', 'mystyle');
       tr.appendChild(data);
  }
  document.getElementById("fack").appendChild(tr);
  ko.applyBindings(viewModel);
  drawChart();
}


function drawChart() {
    let man = 0;
    let woman = 0;
    for(let i = 0; i < viewModel.phones().length; i++){
        if(viewModel.phones()[i].company() == "Мужской"){
          man++
        }
        else if (viewModel.phones()[i].company() == "Женский"){
          woman++;
        }
    }
        var data = google.visualization.arrayToDataTable([
          ['Test', '%'],
          ['М',    man],
          ['Ж',    woman],
        ]);
        var options = {
          title: 'Cотношение мужчин и женщин в исследовании',
          sliceVisibilityThreshold: .2
          };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
  }

viewModel.phones.subscribe(function(){
  if(viewModel.phones().length == 1){
      document.getElementById("delete").setAttribute("disabled", "true");
  }
  document.getElementById("delete").removeAttribute("disabled");
  drawChart();
  viewModel.nameForAdd("");
  viewModel.dispersiaForAdd("");
})

$("#delete").click(function(){
  if(viewModel.phones().length > 1){
  for(let i = 1; i<viewModel.phones().length;i++){
    if(viewModel.phones()[i].name() == viewModel.nameForDelete()){
      viewModel.phones.splice(i,1);
      document.getElementById("delete-input").value="";
      return;
    }
  }
}
  alert("Такого человека нет!");
});

viewModel.nameForAdd.subscribe(function(){
    if(viewModel.nameForAdd() != "" && viewModel.dispersiaForAdd() != ""  ){
       document.getElementById("add").removeAttribute("disabled");
    }else{
      document.getElementById("add").setAttribute("disabled", "true");
    }
});


$("#add").click(function(){
  let options = document.getElementsByClassName('options-for-add');
  for(let i = 0; i < options.length; i++){
    options[i].value = "";
  }
  viewModel.phones.push(new Phone(viewModel.nameForAdd(),
                                   $("#select-gender option:selected").text(),
                                   viewModel.dispersiaForAdd(),
                                   disp(viewModel.dispersiaForAdd()),
                                   mat(viewModel.dispersiaForAdd())));
   table.changeColorText('td > input', viewModel.colorForText());
   table.changeColorCells('.mystyle', viewModel.colorForCells());
   table.changeColorCells('td > input', viewModel.colorForInCells());
});

viewModel.colorForCells.subscribe(function(){
  table.changeColorCells('.mystyle', viewModel.colorForCells());
});

viewModel.colorForText.subscribe(function(){
    table.changeColorText('td > input', viewModel.colorForText());
});

viewModel.colorForInCells.subscribe(function(){
    table.changeColorCells('td > input', viewModel.colorForInCells());
});


viewModel.dispersiaForAdd.subscribe(function(){

  if(viewModel.nameForAdd() != "" && viewModel.dispersiaForAdd() != ""){
     document.getElementById("add").removeAttribute("disabled");
  }else{
    document.getElementById("add").setAttribute("disabled", "true");
  }
})
