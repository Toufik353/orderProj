var xhttp=new XMLHttpRequest();
const ordersPage ="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
var mainTable=document.getElementById("main-table");
xhttp.open("GET",ordersPage,true);

xhttp.send();

xhttp.onreadystatechange=function(){
if(xhttp.readyState===4){
    var response=JSON.parse(xhttp.responseText);
  for(let i=0;i<response.length;i++){
      var res=response[i]
      console.log(res);
      var createdOrderRow=createOrderCard(res)
     mainTable.appendChild(createdOrderRow)

    }
           
            
        }
    }



    function createOrderCard(res){
        // <tr id="table-heading">
        //             <td class="table-data">ID</td>
        //             <td >customer</td>
        //             <td class="date-time"><span>Date<span><span class="time">TIme</span></td>
        //             <td >Amount</td>
        //             <td class="table-data-btm">status</td>
        //         </tr>

        var tableRow=document.createElement("tr")
        tableRow.id="table-heading";

        var dataOne=document.createElement("td")
        dataOne.classList.add("table-data")
        var textOne=document.createTextNode(res.id);
        dataOne.appendChild(textOne)

        tableRow.appendChild(dataOne)

        var dataTwo=document.createElement("td");
        var textTwo=document.createTextNode(res.customerName)
         dataTwo.appendChild(textTwo);

         tableRow.appendChild(dataTwo);
        

         var dataThree=document.createElement("td");
         dataThree.classList.add("date-time")
        var dateT=document.createElement("span");
       
        var dateText=document.createTextNode(res.orderDate);
       
        dateT.appendChild(dateText);
        var bre=document.createElement("br");
        dateT.appendChild(bre)
        
        var timeT=document.createElement("span");
        timeT.classList.add("time")
        
       
        var timeText=document.createTextNode(res.orderTime);
        timeT.appendChild(timeText);
        dataThree.appendChild(dateT)
        dataThree.appendChild(timeT)
         tableRow.appendChild(dataThree);

         var dataFour=document.createElement("td");
        var textFour=document.createTextNode(res.amount)
         dataFour.appendChild(textFour);

         tableRow.appendChild(dataFour);

         var dataFive=document.createElement("td");
        var textFive=document.createTextNode(res.orderStatus)
         dataFive.appendChild(textFive);
         tableRow.appendChild(dataFive)

        console.log(tableRow)

return tableRow;


    }
    createOrderCard();