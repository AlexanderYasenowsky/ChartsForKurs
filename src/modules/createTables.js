module.exports = {
  buildTables: function (information, id, name_of_table){
   let name = document.createElement('h3');
   name.innerHTML = name_of_table;
   name.style.fontSize ="22px";
   document.getElementById(id).appendChild(name);
   let table = document.createElement('table');
   let tr = document.createElement('tr');
   for(let i=0; i<information[0].length; i++ ){
        let data = document.createElement('th');
        data.innerHTML = "<input value = "+ information[0][i] + ">";
        tr.appendChild(data);
   }
   table.appendChild(tr);
   for(let j = 1; j < information.length;j++){
      tr = document.createElement('tr');
      for(let i = 0;i<information[j].length;i++){
          if(i==0){
            data = document.createElement('th');
          } else{
            data = document.createElement('td');
          }
            data.innerHTML = "<input  type='text' data-bind='textInput: name()["+(j-1)+"]["+i+"]'>";

          tr.appendChild(data);
      }
      table.appendChild(tr);
    }
    table.setAttribute("id", id + "-1")
    document.getElementById(id).appendChild(table);
  },
  changeProperties: function (name_of_block, color = "brown") {
    let block = document.getElementById(name_of_block);
    block.childNodes[0].style.color= color;

  },
  deleteTable: function (name_of_block){
    document.getElementById(name_of_block).innerHTML ="";
  }
}
