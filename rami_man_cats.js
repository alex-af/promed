function loadCat() {
      console.log('catch cat!');
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

observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (!mutation.addedNodes) return

    for (let i = 0; i < mutation.addedNodes.length; i++) {

// RAMI
		if (mutation.addedNodes[i].id=='EvnUslugaFuncRequestDicomViewerEditWindow')
        {
			console.log(mutation.addedNodes[i]);

			tag = document.createElement('a');
			tag.href = "#";
			tag.style.paddingLeft = '10px';
			tag.onclick = function() {window.open('http://10.80.100.6:8080/pacs/wado.php?id_1='+$('[test_id=win_swEvnUslugaFuncRequestDicomViewerEditWindow_pnl_Osnovnie_dannie_textfield_EvnUslugaPar_RamiId]').val()+'&mode=4&viewer=1','_blank');}
			text = document.createTextNode('Открыть снимки в РАМИ');
			tag.appendChild(text);
			document.querySelector('[name=EvnUslugaPar_RamiId]').parentNode.appendChild(tag);
        }

// Человек поиск
		if (mutation.addedNodes[i].id=='swPersonSearchWindow')
        {
			console.log(mutation.addedNodes[i]);

			document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Polis_textfield_Polis_Ser]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Patsient_undefined_Person_Snils]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Polis_textfield_Polis_Ser]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

//console.log(document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Polis_textfield_Polis_Ser]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

			document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Polis]').classList.add('x-panel-collapsed');
			document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Med_dokumenti]').classList.add('x-panel-collapsed');

			Ext.getCmp('swPersonSearchWindow').doLayout();
        }




    }
  });
});


window.addEventListener('DOMContentLoaded', function () {
	observer.observe(document.body, {
	    childList: true
	  , subtree: true
	  , attributes: false
	  , characterData: false
	});
	
	caturl = loadCat().file;
      background_div =  document.querySelector('.x-tab-panel-body.x-tab-panel-body-top');
      console.log(typeof(background_div));
      if (typeof(background_div)!='undefined')
      {
            
            document.querySelector('.x-tab-panel-body.x-tab-panel-body-top').style.setProperty('background-image','url('+caturl+')');
            document.querySelector('.x-tab-panel-body.x-tab-panel-body-top').style.setProperty('background-size','cover');
      }
});
			
// stop watching using:
function stopWatching()
{
	observer.disconnect();
}

console.log('loaded');
