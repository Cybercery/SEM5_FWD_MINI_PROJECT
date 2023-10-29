//CLOCK SCRIPT

var today = new Date();
var minDate = today.setDate(today.getDate() + 1);

$("#datePicker").datetimepicker({
  useCurrent: false,
  format: "MM/DD/YYYY",
  minDate: minDate,
});

var firstOpen = true;

$("#timePicker")
  .datetimepicker({
    useCurrent: false,
    format: "hh:mm A",
  })
  .on("dp.show", function () {
    if (firstOpen) {
      var time = moment().startOf("day").add(13, "hours"); // Set the time to 01:00 PM
      firstOpen = false;
      $(this).data("DateTimePicker").date(time);
    }
  });

//BILL CALCULATION BELOW

var Bill = 0;
//BUTTON 1
clicked1 = true;
$("#poor1").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor1").click(function () {
  if (clicked1 == true) {
    clicked1 = false;
    Bill = Bill + 1000;
  } else if (clicked1 == false) {
    clicked1 = true;
    Bill = Bill - 1000;
  }
});
//BUTTON 2
clicked2 = true;
$("#poor2").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor2").click(function () {
  if (clicked2 == true) {
    clicked2 = false;
    Bill = Bill + 1000;
  } else if (clicked2 == false) {
    clicked2 = true;
    Bill = Bill - 1000;
  }
});
//BUTTON 3
clicked3 = true;
$("#poor3").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor3").click(function () {
  if (clicked3 == true) {
    clicked3 = false;
    Bill = Bill + 1000;
  } else if (clicked3 == false) {
    clicked3 = true;
    Bill = Bill - 1000;
  }
});
//BUTTON 4
clicked4 = true;
$("#poor4").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor4").click(function () {
  if (clicked4 == true) {
    clicked4 = false;
    Bill = Bill + 1000;
  } else if (clicked4 == false) {
    clicked4 = true;
    Bill = Bill - 1000;
  }
});
//Button 5
clicked5 = true;
$("#poor5").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor5").click(function () {
  if (clicked5 == true) {
    clicked5 = false;
    Bill = Bill + 1000;
  } else if (clicked5 == false) {
    clicked5 = true;
    Bill = Bill - 1000;
  }
});
//Button 6
clicked6 = true;
$("#poor6").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor6").click(function () {
  if (clicked6 == true) {
    clicked6 = false;
    Bill = Bill + 1000;
  } else if (clicked6 == false) {
    clicked6 = true;
    Bill = Bill - 1000;
  }
});

//Button 7
clicked7 = true;
$("#poor7").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor7").click(function () {
  if (clicked7 == true) {
    clicked7 = false;
    Bill = Bill + 1000;
  } else if (clicked7 == false) {
    clicked7 = true;
    Bill = Bill - 1000;
  }
});
//Button 8
clicked8 = true;
$("#poor8").click(function () {
  $(this).toggleClass("table_click");
});
$("#poor8").click(function () {
  if (clicked8 == true) {
    clicked8 = false;
    Bill = Bill + 1000;
  } else if (clicked8 == false) {
    clicked8 = true;
    Bill = Bill - 1000;
  }
});
//Button 9
clicked9 = true;
$("#rich9").click(function () {
  $(this).toggleClass("table_click_rich");
});
$("#rich9").click(function () {
  if (clicked9 == true) {
    clicked9 = false;
    Bill = Bill + 2000;
  } else if (clicked9 == false) {
    clicked9 = true;
    Bill = Bill - 2000;
  }
});
//Button 10
clicked10 = true;
$("#rich10").click(function () {
  $(this).toggleClass("table_click_rich");
});
$("#rich10").click(function () {
  if (clicked10 == true) {
    clicked10 = false;
    Bill = Bill + 2000;
  } else if (clicked10 == false) {
    clicked10 = true;
    Bill = Bill - 2000;
  }
});
//SUBMIT BUTTON
//DATE AND TIME
var date = document.getElementById("thedate");
var time = document.getElementById("timing");
$("#submit").click(function () {
  $("#billing_card").show();

  $(".count").html(function (i, val) {
    return Bill;
  });

  $(".dates").html(function (i, val) {
    return date;
  });

  $(".times").html(function (i, val) {
    return time;
  });
});
