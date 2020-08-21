		var items = [ 
			"burger", "pizza", "taco", 
			"biryani", "samosa", "rasgulla", "pav",
			"dosa", "idli",
			];
		
		search = function(){

			let x = document.getElementById('input').value;
			x = x.trim().toLowerCase().replace(/ /g, "");

			for(let i=0; i<items.length; i++){
					let item = items[i];
						if( x === item.substring(0, x.length) || x.includes(item)){
							match(item);
						}
						else{
							noMatch(item);
						}
				}
		}

		match = function(x){
			document.getElementById(x).style.display = "inline-block";
		}

		noMatch = function(x){
			document.getElementById(x).style.display = "none";
		}

		off = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "none";
			}
		}	
		
		on = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "inline-block";
			}
		}	

		home = function(){
			let r = document.getElementById('root');
			r.style.display = "none";
			let x = document.querySelectorAll("p.america");
			let y = document.querySelectorAll("p.india");
			let z = document.querySelectorAll("p.southindia");
			on(x);
			on(y);
			on(z);
		}

		america = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "AMERICAN";
			let x = document.querySelectorAll("p.america");
			let y = document.querySelectorAll("p.india");
			let z = document.querySelectorAll("p.southindia");
			on(x);
			off(y);
			off(z);
		}
		india = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "INDIAN";
			let x = document.querySelectorAll("p.america");
			let y = document.querySelectorAll("p.india");
			let z = document.querySelectorAll("p.southindia");
			on(y);
			off(x);
			off(z);

		}
		southindia = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "SOUTHINDIAN";
			let x = document.querySelectorAll("p.america");
			let y = document.querySelectorAll("p.india");
			let z = document.querySelectorAll("p.southindia");
			on(z);
			off(x);
			off(y);
		}