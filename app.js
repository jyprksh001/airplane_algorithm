
function multi_dim(numrows, numcols){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j]=0;
      }
      arr[i] = columns;
    }
    return arr;
}

function sitting_mgmt(number,arr){
	var arrangement=[]
	for(var i=0;i<arr.length;i++){
		var new_arr=multi_dim(arr[i][0],arr[i][1]);
		arrangement.push(new_arr)
	}

	return arrangement
}



function arrange_sitting(arr,number){
	var curr_arr=0;
	var current_row=0;
	for(i=0;i<=number;i++){
		if(curr_arr==0 || curr_arr==arr.length-1){

		}	
	}
}




//row x column

console.log(sitting_mgmt(30,[ [3,2], [4,3], [2,3], [3,4] ]))
	1,2  1,2,3 2,3,4  3,4,5,6
	1,2, 1,2,3 2,3,4  3,4,5,6
	1,2  1,2,3        3,4,5,6
		 1,2,3

[
	{
		data:[],
		type:'W',
		length:3
	},
	{
		data:[],
		type:'A',
		length:3
	},
	{
		data:[],
		type:'A',
		length:4
	},
	{
		data:[],
		type:'M',
		length:4
	},
	{
		data:[],
		type:'A',
		length:4
	},

	{
		data:[]
		length:2
		type:'A'
	},

	{
		data:[]
		length:2,
		type:'M'
	},
	
	{
		data:[]
		length:2
		type:'A'
	},

	{
		data:[],
		length:4,
		type:'A'
	},
	{
		data:[],
		length:3,
		type:'M'
	},
	{
		data:[],
		length:3,
		type:'M'
	},
	{
		data:[],
		length:3,
		type:'W'
	}
]