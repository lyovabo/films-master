class Some {
	static logInput(input){
		input.sort(function(a, b){
    	if(a.name < b.name) return -1;
    	if(a.name > b.name) return 1;
    	return 0;
		})
		console.log(input);
		return input;
	}

}
export default Some.logInput;

// export default class Some {
// 	constructor(item){
// 		this.item = item;
// 	}
// }