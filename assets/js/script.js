$(function() {
  var count = 0;
  $('#clickBetter').click(function() {
    count++;
    $('#number').text(count);
  });
  $('#clickLower').click(function() {
    count--;
    $('#number').text(count);
  });
});
