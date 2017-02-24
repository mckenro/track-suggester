$(document).ready(function() {

  $("form#suggesterQuiz").submit(function(event) {
    event.preventDefault();

    var userNameInput = $("input#userName").val();
    var frontBackInput = $("input:radio[name=frontBack]:checked").val();
    var appTypeInput = $("input:radio[name=appType]:checked").val();
    var techTypeInput = $("input:radio[name=techType]:checked").val();
    var coTypeInput = $("input:radio[name=coType]:checked").val();
    var coSpecificInput = $("input:radio[name=coSpecific]:checked").val();

    if (!userNameInput || !frontBackInput || !appTypeInput || !techTypeInput || !coTypeInput || !coSpecificInput){
      alert("Please choose an answer for all questions!");
    }else if ((frontBackInput === "1" && coSpecificInput === "4") || (frontBackInput === "1" && coSpecificInput === "5")) {
      $("#suggesterQuiz").hide();
      $("#cSharp").hide();
      $("#phpDrupal").hide();
      $("#rubyRails").hide();
      $("#moreInfo").hide();
      $("#cssDesign").show();
      $("#resultField").show();
    }else if ((frontBackInput === "2" && appTypeInput === "2") || (frontBackInput === "2" && techTypeInput === "1") || (frontBackInput === "2" && coSpecificInput === "5")) {
      $("#suggesterQuiz").hide();
      $("#cSharp").hide();
      $("#phpDrupal").hide();
      $("#cssDesign").hide();
      $("#moreInfo").hide();
      $("#resultField").show();
      $("#rubyRails").show();
    }else if ((frontBackInput === "2" && coSpecificInput === "1") || (frontBackInput === "2" && techTypeInput === "2") || (techTypeInput === "2" && coSpecificInput === "1")) {
      $("#suggesterQuiz").hide();
      $("#cssDesign").hide();
      $("#phpDrupal").hide();
      $("#rubyRails").hide();
      $("#moreInfo").hide();
      $("#resultField").show();
      $("#cSharp").show();
    }else if ((appTypeInput === "2" && techTypeInput === "1") || (appTypeInput === "2" && coSpecificInput === "5")) {
      $("#suggesterQuiz").hide();
      $("#cSharp").hide();
      $("#cssDesign").hide();
      $("#rubyRails").hide();
      $("#moreInfo").hide();
      $("#resultField").show();
      $("#phpDrupal").show();
    }else {
      $("#suggesterQuiz").hide();
      $("#cSharp").hide();
      $("#phpDrupal").hide();
      $("#rubyRails").hide();
      $("#cssDesign").hide();
      $("#resultField").show();
      $("#moreInfo").show();
    }
  });
});
