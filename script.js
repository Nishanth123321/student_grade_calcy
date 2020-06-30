function calcy()

{

	let wp=parseInt(document.getElementById('wp').value);
	let maths=parseInt(document.getElementById('maths').value);
	let cp=parseInt(document.getElementById('cp').value);
	let physics=parseInt(document.getElementById('physics').value);
	let totalmarks=wp+maths+cp+physics;
	let avg=totalmarks/4;
	let status="fail";
	if(avg>=35)
	{
		status="pass";
	}
	
        let ans="The total marks you got: "+totalmarks +" and the average you got:"+avg + " and the status is "+status +" ";
        alert(ans);
}