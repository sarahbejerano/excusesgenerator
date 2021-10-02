window.onload = function() {
  function generateExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  }

  function displayExcuse() {
    var excuse = generateExcuse();
    document.getElementById("excuse").innerHTML = excuse;
    var color = generateColor();
    document.getElementById("excuse").style = "color:" + color;
  }

  function generateColor() {
    var colors = ["red", "green", "cyan", "yellow"];
    var colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
  }
};
