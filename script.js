// Countdown Timer
const eventDate = new Date("Aug 25, 2025 00:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    timer.innerHTML = "🎉 It's the Birthday Today!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
