<template>
    <div>
        cms
    </div>
</template>

<script>
    var es6Test = require('../../js/service/es6');
    export default {
        data () {
            return {

            }
        },
        watch: {

        },
        created:function () {
	        es6Test();
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
        },
        mounted:function () {

        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../../css/index";
</style>
