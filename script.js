document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function choosePath(choice) {
  const output = document.getElementById('story-output');
  if (choice === 'explore') {
    output.textContent = "You venture deeper into the forest and discover a hidden cave.";
  } else if (choice === 'rest') {
    output.textContent = "You take a rest under a tree and are startled by a passing deer.";
  }
}
