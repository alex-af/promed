function loadCat() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://aws.random.cat/meow', false);
      xhr.send();

      if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
        // вывести результат
        return(JSON.parse(xhr.responseText));
      }
    }

window.addEventListener('DOMContentLoaded', function () {
      caturl = loadCat().file;
      background_div =  document.querySelector('.x-tab-panel-body.x-tab-panel-body-top');
      if (typeof(background_div)!='undefined')
      {
            document.querySelector('.x-tab-panel-body.x-tab-panel-body-top').style.setProperty('background-image','url('+caturl+')');
            document.querySelector('.x-tab-panel-body.x-tab-panel-body-top').style.setProperty('background-size','cover');
      }
})


