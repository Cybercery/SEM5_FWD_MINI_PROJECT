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
