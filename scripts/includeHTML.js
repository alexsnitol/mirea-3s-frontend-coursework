function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("include-html");
                includeHTML();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }

    let pn = document.location.pathname;

    if (pn === "/INERI_website/html/index.html") {
        document.getElementById("menu-main").classList.add("current");
        document.getElementById("menu-main-mini").classList.add("current");
    }
    else if (pn === "/INERI_website/html/contacts.html") {
        document.getElementById("menu-contacts").classList.add("current");
        document.getElementById("menu-contacts-mini").classList.add("current");
    }
    else if (pn === "/INERI_website/html/vacancies.html") {
        document.getElementById("menu-vacancies").classList.add("current");
        document.getElementById("menu-vacancies-mini").classList.add("current");
    }

    let d = new Date;
    document.getElementById("footer-years").innerHTML = "2021 - " + d.getFullYear();
};
