// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

$(document).ready(function () {

	// chiamata ajax all'api di boolean per avere i 10 dischi
	$.ajax({

		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: 'GET',

		success: function (data) {

			var dischi = data.response;

			generaDischi(dischi);

		},

		error: function () {
			alert('quaclosa non va');
		}

	}); // end ajax


	// handlebars
	var source = $('#disco-template').html();
	var template = Handlebars.compile(source);

	function generaDischi(arrayDischi) {

		for (var i = 0; i < arrayDischi.length; i++) {

			var singoloDisco = arrayDischi[i];

			// genera template con i parametri passati
			var htmlGenerato = template(singoloDisco);

			$('.cds-container').append(htmlGenerato);
		}
	}


	$('select').change(function() {

		var ricerca = $('select').val();

		alert('HAI VAMBIATO SELECT, IL SUO VALORE è ' + ricerca);

		// $('.cd').each(function() {

		// 	var ricerca = $('.cd span .year').val();

		// 	var cd = $('.cd');

		// 	if (cd.includes(ricerca)) {
		// 		$(this).show();
		// 	} else {
		// 		$(this).hide();
		// 	}
		

		// });


	});



}); // end document ready