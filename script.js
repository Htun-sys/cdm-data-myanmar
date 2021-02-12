// $(document).ready(function() {
// 		$("#table_id").dataTable({
// 		data: banks,
// 		columns: [
// 		{ data: 'name'},
// 		{ data: 'status'},
// 		{ data: 'address'}
// 		]
// 	});
// });

let banks = [
 {
   "name": "John",
   "address": "1st Street",
   "status": true
 },
 {
   "name": "Susan",
   "address": "2nd Street",
   "status": false
 },
 {
   "name": "Mike",
   "address": "3rd Street",
   "status": true
 }
]
let medical = [
 {
   "name": "John",
   "address": "1st Street",
   "status": true
 },
 {
   "name": "Susan",
   "address": "2nd Street",
   "status": false
 }
]

function search_category() {
	// let selectedSector = $("select#sector").children("option:selected").val();
	// console.log(selectedSector);
	// filePath = `data/banks.json`;
	// $.getJSON(filePath, function(data) {
	// 	$("#table_id").dataTable({
	// 	data: data,
	// 	columns: [
	// 	{ data: 'name'},
	// 	{ data: 'status'},
	// 	{ data: 'address'}
	// 	]
	// });
	// });
	// let obj = JSON.parse(selectedSector);
	// $("select").change(function() {
 //    let selectedSector= $( "select option:selected" ).val();
	// showTable(selectedSector);
 //  }).trigger("change");
	
}

// $("select").ready(function() {
//     let selectedSector= $( "select option:selected" ).val();
// 	showTable(selectedSector);
//   }).trigger("change");

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