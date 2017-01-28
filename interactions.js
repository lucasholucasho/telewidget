$( "#widgetContainer" ).click(function() {
	$("#collapseButton").removeClass("hidden");
	$("#progressBar").removeClass("hidden");
  	$("#widgetContainer").addClass("expanded");
  	$("#onboardingInfo").removeClass("hidden");
  	$("#infoForm").removeClass("hidden");
  	$("#startButton").removeClass("hidden");
  	$("#videoCall").addClass("hidden");
});

$( "#collapseButton" ).click(function() {
	$("#widgetContainer").removeClass("expanded");
	$("#widgetContainer").addClass("collapsed");
	$("#collapseButton").addClass("hidden");
  	$("#onboardingInfo").addClass("hidden");
});

$( "#startButton" ).click(function() {
  	$("#startButton").addClass("hidden");
});
