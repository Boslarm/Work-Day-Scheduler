// current day is displayed at the top of the calendar DONE
function showTime() {
    let showDay =moment().format('LLLL');
    $("#currentDay").text(showDay);
}
showTime();
setInterval(showTime, 30000);
// setInterval(function(){
   
// },60000);
//time blocks for standard business hours DONE
    //9am-5pm DONE
    //9 rows DONE
    //3 columns DONE
        //time DONE
        //event DONE
        //save DONE
// THEN each time block is color-coded to indicate whether it is in the past, present, or future DONE
    //past = grey DONE
    //current = red DONE
    //future = green DONE
    //time formats the colors DONE

// let hourNineText = $("#hour-9");
// let hourTenText = $("#hour-10");
// let hourElevenText = $("#hour-11");
// let hourTwelveText = $("#hour-12");
// let hourThirteenText = $("#hour-13");
// let hourFourteenText = $("#hour-14");            thought I would need these...I don't
// let hourFifteenText = $("#hour-15");
// let hourSixteenText = $("#hour-16");
// let hourSeventeenText = $("#hour-17");
// console.log(hourSeventeenText);
function hourUpdater() {
    let currentHour = moment().hours(); //turns time into hours only
    $("textarea").each(function (){
    let blockHour = parseInt($(this).attr("id").split("-")[1]); //targets each"id=hour__" by turning text area into an array and giving the second position
// console.log(blockHour);
    if (blockHour < currentHour) { //if hour number is less than current hour...
        $(this).addClass("past"); //turns it grey
    
        } else if (blockHour === currentHour) { //if hour is same as current
        $(this).removeClass("past"); //removes grey
        $(this).addClass("present"); //turns it red
        
        } else {
            $(this).removeClass("past"); // removes grey
            $(this).removeClass("present"); //removes red
            $(this).addClass("future"); //turns it green
        }
    });
}
hourUpdater();
setInterval(hourUpdater, 30000);
// WHEN I click into a time block DONE
    //event listener OR input DONE
// THEN I can enter an event DONE
    //editable text input DONE
// WHEN I click the save button for that time block DONE
// THEN the text for that event is saved in local storage DONE
    //local storage function DONE
let saveBtn = document.querySelector("tbody");
// let appointment = document.querySelectorAll("textarea").value;
// console.log(appointment);
// function saveEvent() {
saveBtn.addEventListener("click", function(event) {
    // event.preventDefault();
    if (event.target.matches(".saveBtn")){
            // console.log(event.target.dataset.time);
            let timeSlot = event.target.dataset.time;
            // console.log(event.target.parentElement.children[1].children[0].value);
            let dataInSlot = event.target.parentElement.children[1].children[0].value;
        localStorage.setItem("timeSlot-"+timeSlot, dataInSlot);
    }
});
// }
// WHEN I refresh the page
// THEN the saved events persist
    //stays in local storage
    $("#hour-9").val(localStorage.getItem("timeSlot-9"));
    $("#hour-10").val(localStorage.getItem("timeSlot-10"));
    $("#hour-11").val(localStorage.getItem("timeSlot-11"));
    $("#hour-12").val(localStorage.getItem("timeSlot-12"));
    $("#hour-13").val(localStorage.getItem("timeSlot-13"));
    $("#hour-14").val(localStorage.getItem("timeSlot-14"));
    $("#hour-15").val(localStorage.getItem("timeSlot-15"));
    $("#hour-16").val(localStorage.getItem("timeSlot-16"));
    $("#hour-17").val(localStorage.getItem("timeSlot-17"));