let gridBlockArr = Array.from(document.querySelectorAll(".grid-block"));
// let colorSelector = document.getElementById("colorSelector");
let resetBtn = document.getElementById("reset-btn");

gridBlockArr.forEach((gridBlock) => {
	gridBlock.addEventListener("click", () => {
		gridBlock.classList.toggle("filled");
	});
});

function resetDrawing() {
	gridBlockArr.forEach((gridBlock) => {
		gridBlock.classList.remove("filled");
	});
	// colorSelector.value = "#fff";
}
resetBtn.addEventListener("click", resetDrawing);
