function printLyrics(){
	for(i=99;i>=1;i--){
		if(i>2){
			document.getElementById("placeholder").innerHTML+="<span>"+i+"</span> bottles of beer on the wall, "+i+ " bottles of beer <br>"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall <br><br>";
		}
		else if(i==2){
			document.getElementById("placeholder").innerHTML+="<span>"+i+"</span> bottles of beer on the wall, "+i+ " bottles of beer <br>"+"Take one down and pass it around, "+(i-1)+" bottle of beer on the wall <br><br>";
		}
		else if(i<2){
			document.getElementById("placeholder").innerHTML+="<span>"+i+"</span> bottle of beer on the wall, "+i+ " bottle of beer <br>"+"Take one down and pass it around, no more bottles of beer on the wall <br><br>";
			document.getElementById("placeholder").innerHTML+="<span>No more</span> bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall";
		}
	}
}
