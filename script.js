<script>
var x=0;
catalog();
function catalog()
{
	var i;
	var imag=document.getElementsByClassName("slide");
	for(i = 0 ; i< imag.length ; i++)
	{
		imag[i].style.display= "none";
	}
	x++;
	if(x>imag.length) {x=1}
	
	imag[x-1].style.display="block";
	setTimeout(catalog, 3000);
}
</script>