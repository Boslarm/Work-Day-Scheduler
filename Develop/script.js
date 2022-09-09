// current day is displayed at the top of the calendar DONE
var showDay =moment().format('LLLL');
$("#currentDay").text(showDay);
//time blocks for standard business hours DPNE
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
// WHEN I click into a time block
    //event listener OR input
// THEN I can enter an event
    //editable text input
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    //local storage function
// WHEN I refresh the page
// THEN the saved events persist
    //stays in local storage