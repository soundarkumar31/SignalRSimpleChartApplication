////import { signarlR } from "../js/signalr/dist/browser/signalr";

$(() => {
    loadData();
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalrServer").build();
    connection.start();
    connection.on("loadProducts", function () {
        loadData();
       // alert("New Record Added");
    });       

    function loadData() {
        var tr = "";
        $.ajax({
            url: "/Products/GetProducts",
            method: "GET", 
            success: (result) => {
                $.each(result, (k, v) => { 
                    tr += `<tr>
                            <td>${v.Id}</td>
                            <td>${v.Name}</td>
                            <td>${v.Price}</td>
                            <td>${v.Category}</td>
                        </tr>`;

                });
                $("#tableBody").html(tr);             
            }, error: (error) => {
                console.log(error);   
            }
        })
    }
});