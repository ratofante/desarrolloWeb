document.getElementById("see1").addEventListener("click", showAnswer);
function showAnswer()
{
	var answer = document.getElementById("see1answer");
	var display = getComputedStyle(answer).display;
	if(display == "none")
	{
		answer.style.display == "block";
	} 
	else
	{
		answer.style.display == "none";
	}
}