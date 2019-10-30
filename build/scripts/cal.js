var eventsData;
var request = new XMLHttpRequest();
var matches = document.getElementsByTagName('td');
var numRegex = /(?<![0-9])[0-9]{2}(?![0-9])/;
let numsArr = [];
var eventsDesc = [];

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
  for (var k = 0; k < eventsData.eventsList.length; k++) {
    if (k > 0 && eventsData.eventsList[k].eventDate.match(numRegex) != eventsData.eventsList[k - 1].eventDate.match(numRegex))
      numsArr.push(eventsData.eventsList[k].eventDate.match(numRegex));

  }
  // for (var y = numsArr.length - 1; y--;) {
  //   console.log("Y " + numsArr[y]);
  //   if (numsArr[y] === numsArr[y - 1]) numsArr.splice(y, 1);
  // }
  var s = "";
  console.log("NUMS: " + numsArr);
  console.log("MTCH: " + matches[0].innerHTML);
  var el = document.getElementById("eventsHolder");


  initDiv = document.createElement("h1");
  initDiv.innerHTML = "Upcoming Events";
  // initDiv.className += 'wrap';
  // document.body.appendChild(initDiv);
  el.appendChild(initDiv);

  for (var i = 1; i < eventsData.eventsList.length+1; i++) {
    newDiv = document.createElement("div");
    newDiv.id = "div" + i.toString();
    // newDiv.className += "wrap";
    newDiv.innerHTML = "<p><strong class='dateTime'>" + eventsData.eventsList[i - 1].eventDate + "\t" + eventsData.eventsList[i - 1].eventTime + "</strong> |\t<em>" + eventsData.eventsList[i - 1].eventLocation + "</em><br/><strong class='eventDes'>" + eventsData.eventsList[i - 1].eventDescription + "</strong><br/><p>";
    // document.body.appendChild(newDiv);
    var el = document.getElementById("eventsHolder");
    el.appendChild(newDiv);

    
  }
  for (var j = 0; j < eventsData.eventsList.length; j++) {
    eventsDesc.push(eventsData.eventsList[j].eventDescription);

  }
  // for (var l = 0; l < matches.length; l++) {
  //   s = matches[l].innerHTML;
  //   console.log(s);
  //   console.log("inner: " + matches[l].innerHTML)
  //   if (matches[l].innerHTML.includes(numsArr[count])) {
  //     matches[l].style.color = '#EA9919';
  //     matches[l].className += "myevent";
  //     count++;

  //   }

  //   console.log(count);
  // }
  // console.log("MTCH: " + matches.innerHTML);


  for (var l = 0; l < matches.length; l++) {
    // s = matches[l].innerHTML;
    console.log("length: " + matches.length);
    console.log("inner: " + matches[l].innerHTML);
    if (matches[l].innerHTML == numsArr[count]) {
      matches[l].style.color = '#EA9919';
      // matches[l].className += "myevent";
      count++;

    }


    //     if (matches[l].innerHTML.includes(numsArr[count])) {
    //       matches[l].style.color = '#EA9919';
    //       matches[l].className += "myevent";
    //       count++;
    // break;
    //     }

    console.log(count);
  }



}


///
// Get elements
var elements = {
  // Calendar element
  calendar: document.getElementById("events-calendar"),
  // Input element
  events: document.getElementById("events")
}

// Create the calendar
elements.calendar.className = "clean-theme";
var calendar = jsCalendar.new(elements.calendar);

// Create events elements
elements.title = document.createElement("div");
elements.title.className = "title";
elements.events.appendChild(elements.title);
elements.subtitle = document.createElement("div");
elements.subtitle.className = "subtitle";
elements.events.appendChild(elements.subtitle);
elements.list = document.createElement("div");
elements.list.className = "list";
elements.events.appendChild(elements.list);
elements.actions = document.createElement("div");
elements.actions.className = "action";
elements.events.appendChild(elements.actions);
elements.addButton = document.createElement("input");
elements.addButton.type = "button";
elements.addButton.value = "Add";
elements.addButton.style.visibility = "hidden";
elements.actions.appendChild(elements.addButton);

var events = {};
var date_format = "DD/MM/YYYY";
var current = null;

var showEvents = function (date) {
  // Date string
  var id = jsCalendar.tools.dateToString(date, date_format, "en");
  // Set date
  current = new Date(date.getTime());
  // Set title
  elements.title.textContent = id;
  // Clear old events
  elements.list.innerHTML = "";
  // Add events on list
  if (events.hasOwnProperty(id) && events[id].length) {
    // Number of events
    elements.subtitle.textContent = events[id].length + " " + ((events[id].length > 1) ? "events" : "event");

    var div;
    var close;
    // For each event
    for (var i = 0; i < events[id].length; i++) {
      div = document.createElement("div");
      div.className = "event-item";
      div.textContent = (i + 1) + ". " + events[id][i].name;
      elements.list.appendChild(div);
      close = document.createElement("div");
      close.className = "close";
      close.textContent = "×";
      div.appendChild(close);
      close.addEventListener("click", (function (date, index) {
        return function () {
          removeEvent(date, index);
        }
      })(date, i), false);
    }
  } else {
    elements.subtitle.textContent = "No events";
  }
};

var removeEvent = function (date, index) {
  // Date string
  var id = jsCalendar.tools.dateToString(date, date_format, "en");

  // If no events return
  if (!events.hasOwnProperty(id)) {
    return;
  }
  // If not found
  if (events[id].length <= index) {
    return;
  }

  // Remove event
  events[id].splice(index, 1);

  // Refresh events
  showEvents(current);

  // If no events uncheck date
  if (events[id].length === 0) {
    calendar.unselect(date);
  }
}

// Show current date events
showEvents(new Date());

// Add events
calendar.onDateClick(function (event, date) {
  // Update calendar date
  calendar.set(date);
  // Show events
  showEvents(date);
});

elements.addButton.addEventListener("click", function () {
  // Get event name
  // var names = ["John", "Bob", "Anna", "George", "Harry", "Jack", "Alexander"];
  // var name = prompt(
  //   "Event info",
  //   names[Math.floor(Math.random() * names.length)] + "'s birthday."
  // );

  //Return on cancel
  // if (name === null || name === "") {
  //   return;
  // }

  // Date string
  // var id = jsCalendar.tools.dateToString(current, date_format, "en");

  // // If no events, create list
  // if (!events.hasOwnProperty(id)) {
  //   // Select date
  //   calendar.select(current);
  //   // Create list
  //   events[id] = [];
  // }
  events["15/05/2018"] = [];
  events["16/05/2018"] = [];
  events["22/05/2018"] = [];
  events["23/05/2018"] = [];
  events["25/05/2018"] = [];
  events["31/05/2018"] = [];
  console.log(eventsDesc);

  events["15/05/2018"].push({ name: eventsDesc[0] });
  events["15/05/2018"].push({ name: eventsDesc[1] });
  events["16/05/2018"].push({ name: eventsDesc[2] });
  events["22/05/2018"].push({ name: eventsDesc[3] });
  events["23/05/2018"].push({ name: eventsDesc[4] });
  events["25/05/2018"].push({ name: eventsDesc[5] });
  events["31/05/2018"].push({ name: eventsDesc[6] });


  // Add event
  // events[id].push({ name: name });


  // Refresh events
  showEvents(current);
}, false);


