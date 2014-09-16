//lots of issues in regards to time subtraction. Possibly fixed by using getTime().
//note to Simone: Sublime 2 is a nice text editor :)

var periods = [['School',8,50], 
				['Period 1',9,55], 
				['Period 2',10,55],
				['Recess',11,20],
				['Period 3',12,35],
				['Lunch',13,15],
				['Period 4',14,15],
				['Period 5',15,15],
				['Test',19,36]];

var tues_periods = [];

//difference between two dates in number of days
function date_diff(date1, date2){
	var dayinms = 24*60*60*1000;

	var date1ms = date1.getTime();
	var date2ms = date2.getTime();

	//return number of days
	return (date1ms - date2ms)/dayinms;
}

time=setInterval(function(){ 

//execute function every second. This can probably be made more efficient by including
//less commands in the function body. 

	var now = new Date();

	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();

	var index = 0;
	//index gives PREVIOUS period number e.g. if the time slot is in range P2 -> P3 index returns P2

	for (i = 0; i < periods.length-1; i++) {

		if (h >= periods[i][1] && h <= periods[i+1][1]){
			index = i;
		}

		else if (h > periods[i][1] || h < periods[i][1]) {
			//the time is before/after school. Very ambiguous. 
		}
	}
	
	

	//consider day of the week here
	
	

	var hour = periods[index+1][1];
	var min = periods[index+1][2];
	
	//THE FOLLOWING CODE BLOCK HAS ISSUES
	//time subtraction (for min) returns the wrong value
	var h_remaining = hour - h;
	var min_remaining = min - m;
	var sec_remaining = 59 - s;

	countdown_line = '';
	countdown_line = h_remaining.toString() + 'h ' + min_remaining.toString() + 'm ' + sec_remaining.toString() + 's';

	//text on top of countdown
	document.getElementById('event').innerHTML = periods[index+1][0];

	//create countdown
	document.getElementById('countdown').innerHTML = countdown_line;
	
},1000);
