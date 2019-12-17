var flag = 0;
var viewModel = {
  name: ko.observable('Распорядок дня'),
  Germany: ko.observable(10),
  United_States: ko.observable(10),
  Brazil: ko.observable(10),
  France: ko.observable(10),
  Russia: ko.observable(10),
};
ko.applyBindings(viewModel);
google.charts.load('current', {'packages':['corechart']});
;

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Germany',     Number(viewModel.Germany())],
          ['United_States',      Number(viewModel.United_States())],
          ['Brazil',  Number(viewModel.Brazil())],
          ['France', Number(viewModel.France())],
          ['Russia',    Number(viewModel.Russia())],
        ]);
        var options = {
          title: viewModel.name(),
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
}

function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', Number(viewModel.Germany())],
          ['United States', Number(viewModel.United_States())],
          ['Brazil', Number(viewModel.Brazil())],
          ['France', Number(viewModel.France())],
          ['Russia',  Number(viewModel.Russia())]
        ]);
        var options = {
            title: viewModel.name(),
            width: 1000,
            height: 600,
        };
        var chart = new google.visualization.GeoChart(document.getElementById('piechart'));
        chart.draw(data, options);
}

function buildTable(){
   let table = document.getElementById('in');
   console.log(table);
   let info = ["Страна", "Значение"];
   let tr = document.createElement('tr');
     for(let i=0;i<2;i++ ){
        let data = document.createElement('th');
        data.innerHTML = info[i];
        tr.appendChild(data);
     }
     table.appendChild(tr);
    let names =["Germany", 'United_States', 'Brazil','France','Russia'];
    for(let j =0; j< names.length;j++){
      tr = document.createElement('tr');
      for(let i = 0;i<2;i++){
          data = document.createElement('td');
          if(i==0)
            data.innerHTML = names[j];
          if(i==1 && j == 0){
            data.innerHTML = "<input type='text' data-bind='textInput: work' value = " + viewModel.Germany()+ ">";
          }
          if(i==1 && j == 1){
            data.innerHTML = "<input type='text' data-bind='textInput: work' value = " + viewModel.United_States()+ ">";
          }
          if(i==1 && j == 2){
            data.innerHTML = "<input type='text' data-bind='textInput: work' value = " + viewModel.Brazil()+ ">";
          }
          if(i==1 && j == 3){
            data.innerHTML = "<input type='text' data-bind='textInput: work' value = " + viewModel.France()+ ">";
          }
          if(i==1 && j == 4){
            data.innerHTML = "<input type='text' data-bind='textInput: work' value = " + viewModel.Russia()+ ">";
          }
          tr.appendChild(data);
      }
      table.appendChild(tr);
    }
}

function drawBarChart() {
     var data = google.visualization.arrayToDataTable([
       ["Element", "Density", { role: "style" } ],
       ["Copper", 8.94, "#b87333"],
       ["Silver", 10.49, "silver"],
       ["Gold", 19.30, "gold"],
       ["Platinum", 21.45, "color: #e5e4e2"]
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {
       title: "Density of Precious Metals, in g/cm^3",
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.BarChart(document.getElementById("piechart"));
     chart.draw(view, options);
 }

google.charts.setOnLoadCallback(buildTable);

$("#pie").click(function(){
  document.getElementById('piechart').innerHTML="";
  drawChart();
  flag = 0;
})

$("#geo").click(function(){
  document.getElementById('piechart').innerHTML="";
  drawRegionsMap();
  flag = 1;
})

$("#bar").click(function(){
  document.getElementById('piechart').innerHTML="";
  drawBarChart();
  flag = 3;
})
viewModel.name.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
viewModel.Germany.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
viewModel.United_States.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
viewModel.Brazil.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
viewModel.France.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
viewModel.Russia.subscribe(function(){
  if(flag == 0){
    drawChart();
  } else if(flag == 1){
    drawRegionsMap();
  } else{
    drawBarChart();
  }
  $("#in").html('');
  buildTable();
});
