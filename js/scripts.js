$(document).ready(function() {
  $("#form...").submit(function(event) {
    event.preventDefault();
    var frontBackInput = $("input:radio[name=frontBack]:checked").val();
  });
});
