// wraps the code in a function that runs when the page loads


  // code to store current hour in a variable
  var nowHour = dayjs().format('H');
    console.log(nowHour);

  // code to store current date in a variable
  var nowDate = dayjs().format('MM/DD/YYYY');
    console.log(nowDate);

  // jquery code to store the time blocks in a variable array
  var timeBlock = $(".time-block");
    console.log(timeBlock);
  
  // code to store the save button in a variable
  $(".saveBtn").on("click", function () {
    // grabs the siblings of the save button and stores the value of the description class in a variable
    var text = $(this).siblings(".description").val();
    // grabs the parent of the save button and stores the id attribute in a variable
    var time = $(this).parent().attr("id");
    // stores the text and time in local storage
      localStorage.setItem(time, text);
      console.log(text);
  });

  // code to update the colors of the time blocks based on the current time
  function updateColors() {
    for (var i = 0; i < timeBlock.length; i++) {
      var timeBlockHour = parseInt(timeBlock[i].getAttribute("id"));
      console.log(timeBlockHour);
      if (timeBlockHour < nowHour) {
        $(timeBlock[i]).addClass("past");
      } else if (timeBlockHour > nowHour) {
        $(timeBlock[i]).addClass("future");
      } else {
        $(timeBlock[i]).addClass("present");
      }
    }
  }

  // code to display saved text from local storage to the right time block using the id attribute of each time-block.
  function localStorageRetrieve() {
    for (let i = 9; i <= 15; i++) {
      $(`#${i} .description`).val(localStorage.getItem(`${i}`));
    }
  }

  // executed functions
  $("#currentDay").text(nowDate);
  localStorageRetrieve();
  updateColors();
