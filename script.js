
document.querySelectorAll('.read-more-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
      var moreContent = this.parentElement.nextElementSibling; // Menemukan elemen .more yang berhubungan
      if (moreContent.style.display === "none") {
          moreContent.style.display = "block";
          this.textContent = "Baca Lebih Sedikit";
      } else {
          moreContent.style.display = "none";
          this.textContent = "Baca Lebih Banyak";
      }
  });
});

  function updateTimer() {
    var countdownDate = new Date("2024-02-14T00:00:00").getTime();
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Waktu Habis!";
    }
  }

  var x = setInterval(updateTimer, 1000);
  updateTimer(); // Panggil fungsi ini segera agar timer muncul tanpa menunggu 1 detik pertama