const charsetMeta = document.createElement("meta");
charsetMeta.setAttribute("charset", "utf-8");

const viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width, initial-scale=1, shrink-to-fit=no";

var titleElement = document.createElement("title");
titleElement.textContent = "L'ultima Cena Pizzeria!";

const bootstrapLink = document.createElement("link");
bootstrapLink.rel = "stylesheet";
bootstrapLink.href =
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
bootstrapLink.integrity =
  "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
bootstrapLink.crossOrigin = "anonymous";

document.head.appendChild(bootstrapLink);
document.head.appendChild(viewportMeta);
document.head.appendChild(bootstrapLink);
document.head.appendChild(titleElement);

document.write(
  '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>',
  '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous" ></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.0/mustache.js" integrity="sha256-ILqMXUXPam8LdBwbq5W6r1m0NxeP8ydLFqrYN+bMCeI=" crossorigin="anonymous"></script>'
);
