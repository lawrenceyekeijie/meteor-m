// Quiz Logic
document.addEventListener("DOMContentLoaded", function() {
  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
    quizForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const q1 = quizForm.q1.value;
      const q2 = quizForm.q2.value;
      if (q1 === "NASA" && q2 === "Meteorite") {
        let name = prompt("Great job! Enter your name for the certificate:");
        showCertificate(name);
      } else {
        alert("Oops! Try again.");
      }
    });
  }
});

function showCertificate(name) {
  document.getElementById("quiz-section").innerHTML = `
    <div class="certificate">
      <h2>🌍 Asteroid Defender Certificate</h2>
      <p>This certifies that <b>${name}</b> has helped save Earth from asteroid impact!</p>
    </div>
  `;
}
