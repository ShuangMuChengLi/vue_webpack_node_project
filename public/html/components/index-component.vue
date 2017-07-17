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
		        constructor(...args){
			        this.args = args
		        }
		        *[Symbol.iterator](){
			        for(let arg of this.args){
				        yield arg;
			        }
		        }
	        }
	        var o = new Point('hello' , 'world');
	        for(let x of o){
		        console.log(x);
	        }
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
