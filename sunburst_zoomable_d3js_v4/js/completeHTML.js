'use strict';

var titreGeneral = "Bienvenue sur l'environnement de datavisualisation des données financières";

var explanationText = 'du total de ce niveau, soit';

var titresTableHead = ['Niveau', 'Libellé', 'Ressource', 'Consommation', 'Conso. prévisionnelle'];
var titresTableFoot = ['Total :', '', '', ''];

var formUploadTextAction = 'Veuillez choisir le fichier json à afficher';
var formUploadFormatFichier = '.json';
var formUploadTextPreview = 'Aucun fichier sélectionné pour le moment';

d3.select('#titregeneral')
    .select('h1')
    .text(titreGeneral);

d3.select('#formupload')
    .append('form')
    .attr('method','post')
    .attr('enctype','multipart/form-data')
    .append('div')
    .append('label')
    .attr('for','fileselect')
    .text(formUploadTextAction);
d3.select('#formupload')
    .select('form')
    .select('div')
    .append('input')
    .attr('type','file')
    .property('id','fileselect')
    .attr('name','fileselect')
    .attr('accept',formUploadFormatFichier);
d3.select('#formupload')
    .select('form')
    .append('div')
    .attr('class','previewfile')
    .append('p')
    .text(formUploadTextPreview);

d3.select('#titredatavisualisation')
    .append('h1');
d3.select('#titredatavisualisation')
    .append('h2');
d3.select('#titredatavisualisation')
    .append('h4');


d3.select('#chart')
  .append('div')
  .property('id','explanation')
  .style('visibility', 'hidden');
d3.select('#explanation')
  .append('span')
  .property('id','libelle');
d3.select('#explanation')
  .append('br');
d3.select('#explanation')
  .append('span')
  .property('id','percentage');
d3.select('#explanation')
  .append('br')
  .text(explanationText);
d3.select('#explanation')
  .append('br');
d3.select('#explanation')
  .append('span')
  .property('id','montant');



var togglelegendText = 'Légende';
var togglearcconsoText = 'Affichage de la consommation';
var toggledonneesText = 'Affichage des données';

d3.select('#sidebar')
    .append('input')
    .attr('type','checkbox')
    .property('id','togglelegend')
    .attr('name','affichage')
    .attr('value','legende')
    .attr('checked','');
d3.select('#sidebar')
    .append('label')
    .attr('for','togglelegend')
    .text(togglelegendText);
d3.select('#sidebar')
    .append('div')
    .property('id','legend')
d3.select('#sidebar')
    .append('br')

d3.select('#sidebar')
    .append('input')
    .attr('type','checkbox')
    .property('id','togglearcconso')
    .attr('name','affichageArcConso')
    .attr('value','afficheArcConso');
d3.select('#sidebar')
    .append('label')
    .attr('for','togglearcconso')
    .text(togglearcconsoText);
d3.select('#sidebar')
    .append('div')
    .property('id','consommation')
d3.select('#sidebar')
    .append('br')

d3.select('#sidebar')
    .append('input')
    .attr('type','checkbox')
    .property('id','toggledonnees')
    .attr('name','affichageDonnees')
    .attr('value','afficheDonnees');
d3.select('#sidebar')
    .append('label')
    .attr('for','toggledonnees')
    .text(toggledonneesText);
d3.select('#sidebar')
    .append('div')
    .property('id','tableDonnees')
d3.select('#sidebar')
    .append('br')


var titresTablesEcart = titresTableHead.length - titresTableFoot.length ;

d3.select('#affichageFichierDonnees')
  .append('table')
  .attr('class','display')
  .property('id','fichierDonnees')
  .property('width', '100%')
  .append('thead')
  .append('tr')
  .selectAll('th')
  .data(titresTableHead, function(d) { return d; })
    .enter()
    .append('th')
    .text(function(d) { return d; });
d3.select('#fichierDonnees')
  .append('tfoot')
  .append('tr')
  .selectAll('th')
  .data(titresTableFoot, function(d, i) { return d; })
    .enter()
    .append('th')
    .attr('colspan',function(d, i) {
        if (d.length > 0) 
        { return titresTablesEcart+i+1; } else { return 1; }
      })
    .style('text-align', function(d, i) {
        if (d.length > 0) 
        { return 'right'; } else { return 'left'; }
      })
    .text(function(d) { return d; });