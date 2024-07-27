for(let a = 0 ; a < 4 ; a++)
{
  let foo = document.getElementById();

  function getRandomNumber(coefficient) {
    return Math.random() * coefficient;
  }

  foo.style.borderBottomLeftRadius = getRandomNumber(75);
  foo.style.borderBottomRightRadius = getRandomNumber(75);
  foo.style.borderTopLeftRadius = getRandomNumber(75);
  foo.style.borderTopRightRadius = getRandomNumber(75);
}
window.addEventListener('scroll', function() {
  var elements = document.getElementsByClassName('changeable');
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // List of colors

  // Function to generate a random color from the colors array
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }


  // Check if the user has scrolled down
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Iterate over each changeable element and change its colors
    Array.from(elements).forEach(function(element) {
      // Change text color
      element.style.color = getRandomColor();

      // Change border color
      element.style.borderTopColor = getRandomColor();
      element.style.borderBottomColor = getRandomColor();
      element.style.borderLeftColor = getRandomColor();
      element.style.borderRightColor = getRandomColor();
      // Change text shadow color
      var shadowColor = getRandomColor();
      element.style.textShadow = `2px 2px 2px ${shadowColor}`;


    });
  }
});

