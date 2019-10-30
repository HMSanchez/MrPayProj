var eventsData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
  request.open('GET', 'json/events.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  var count = 0;
  eventsData = JSON.parse(request.responseText);
  console.log(eventsData);
  var el = document.getElementById("eventsHolder");
  initDiv = document.createElement("h1");
  initDiv.innerHTML = "Upcoming Events";
  el.appendChild(initDiv);

  for (var i = 1; i < eventsData.eventsList.length+1; i++) {
    newDiv = document.createElement("div");
    newDiv.id = "div" + i.toString();
    newDiv.innerHTML = "<p><strong class='dateTime'>" + eventsData.eventsList[i - 1].eventDate + "\t" + eventsData.eventsList[i - 1].eventTime + "</strong> |\t<em>" + eventsData.eventsList[i - 1].eventLocation + "</em><br/><strong class='eventDes'>" + eventsData.eventsList[i - 1].eventDescription + "</strong><br/><p>";
    var el = document.getElementById("eventsHolder");
    el.appendChild(newDiv);
  }

  var linkContainer = document.createElement("div");
  linkContainer.id = "btnContainer";
  linkContainer.className = "otherwrap";
  var link = document.createElement("a");
  link.href = "calendar.html";
  link.className = "btn darkBtn";
  link.role = "button";
  link.innerHTML = "See More";
  linkContainer.appendChild(link);
  el.appendChild(linkContainer);
}