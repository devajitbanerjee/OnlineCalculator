function printBegining() {
	calc.displayHistory.value+=calc.display.value;
}
function printEnd() {
	calc.displayHistory.value+=' = ' + calc.display.value + '\n';
}