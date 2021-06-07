$(document).ready(function(){
    $("#csv-file").change(handleFileSelect);
    document.getElementById('container').style.visibility='hidden';
  });
function SomeDeleteRowFunction(btndel) {
    if (typeof(btndel) == "object") {
        $(btndel).closest("tr").remove();
    } else {
        return false;
    }
}
var data;
var row;
function handleFileSelect(evt) {
  document.getElementById('csv-file').style.visibility='hidden';
  document.getElementById('container').style.visibility='visible';
  var file = evt.target.files[0];
  Papa.parse(file, {
    header: false,
    dynamicTyping: true,
    complete: function(results) {
      data = results;
      console.log(results)
    var table = "<table id= table' class='table'd-flex p-2>";
	var data = results.data;
	for(i=0;i<data.length;i++){
		table+= "<tr>";
		row = data[i];
		var cells = row.join(",").split(",");
        table+= "<td>";
        table+= "<input type=button class=btn value=Delete Row onclick=SomeDeleteRowFunction(this);>";
        table+="</td>";
		 
		for(j=0;j<cells.length;j++){
			table+= "<td class=content-values>";
			table+= cells[j];
			table+= "</td>";
		}
		table+= "</tr>";
	}
	table+= "</table>";
	$("#container").html(table);
    }
  });
}






