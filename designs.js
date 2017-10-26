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

	$('#sizePicker').submit((e) => {
		//Prevent reloading on submit
		e.preventDefault();
		const w = $('#input_width').val();
		const h = $('#input_height').val();
		makeGrid(w, h);
	});
});