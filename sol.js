// just rotated the problem to 90 degree
// [
// 	{
// 		data:[],
// 		type:'W',
// 		length:3
// 	},
// 	{
// 		data:[],
// 		type:'A',
// 		length:3
// 	},
// 	{
// 		data:[],
// 		type:'A',
// 		length:4
// 	},
// 	{
// 		data:[],
// 		type:'M',
// 		length:4
// 	},
// 	{
// 		data:[],
// 		type:'A',
// 		length:4
// 	},
// 	{
// 		data:[]
// 		length:2
// 		type:'A'
// 	},
// 	{
// 		data:[]
// 		length:2,
// 		type:'M'
// 	},
// 	{
// 		data:[]
// 		length:2
// 		type:'A'
// 	},
// 	{
// 		data:[],
// 		length:4,
// 		type:'A'
// 	},
// 	{
// 		data:[],
// 		length:4,
// 		type:'M'
// 	},
// 	{
// 		data:[],
// 		length:4,
// 		type:'M'
// 	},
// 	{
// 		data:[],
// 		length:4,
// 		type:'W'
// 	}
// ]

function obj_maker(arr,index){

	var new_arr=[];
	for(var i=0;i<arr[1];i++){
		var obj={
			data:[],
			length:arr[0]
		}
		if(index=='first'){
			if(i==0){
				obj.type='w'
			}else if(i>0 && i<arr[1]-1){
				obj.type='m'
			}else if(i==arr[1]-1 && i!=0){
				obj.type='a'
			}
		}else if(index=='last'){
			if(i==arr[1]-1){
				obj.type='w'	
			}else if(i>0 && i<arr[1]-1){
				obj.type='m'
			}else if(i==0 && arr[1]-1!=0){
				obj.type='a'
			}
		}else if(index=='other'){
			if(i==0||i==arr[1]-1){
				obj.type='a'
			}else{
				obj.type='m'
			}
		}

		new_arr.push(obj)
	}
	return new_arr
}


function insert_data(arr,number){
	var data=fill_isle(arr,1)
	var window_data=fill_window(data['arr'],data['count'])
	var middle_data=fill_middle(window_data['arr'],window_data['count']);

	return middle_data['arr']
}

function fill_isle(arr,count){

	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='a'){
			if(arr[i]['data'].length<arr[i]['length']){
				arr[i]['data'].push(count)
				count++
			}
		}
	}
	if(check_isle(arr)){
		return fill_isle(arr,count)
	}else{
		return {arr:arr,count:count}
	}
}

function fill_window(arr,count){
	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='w'){
			if(arr[i]['data'].length<arr[i]['length']){
				arr[i]['data'].push(count)
				count++
			}
		}
	}
	if(check_window(arr)){
		return fill_window(arr,count)
	}else{
		return {arr:arr,count:count}
	}
}

function fill_middle(arr,count){
	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='m'){
			if(arr[i]['data'].length<arr[i]['length']){
				arr[i]['data'].push(count)
				count++
			}
		}
	}
	if(check_middle(arr)){
		return fill_middle(arr,count)
	}else{
		return {arr:arr,count:count}
	}
}

function check_isle(arr){
	var data=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='a'){
			if(arr[i]['data'].length<arr[i]['length']){
				data.push(true)
			}else{
				data.push(false)
			}	
		}
	}

	if(data.indexOf(true)>-1){
		return true
	}else{
		return false
	}	
}

function check_window(arr){
	var data=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='w'){
			if(arr[i]['data'].length<arr[i]['length']){
				data.push(true)
			}else{
				data.push(false)
			}	
		}
	}

	if(data.indexOf(true)>-1){
		return true
	}else{
		return false
	}	
}

function check_middle(arr){
	var data=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i].type=='m'){
			if(arr[i]['data'].length<arr[i]['length']){
				data.push(true)
			}else{
				data.push(false)
			}	
		}
	}

	if(data.indexOf(true)>-1){
		return true
	}else{
		return false
	}		
}



function sitting_mgmt(arr,number){
	var final_arr=[];

	for(var i=0;i<arr.length;i++){
		var objArr
		if(i==0){
		  objArr=obj_maker(arr[i],'first')
		}else if(i==arr.length-1){
			objArr=obj_maker(arr[i],'last')
		}else{
			objArr=obj_maker(arr[i],'other')
		}
		final_arr=final_arr.concat(objArr)
	}
	
	return insert_data(final_arr,number);
}


console.log(sitting_mgmt([[3,4],[4,3],[3,1],[4,4]],30))
