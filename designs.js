$(() => {
	function makeGrid() {
		
	}
	
	$('#sizePicker').submit((e)=>{
		//Prevent reloading on submit
		e.preventDefault();
		makeGrid();
	});
});