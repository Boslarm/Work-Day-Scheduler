// current day is displayed at the top of the calendar DONE
let showDay =moment().format('LLLL');
$("#currentDay").text(showDay);
//time blocks for standard business hours DONE
    //9am-5pm DONE
    //9 rows DONE
    //3 columns DONE
        //time DONE
        //event DONE
        //save DONE
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //past = grey
    //current = red
    //future = green
    //time formats the colors
function hourUpdater() {
    let currentHour = moment().hours();
};
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