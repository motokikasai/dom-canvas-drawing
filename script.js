// main.appendChild("div");

const main = document.querySelector("main");

main.addEventListener("mousemove", e => {
  console.log(e);
  const circle = document.createElement("div");
  main.appendChild(circle);

  circle.style.height = "20px";
  circle.style.width = "20px";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
  circle.style.backgroundColor = "red";
});
