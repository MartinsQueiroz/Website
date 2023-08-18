if ("geolocation" in navigator) {
    // A geolocalização é suportada
  } else {
    // A geolocalização não é suportada
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Utilize as coordenadas da posição como necessário
  }
  
  function error() {
    // Trate o erro de obtenção da posição
  }

  document.getElementById("obter-localizacao").addEventListener("click", function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocalização não suportada");
    }
  });