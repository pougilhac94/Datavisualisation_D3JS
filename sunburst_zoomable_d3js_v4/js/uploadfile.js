'use strict';

var input = document.querySelector('#fileselect');
var preview = document.querySelector('.previewfile');
//var input = d3.select("#fileselect");
//var preview = d3.select(".previewfile");
input.style.opacity = 0;

var fichierATraiter;
var maDataTables;

// Effacement de l'affichage des légendes et titres de colonnes (afficher quand sunburst et datatables sont appelés)
toggleOpacity("main", 0);
toggleOpacity("titredatavisualisation", 0);
toggleOpacity("sidebar", 0);
toggleOpacity("affichageFichierDonnees", 0);
	
input.addEventListener('change', function() {
//input.on('change', function() {
	fichierATraiter = updateImageDisplay()[0];
	if(fichierATraiter){
		var fichierATraiterName = "data/" + fichierATraiter.name;
		affichageSunburst(fichierATraiterName);
		affichageDatatables(fichierATraiterName);
		} else 
			{
			toggleOpacity("main", 0);
			toggleOpacity("titredatavisualisation", 0);
			toggleOpacity("sidebar", 0);
			toggleOpacity("affichageFichierDonnees", 0);
			}
	});

	// récuépration d'une fonction qui gère une liste de fichiers en entrée (le HTML utilisé ici n'en prend qu'un (pas de multiple)
function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = input.files;
  var listeFichierATraiter=[];
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'Aucun fichier sélectionné';
    preview.appendChild(para);
	return listeFichierATraiter;
  } else {
    var list = document.createElement('ol');
    preview.appendChild(list);
    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');
      if(validFileType(curFiles[i])) {
        para.textContent = 'Nom du fichier : ' + curFiles[i].name + ', taille ' + returnFileSize(curFiles[i].size) + '.';
        var img = document.createElement('img');
        img.src = window.URL.createObjectURL(curFiles[i]);
	
        //listItem.appendChild(img);
        listItem.appendChild(para);
		listeFichierATraiter.push(curFiles[0]);
      } else {
        para.textContent = 'Le fichier ' + curFiles[i].name + ', de type ' + curFiles[i].type + ' est invalide. Veuillez recommencer. ';
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
  }
  return listeFichierATraiter;
}

var fileTypes = [
  'application/json'
]

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