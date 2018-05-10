// FONCTION affichageDatatables appelée par le script UPLOAD.JS qui passe en paramètre le nomdu fichier
function affichageDatatables(monfichier) {
	'use strict';
	// Affichage 
	toggleOpacity("affichageFichierDonnees", 1);
	// codeHTMLtable à charger en récupérant élégamment le code html et non en l'écrivant dans la variable
	var codeHTMLtable = '<table id="fichierDonnees" class="display" width="100%"><thead><tr><th>Niveau</th><th>Libellé</th><th >Ressource</th><th>Consommation</th><th>Conso. prévisionnelle</th></tr></thead><tfoot><tr><th colspan="2" style="text-align:right">Total :</th><th></th><th></th><th></th></tr></tfoot></table>';
	// Il faut commencer par réinitialiser le tableau (cas d'un changement de fichier de données)
	d3.select("#affichageFichierDonnees").selectAll("*").remove();
	d3.select("#affichageFichierDonnees").html(codeHTMLtable);
	//document.getElementById("affichageFichierDonnees").html(codeHTMLtable);

	var formatNumber = d3.format(",d");
	//d3.json(fichierJSON, function(error, data) {
	d3.json(monfichier, function(error, data) {
		if (error) throw error;
		
				// Si le fichier JSON est incorrect (pas d'enfants a minima) arrêt total
		if (!d3.hierarchy(data).leaves()[0].data.name) {
			toggleOpacity("main", 0);
			toggleOpacity("titredatavisualisation", 0);
			toggleOpacity("sidebar", 0);
			toggleOpacity("affichageFichierDonnees", 0);
			throw "Fichier JSON incorrect pour Datatables !";
			} 
		
		var leaves = d3.hierarchy(data).leaves();

		var tableau = [];
		for(var i=0; i<leaves.length; i++) {
			leaves[i].data.name = leaves[i].data.name.split(' ').pop();
			if(!leaves[i].data.conso)leaves[i].data.conso=0;
			if(!leaves[i].data.prev)leaves[i].data.prev=0;
			tableau.push(leaves[i].data);
		}
		
		$(document).ready(function() {
			//if(maDataTables) {maDataTables.destroy();}
			maDataTables = $('#fichierDonnees').DataTable( {		
				data: tableau,
				language: { 
					//url: "data/French.json"
					url: monfichier
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
					var total2 = api
						.column(2, { search: "applied"} )
						.data()
						.reduce( function (a, b) {
							return a + b;
						}, 0);
					var total3 = api
						.column(3, { search: "applied"} )
						.data()
						.reduce( function (a, b) {
							return a + b;
						}, 0);
					var total4 = api
						.column(4, { search: "applied"} )
						.data()
						.reduce( function (a, b) {
							return a + b;
						}, 0);
					var pageTotal2 = api
						.column(2, { page: "current"} )
						.data()
						.reduce( function (a, b) {
							return a + b;
						}, 0);
					var pageTotal3 = api
						.column(3, { page: "current"} )
						.data()
						.reduce( function (a, b) {
							return a + b;
						}, 0);
					var pageTotal4 = api
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

}