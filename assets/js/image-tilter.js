const image = document.querySelector(".tilt");

image.addEventListener("mousemove", event => {
  const { top, left, width, height } = event.target.getBoundingClientRect();

  const middleX = left + width / 2;
  const middleY = top + height / 2;

  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / (width / 2);
  const offsetY = (middleY - clientY) / (height / 2);

  event.target.style.transform = `perspective(1000px) rotateY(${offsetX * 10}deg) rotateX(${offsetY * 10}deg) scale3d(1, 1, 1)`;
});

image.addEventListener("mouseleave", event => {
  event.target.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
});
