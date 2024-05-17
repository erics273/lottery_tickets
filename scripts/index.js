"use strict"

let winningTickets = [
    {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
    {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
    {tixNum: "1309182", expires: "2022-12-30" , prize: 500000},
    {tixNum: "1456171", expires: "2023-01-20", prize: 1000000},
    {tixNum: "3332871", expires: "2022-05-20", prize: 1000000},
    {tixNum: "4651529", expires: "2022-12-15", prize: 100000},
    {tixNum: "5019181", expires: "2023-01-31", prize: 250000},
    {tixNum: "5168261", expires: "2023-03-01", prize: 1000000},
    {tixNum: "6761529", expires: "2022-12-15", prize: 250000},
    {tixNum: "7778172", expires: "2023-01-15", prize: 5000000},
    {tixNum: "8751426", expires: "2020-09-15", prize: 100000}
];

window.onload = () => {

    loadWinnningTicketsTable();

}

function loadWinnningTicketsTable(){
    
    // I need to get a hold of the element with the ID of winningTicketsTblBody
    let tableBody = document.querySelector("#winningTicketsTblBody");

    //need to work with all the lottery tickets
    winningTickets.forEach( (ticket)=> {

        //call a function to build the individual table rows and data
        buildTableRow(tableBody, ticket);

    })

    //this function is responsible for building and adding a table row to the table body
    function buildTableRow(tableBody, data){

        //create a new row and put it at the end of the table
        let newRow = tableBody.insertRow();

        let cell1 = newRow.insertCell();
        cell1.innerHTML = data.tixNum;

        let cell2 = newRow.insertCell();
        cell2.innerHTML = `$${data.prize.toFixed(2)}`

        let cell3 = newRow.insertCell();
        cell3.innerHTML = data.expires

    }

}