d3.json(fichierJSON, function(error, data) {
	if (error) throw error;
	leaves = d3.hierarchy(data).leaves();

	var tableau = [];
	for(var i=0; i<leaves.length; i++) {
		leaves[i].data.name = leaves[i].data.name.split(' ').pop();
		if(!leaves[i].data.conso)leaves[i].data.conso=0;
		if(!leaves[i].data.prev)leaves[i].data.prev=0;
		tableau.push(leaves[i].data);
	}
	
	$(document).ready(function() {
		$('#fichierDonnees').DataTable( {		
			data: tableau,
			language: { 
				url: "data/French.json"
				},
			columns: [
				{ data: "name" },
				{ data: "libelle" },
				{ data: "size"},
				{ data: "conso" },
				{ data: "prev" }
			],
			columnDefs: [
				{ "render": $.fn.dataTable.render.number('.',',',0,''), "targets": [2,3,4]},
				{className: "dt-right", "targets": [2,3,4]}
			],
			order: [[ 0, "asc" ]],
			iDisplayLength: 25,
			
			footerCallback: function( row, data, start, end, display ) {
				var api = this.api(), data;
				total2 = api
					.column(2, { search: "applied"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				total3 = api
					.column(3, { search: "applied"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				total4 = api
					.column(4, { search: "applied"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				pageTotal2 = api
					.column(2, { page: "current"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				pageTotal3 = api
					.column(3, { page: "current"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				pageTotal4 = api
					.column(4, { page: "current"} )
					.data()
					.reduce( function (a, b) {
						return a + b;
					}, 0);
				$( api.column(2).footer() ).html(formatNumber(total2).replace(',','.'));
				$( api.column(3).footer() ).html(formatNumber(total3).replace(',','.'));
				$( api.column(4).footer() ).html(formatNumber(total4).replace(',','.'));
			},
		} );
	} );
});
