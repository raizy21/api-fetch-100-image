// fetching data from an API
for (let i = 0; i < 100; i++) {
  // 100 images
  let img = document.createElement("div"); // create a div element
  img.className = "image"; // add a class name to the div element
  img.style.backgroundImage =
    "url(https://picsum.photos/200/120?random=" + i + ")"; // add image

  img.style.width = "200px"; // set width
  img.style.height = "120px"; // set height
  img.style.backgroundSize = "cover"; // set background size
  img.style.margin = "5px"; // set margin
  img.style.display = "inline-block"; // makes them appear in a row

  document.body.appendChild(img); // append the div element to the body
}
