(function() {
    var borderless = true
    $('#blueimp-gallery').data('useBootstrapModal', !borderless)
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless)
})();
