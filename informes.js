/* Lista central de informes del Comité de Canales. Único punto de mantenimiento:
   cuando el PO tenga las URLs finales, se editan aquí y todos los menús se actualizan. */
(function () {
  var INFORMES = [
    { id: 'canales-digitales', nombre: 'Canales Digitales', corto: 'Canales', emoji: '📊', url: 'Canales_Digitales.html' }
    // Agregar aquí los demás informes a medida que existan, p.ej.:
    // { id: 'app-bolivar', nombre: 'App Bolívar', corto: 'App', emoji: '📱', url: '#' }
  ];
  var HOME_URL = 'home.html';

  function render() {
    var cont = document.getElementById('hub-nav');
    if (!cont) return;
    var actual = document.body.getAttribute('data-informe') || '';
    var html = '<a class="hn-home" href="' + HOME_URL + '" aria-label="Ir a la portada de informes">🏠</a>';
    INFORMES.forEach(function (inf) {
      var activo = inf.id === actual ? ' active' : '';
      var href = inf.url || '#';
      html += '<a class="hn-btn' + activo + '" href="' + href + '">' +
        '<span aria-hidden="true">' + inf.emoji + '</span>' + inf.nombre + '</a>';
    });
    cont.innerHTML = html;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
