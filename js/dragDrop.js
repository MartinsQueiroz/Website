function dropHandler(event) {
    console.log("File(s) dropped");
  
    ev.preventDefault();
  
    if (event.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === "file") {
          var file = event.dataTransfer.items[i].getAsFile();
          console.log("... file[" + i + "].name = " + file.name);
        }
      }
    } else {
      for (var i = 0; i < event.dataTransfer.files.length; i++) {
        console.log(
          "... file[" + i + "].name = " + event.dataTransfer.files[i].name,
        );
      }
    }
  }

  