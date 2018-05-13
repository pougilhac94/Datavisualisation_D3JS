'use strict';

var titreGeneral = "Bienvenue sur l'environnement de datavisualisation des données financières";

var explanationText = 'du total de ce niveau, soit';

var titresTableHead = ['Niveau', 'Libellé', 'Ressource', 'Consommation', 'Conso. prévisionnelle'];
var titresTableFoot = ['Total :', '', '', ''];

var formUploadTextAction = 'Veuillez choisir le fichier json à afficher';
var formUploadFormatFichier = '.json';

d3.select('#titregeneral')
    .select('h1')
    .text(titreGeneral);

d3.select('#formupload')
    .append('form')
    .attr('method','post')
    .attr('enctype','multipart/form-data')
    .append('div').attr('class','form-group')
    .append('label').attr('class','font-weight-bold p-1')
    .attr('for','fileselect')
    .text(formUploadTextAction);
d3.select('#formupload')
    .select('form')
    .select('div')
    .append('input').attr('class','form-control-file')
    .attr('type','file')
    .property('id','fileselect')
    .attr('name','fileselect')
    .attr('accept',formUploadFormatFichier);
d3.select('#formupload')
    .select('form')
    .append('div')
    .attr('class','previewfile')
    .append('p');

d3.select('#titredatavisualisation')
    .append('h1').attr('class','row');
d3.select('#titredatavisualisation')
    .append('h2').attr('class','row');
d3.select('#titredatavisualisation')
    .append('h4').attr('class','row');

d3.select('#chart').attr('class','row')
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

  d3.select('#sequence').attr('class','row')

var togglelegendText = 'Légende';
var togglearcconsoText = 'Affichage de la consommation';
var toggledonneesText = 'Affichage des données';

d3.select('#sidebar')
    .append('div').attr('class','form-check').property('id','form-check-legend')
    .append('input').attr('class','form-check-input')
    .attr('type','checkbox')
    .property('id','togglelegend')
    .attr('name','affichage')
    .attr('value','legende')
    .attr('checked','');
d3.select('#form-check-legend')
    .append('label').attr('class','form-check-label')
    .attr('for','togglelegend')
    .text(togglelegendText);
d3.select('#sidebar')
    .append('div')
    .property('id','legend')
d3.select('#sidebar')
    .append('br')

d3.select('#sidebar')
    .append('div').attr('class','form-check').property('id','form-check-conso')
    .append('input').attr('class','form-check-input')
    .attr('type','checkbox')
    .property('id','togglearcconso')
    .attr('name','affichageArcConso')
    .attr('value','afficheArcConso');
d3.select('#form-check-conso')
    .append('label').attr('class','form-check-label')
    .attr('for','togglearcconso')
    .text(togglearcconsoText);
d3.select('#sidebar')
    .append('div')
    .property('id','consommation')
d3.select('#sidebar')
    .append('br')

d3.select('#sidebar')
    .append('div').attr('class','form-check').property('id','form-check-donnees')
    .append('input').attr('class','form-check-input')
    .attr('type','checkbox')
    .property('id','toggledonnees')
    .attr('name','affichageDonnees')
    .attr('value','afficheDonnees');
d3.select('#form-check-donnees')
    .append('label').attr('class','form-check-label')
    .attr('for','toggledonnees')
    .text(toggledonneesText);

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

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna. Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. ';

d3.select('#col-gauche').text(loremIpsum);
d3.select('#col-droite').text(loremIpsum);