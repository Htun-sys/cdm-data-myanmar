$("select").change(function() {
    let selectedSector= $( "select option:selected" ).val();
	showTable(selectedSector);
  }).trigger("change");

function showTable(selectedSector) {
	$('#table_id').remove();
	$('#table_id_wrapper').remove();
	$("body div.container").append($("<table>", {
		"id":"table_id",
		"class": "cell-border compact stripe"
	}));
	t_head = `<thead>
	<tr>
	<th>အမည်</th>
	<th>ပါ၀င်မှု</th>
	<th>တည်နေရာ</th>
	</tr>
	</thead>`
	$("#table_id").append(t_head);
	let url = "https://htun-sys.github.io/cdm-json/data/"+selectedSector+".json";
	$.getJSON(url, function(data) {
		$("#table_id").dataTable({
		data: data,
		columns: [
		{ data: 'name'},
		{ data: 'status'},
		{ data: 'address'}
		]
	});
	});

}