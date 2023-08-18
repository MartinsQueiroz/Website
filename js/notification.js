function notifyMe() {
   
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification("Bem vindo(a)!");
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Bem vindo(a)!");
        }
      });
    }
}