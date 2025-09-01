// Aguarda o DOM estar completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Controle de Volume do Áudio
    const music = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volume-slider');

    // Sincroniza o volume do áudio com o valor inicial do slider
    music.volume = volumeSlider.value;

    // Adiciona um "ouvinte de evento" ao slider
    volumeSlider.addEventListener('input', function() {
        // Atualiza o volume do áudio conforme o slider é movido
        music.volume = this.value;
    });

    // 2. Inicialização do Google Maps
    window.initMap = function() {
        // Posição de Santiago, Chile
        const santiago = { lat: -33.4489, lng: -70.6693 };
        
        // Cria uma nova instância do mapa
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: santiago,
        });

        // Adiciona um marcador no mapa
        new google.maps.Marker({
            position: santiago,
            map: map,
            title: 'Santiago, Chile',
        });
    };
});