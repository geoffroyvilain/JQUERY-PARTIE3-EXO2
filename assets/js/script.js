$(function() {
  var count = 0; //compteur à 0 ici, en dehors de la fonction, ne se remet aps à 0
  $('#clickBetter').click(function() {
    count++; //RAJOUTE 1 AU COMPTEUR
    $('#number').val(count);
  });
  $('#clickLower').click(function() {
    count--; // DIMINUE DE 1 AU COMPTEUR
    $('#number').val(count);
  });
});
