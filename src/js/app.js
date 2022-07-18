let gridBlock = Array.from(document.querySelectorAll(".grid-block"));
let resetBtn = document.getElementById("reset-btn");

gridBlock.forEach((gridBlock) => {
	gridBlock.addEventListener("click", () => {
		gridBlock.classList.toggle("filled");
	});
});

function resetDrawing() {
	gridBlock.forEach((gridBlock) => {
		gridBlock.classList.remove("filled");
	});
}

resetBtn.addEventListener("click", resetDrawing);
