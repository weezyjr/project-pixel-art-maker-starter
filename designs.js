$(() => {
	function makeGrid(w, h) {
		const tr = '<tr></tr>';
		const td = '<td></td>';
		const table = $('#pixel_canvas');
		let row, pixel;

		for (let i = 0; i < h; i++) {
			table.append(tr);
			row = table.children().last();
			for (let j = 0; j < w; j++) {
				row.append(td);
				pixel = row.children().last();
				pixel.attr('class', 'pixel');
			}
		}
	}

	$('#pixel_canvas').on('click', '.pixel', (e) => {
		let color = $('#colorPicker').val();
		let pixels = $('.pixel');

		for (const pixel of pixels)
			if (e.target == pixel) {
				//a flag to check if the pixel is already drawed
				$(pixel).attr('drawed', 'true');
				$(pixel).css('background-color', color);
			}
	});

	$('#pixel_canvas').on('mouseenter', '.pixel', (e) => {
		let color = $('#colorPicker').val();
		let pixels = $('.pixel');

		for (const pixel of pixels)
			if (e.target == pixel && $(pixel).attr('drawed') != 'true') {
				$(pixel).css('background-color', color);
			}

	});

	$('#pixel_canvas').on('mouseleave', '.pixel', (e) => {
		let pixels = $('.pixel');

		for (const pixel of pixels)
			if (e.target == pixel && $(pixel).attr('drawed') != 'true') {
				$(pixel).css('background-color', 'initial');
			}

	});

	$('#sizePicker').submit((e) => {
		//Prevent reloading on submit
		e.preventDefault();
		const w = $('#input_width').val();
		const h = $('#input_height').val();
		makeGrid(w, h);
	});
});