
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

getContent("footer");
getContent("calendar");
getContent("sponsors");

$(function() {
 var eventStartDate = new Date(2019, 9, 27);
 $("#event-countdown").countdown({until: eventStartDate});
});
