google.charts.load('current', {'packages':['corechart']});

var information = [
  [1,2,4,8,16,32],
  [10,43,41,32,12,11],
  [1000,43,41,32,12,11],
  [10000,43,41,32,12,11]
]

function buildTable(id, name_of_table){
   let name = document.createElement('h3');
   name.innerHTML = name_of_table;
   document.getElementById(id).appendChild(name);
   let table = document.createElement('table');
   let tr = document.createElement('tr');
   for(let i=0; i<information[0].length; i++ ){
        let data = document.createElement('th');
        data.innerHTML = "<input value = "+ information[0][i] + ">";
        tr.appendChild(data);
   }
    table.appendChild(tr);
    for(let j = 0; j < information.length;j++){
      tr = document.createElement('tr');
      for(let i = 0;i<information[j].length;i++){
          data = document.createElement('td');
          data.innerHTML = "<input value = " + information[j][i] + ">";
          tr.appendChild(data);
      }
      table.appendChild(tr);
    }
    document.getElementById(id).appendChild(table);
}

function drawCurveTypes(name) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
      data.addColumn('number', 'Cats');
      
      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        },
        'width': 800,
        'height': 200
      };

      var chart = new google.visualization.LineChart(document.getElementById(name));
      chart.draw(data, options);
}

$("#create").click(function(){

    document.getElementById("speed-table").innerHTML ="";
    document.getElementById("acs-table").innerHTML ="";
    document.getElementById("eff-table").innerHTML ="";
    document.getElementById("cost-table").innerHTML ="";

    buildTable("speed-table", "Скорость выполнения программы в секундах");
    buildTable("acs-table", "Ускорение параллельных вычислений");
    buildTable("eff-table", "Эффективность парралельных вычислений");
    buildTable("cost-table", "Стоимость парралельных вычислений");


    document.getElementById('piechart').innerHTML="";
    document.getElementById('piechart1').innerHTML="";
    document.getElementById('piechart2').innerHTML="";
    document.getElementById('piechart3').innerHTML="";
    drawCurveTypes('piechart');
    drawCurveTypes('piechart1');
    drawCurveTypes('piechart2');
    drawCurveTypes('piechart3');
});

$("#add").click(function(){
    var table = document.getElementById('in');
    var table1 = document.getElementById('in1');
    var tr = document.createElement('tr');
    for(let i = 0;i<5;i++){
      var data = document.createElement('td');
      data.innerHTML = "<input value = '125'>";
      tr.appendChild(data);
    }
    table.appendChild(tr);
        table1.appendChild(tr);
});
