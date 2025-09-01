// Função para inicializar o mapa do Google Maps
function initMap() {
    const chile = { lat: -33.4489, lng: -70.6693 }; // Coordenadas de Santiago, Chile
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: chile,
    });
    // Você pode adicionar marcadores de pontos turísticos aqui se quiser
    // new google.maps.Marker({
    //   position: { lat: -33.4489, lng: -70.6693 },
    //   map: map,
    //   title: "Santiago"
    // });
}

// Configuração da música e do controle de volume
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const volumeSlider = document.getElementById("volume-slider");

    // Tocar a música automaticamente
    // OBS: Devido a restrições dos navegadores, a música só pode começar a tocar após uma interação do usuário
    // Para testar, você pode adicionar um botão de 'play' no HTML.
    music.volume = volumeSlider.value;
    // Opcional: Adicione um listener para começar a tocar a música quando o usuário clicar em qualquer lugar
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play().catch(e => console.log("Erro ao tocar a música:", e));
        }
    }, { once: true }); // Apenas uma vez

    // Sincronizar o volume
    volumeSlider.addEventListener("input", () => {
        music.volume = volumeSlider.value;
    });
});
