// main.appendChild("div");

const main = document.querySelector("main");

const painter = e => {
  // console.log(e);
  const circle = document.createElement("div");
  main.appendChild(circle);

  circle.style.height = "20px";
  circle.style.width = "20px";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
  circle.style.backgroundColor = "hotpink";
};

main.addEventListener("mousemove", painter);

const stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", e => {
  console.log(e);
  main.removeEventListener("mousemove", painter);
});

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", e => {
  console.log(e);
  main.addEventListener("mousemove", painter);
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  let divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];

    main.removeChild(div);
  }
});
