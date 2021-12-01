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

			//document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Polis]').classList.add('x-panel-collapsed');
			//document.querySelector('[test_id=win_swPersonSearchWindow_pnl_Med_dokumenti]').classList.add('x-panel-collapsed');

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
});
			
// stop watching using:
//
function stopWatching()
{
	observer.disconnect();
}

console.log('loaded');
