/**
 * Created by lin on 2017/7/15.
 */

function Es6Test() {
	class Point{
		constructor(x,y){
			this.x = x;
			this.y = y;
		}
		toString(){
			return '(' + this.x + ',' + this.y + ')';
		}
	}
	console.log((new Point(1,2)).toString());
}
module.exports = Es6Test;