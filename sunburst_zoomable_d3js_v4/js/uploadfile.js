'use strict';

var input = d3.select("#fileselect");
var preview = d3.select(".previewfile").select('p');

var fichierATraiter;
var maDataTables;

// Effacement de l'affichage des légendes et titres de colonnes (afficher quand sunburst et datatables sont appelés)
toggleOpacity("main", 0);
toggleOpacity("titredatavisualisation", 0);
toggleOpacity("sidebar", 0);
toggleOpacity("affichageFichierDonnees", 0);
	
input.on('change', function() {
   fichierATraiter = updateImageDisplay();
	if(fichierATraiter != '0'){
		var fichierATraiterName = 'data/' + fichierATraiter;
		var fichierEnTeteName = 'data/' + 'entete.csv';
		affichageSunburst(fichierATraiterName,fichierEnTeteName);
		affichageDatatables(fichierATraiterName,fichierEnTeteName);
		} else 
			{
			toggleOpacity("main", 0);
			toggleOpacity("titredatavisualisation", 0);
			toggleOpacity("sidebar", 0);
			toggleOpacity("affichageFichierDonnees", 0);
			}
	});

	// récupération d'une fonction qui gère une liste de fichiers en entrée (le HTML utilisé ici n'en prend qu'un (pas de multiple)
function updateImageDisplay() {

  if(!input.node(0) || !input.node(0).files || input.node(0).files.length < 1){
    return '0';
  }

  var fileNode = input.node(0).files[0];

  if(validFileType(fileNode)){
    preview.text('Fichier accepté')
      .attr('class','alert alert-success');
    return fileNode.name;
  } else {
    preview.text('Type ' + fileNode.type + ' invalide.')
    .attr('class','alert alert-danger');
    return '0';
  }

}

var fileTypes = [ 'application/json', 'application/csv'];

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
	// Au MINARM il a fallu accepter le type vide car Firefox 52.4.1 32 bits ne ramène pas le type pour les json !
    if(file.type === fileTypes[i] || file.type === '') {
      return true;
    }
  }
  return false;
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}

// Effacement de l'affichage des légendes et titres de colonnes (afficher quand sunburst et datatables sont appelés)
function toggleOpacity(id, val) {
	d3.transition().duration(100).select("#"+id).style("opacity", val);
	}