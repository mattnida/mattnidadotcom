document.addEventListener('DOMContentLoaded', function () {
  const viewCredits = document.querySelector('.view-credits');
  const credits = document.querySelector('.credits');

  viewCredits.addEventListener('click', function () {
    credits.classList.toggle('open');
    if (credits.classList.contains('open')) {
      viewCredits.textContent = 'Hide Credits';
    } else {
      viewCredits.textContent = 'Click here for a full list of broadcast credits';
    }
  });
});
