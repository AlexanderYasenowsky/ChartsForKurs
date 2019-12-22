google.charts.load('current', {'packages':['corechart']});
import createTables from './createTables';

var info = ([
  ["p/n", 10,1000,10000,100000,1000000],
  [1,0.5,0.8,1.5,2.8,3],
  [2,0.6,0.7,1.2,2.2,2.5],
  [4,0.8,0.4,0.6,1.2,1.8],
  [8,1,1.2,1.5,2,2.3],
  [16,1.5,2.1,3,5,7],
  [32,1.5,2.1,3,5,9],
  [64,1.5,2.1,3,9.5,10],
]);

var newArray = info.slice();
newArray.splice(0,1);

var viewModel = {
  name: ko.observableArray(newArray),
  colorOfHeaders: ko.observable(),
}

function drawCurveTypes(name, title) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      for(let i = 1; i< info[0].length; i++){
        data.addColumn('number', String(info[0][i]) + " элементов");
      }
      data.addRows(newArray);
      var options = {
        chart: {
          title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
        },
        hAxis: {
          title: 'Кол-во процессов/потоков'
        },
        vAxis: {
          title: title
        },
        series: {
          0: {
            curveType: 'function',
            pointShape: 'circle',
            pointSize: 10
          },
          1: {
            curveType: 'function',
            pointShape: 'circle',
            pointSize: 10
          },
          2: {
            curveType: 'function',
            pointShape: 'circle',
            pointSize: 10
          },
          3: {
            curveType: 'function',
            pointShape: 'circle',
            pointSize: 10
          },
          4: {
            curveType: 'function',
            pointShape: 'circle',
            pointSize: 10
          }
        },
        'width': 900,
        'height': 325,
        'tilte': "График зависимости",
      };
      var chart = new google.visualization.LineChart(document.getElementById(name));
      chart.draw(data, options);
}

$("#create").click(function(){
    document.getElementById("speed-table").innerHTML ="";
    document.getElementById("acs-table").innerHTML ="";
    document.getElementById("eff-table").innerHTML ="";
    document.getElementById("cost-table").innerHTML ="";
    createTables.buildTables(info, "speed-table", "Скорость выполнения программы в секундах");
    createTables.buildTables(info, "acs-table", "Ускорение параллельных вычислений");
    createTables.buildTables(info, "eff-table", "Эффективность парралельных вычислений");
    createTables.buildTables(info, "cost-table", "Стоимость парралельных вычислений");
    document.getElementById('speed-chart').innerHTML="";
    document.getElementById('acs-chart').innerHTML="";
    document.getElementById('eff-chart').innerHTML="";
    document.getElementById('cost-chart').innerHTML="";
    drawCurveTypes('speed-chart', "Время выполнения программы в секундах" );
    drawCurveTypes('acs-chart', "Ускорение параллельных вычислений");
    drawCurveTypes('eff-chart', "Эффективность парралельных вычислений");
    drawCurveTypes('cost-chart', "Cтоимость парралельных вычислений");
    ko.applyBindings(viewModel);

});

$("#delete").click(function(){
  createTables.deleteTable("speed-table");
  createTables.deleteTable("speed-chart");
  createTables.deleteTable("acs-table");
  createTables.deleteTable("acs-chart");
  createTables.deleteTable("eff-table");
  createTables.deleteTable("eff-chart");
  createTables.deleteTable("cost-table");
  createTables.deleteTable("cost-chart");
  document.getElementById("name_colors").value = "";
})

viewModel.colorOfHeaders.subscribe(function(){
  createTables.changeProperties('speed-table', viewModel.colorOfHeaders());
  createTables.changeProperties('acs-table', viewModel.colorOfHeaders());
  createTables.changeProperties('eff-table', viewModel.colorOfHeaders());
  createTables.changeProperties('cost-table', viewModel.colorOfHeaders());
});

viewModel.name.subscribe(function () {
  alert("h1");
});
