export function loadImage(pathSrc) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = pathSrc;
  });
}

export function loadJson(pathSrc) {
  return new Promise(resolve => {
    let xhr = new XMLHttpRequest();

    xhr.overrideMimeType("application/json");

    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == "200") {
        resolve(JSON.parse(this.responseText));
      }
    };

    xhr.open("GET", pathSrc, true);
    xhr.send();
  });
}
