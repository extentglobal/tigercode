function getContent(filename) {
 var path = "/templates/" + filename + ".html";
 var target = "#" + filename;
 $(target).load(path);
}


function closeCalendar() {
 $("#calendar").hide();
}
function showCalendar() {
 $("#calendar").show();
}
function show(target) {
	$(target).show();
}
function hide(target) {
	$(target).hide();
}
function showInvitationalTimeline() {
	$("#invitationalTimeline").show();
	$("#showEventsTimeline").hide();
}
function closeInvitationalTimeline() {
	$("#invitationalTimeline").hide();
	$("#showEventsTimeline").show();
}

getContent("calendar");

$(function() {
	// var h = window.innerheight;
	// console.log('height');
	// $("iframe.smugMug").css('height', h);
 	var eventStartDate = new Date(2019, 9, 26);
 	$("#event-countdown").countdown({until: eventStartDate});
	getContent("footer");
	getContent('cutTime_instructions');
	getContent('sponsors');

});
