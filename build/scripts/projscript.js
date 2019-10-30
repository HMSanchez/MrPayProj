var Data;
var request = new XMLHttpRequest();

loadData();

function loadData() {
    request.open('GET', 'json/projects.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    Data = JSON.parse(request.responseText);
    console.log(Data);
    for (var i = 0; i < Data.projectList.length; i++) {
        document.getElementById(`projusername${i + 1}`).innerHTML = Data.projectList[i].personName;
        document.getElementById(`projname${i + 1}`).innerHTML = Data.projectList[i].projectName;
        document.getElementById(`projdesc${i + 1}`).innerHTML = Data.projectList[i].projectDesc;
        document.getElementById(`projimg${i + 1}`).src = Data.projectList[i].projectImageSrc;

    }
}