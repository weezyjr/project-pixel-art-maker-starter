function makeGrid(w, h) {
	const table = $('#pixel_canvas')[0];

	for (let i = 0; i < h; i++) {
		const row = table.insertRow(i);
		for (let j = 0; j < w; j++) {
			const pixel = row.insertCell(j);
			$(pixel).on({
				click: () => {
					const color = $('#colorPicker').val();
					//a flag to check if the pixel is already drawed
					$(pixel).attr('drawed', 'true');
					$(pixel).css('background-color', color);
					$(pixel).css('opacity', '1');

				},
				mouseenter: () => {
					const color = $('#colorPicker').val();
					if ($(pixel).attr('drawed') != 'true') {
						$(pixel).css('background-color', color);
						$(pixel).css('opacity', '0.7');
					}
				},
				mouseleave: () => {
					if ($(pixel).attr('drawed') != 'true') {
						$(pixel).css('background-color', 'initial');
						$(pixel).css('opacity', '1');
					}
				}
			});
		}
	}
}

$('#sizePicker').submit((e) => {
	//Prevent reloading on submit
	e.preventDefault();
	const width = $('#input_width').val();
	const height = $('#input_height').val();
	makeGrid(width, height);
});