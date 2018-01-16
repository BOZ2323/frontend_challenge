function DocCard(title, firstname, lastname, number) {



    // this.img = img;
    this.title = title;
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
}

var drAnke = new DocCard("Dr ", "Anke ", " Doodle ", "346688889 ");
var drHo = new DocCard("Dr", "Tram", "Ho", "3455555889");
var dc = document.getElementById("doctors_card");

//First draft
// dc.appendChild(drAnke);

// var dc = document.getElementById("doctors_card");
// var drAnke = document.createElement("div");
// drAnke.innerHTML = "super";
// dc.appendChild(drAnke);
// var ankeDiv = document.createElement("div");
// var hoDiv = document.createElement("div");

function createDocCard(doctors_practice) {
    var d = document.createElement("div");
    d.innerHTML = doctors_practice.title + " " + doctors_practice.firstname + " " + doctors_practice.lastname + " " + doctors_practice.number;
    dc.appendChild(d)
        // var p = document.createElement("img");
        // var table = document.createElement("tr")
}




createDocCard(drAnke);
createDocCard(drHo);
// dc.appendChild(ankeDddiv);
// dc.appendChild(hoDiv);