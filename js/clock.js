$(document).ready(function () {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2024-11-10 15:00", "Asia/Ho_Chi_Minh");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false,
    });
  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {},
      },
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function () {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock = countTime();
      }
      setTimeout(function () {
        checktime();
      }, 1000);
    }

    function countTime() {
      return $(".clock").FlipClock(0, {
        clockFace: "DailyCounter",
        countdown: false,
        callbacks: {
          stop: function () {},
        },
      });
    }
  }
});
