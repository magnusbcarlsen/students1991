"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
    console.log("Frontend is running");

    // register buttons for sort
    document.querySelector("button#sort_first").addEventListener("click", clickedSortFirstname );
    document.querySelector("button#sort_last").addEventListener("click", clickedSortLastname );
    document.querySelector("button#sort_house").addEventListener("click", clickedSortHouse );

    // register buttons for filters
//    document.querySelectorAll("#filters a").forEach( function(element) { element.addEventListener("click", clickedFilter); } );
    document.querySelectorAll("#filters a").forEach( element => element.addEventListener("click", clickedFilter));
}

function clickedSortFirstname() {
    console.log("clickedSortFirstname");
}

function clickedSortLastname() {
    console.log("clickedSortLastname");
}

function clickedSortHouse() {
    console.log("clickedSortHouse");
}

function clickedFilter() {
    console.log("clickedFilter");
    const filter = this.dataset.filter; // references data-filter="____"
}

function displayList( listOfStudents ) {
    console.log("Display list");
    // clear the table
    document.querySelector("table#studentlist tbody").innerHTML = "";

    // foreach student in listOfStudents
    listOfStudents.forEach( function( student ) {
        // clone a table-row for student
        const clone = document.querySelector("#student_template").content.cloneNode(true);
        
        // fill in the clone with data
        clone.querySelector("[data-firstname]").textContent = student.firstName;
        clone.querySelector("[data-lastname]").textContent = student.lastName;
        clone.querySelector("[data-house]").textContent = student.house;

        // append clone to table
        document.querySelector("table#studentlist tbody").appendChild( clone );
    })

}