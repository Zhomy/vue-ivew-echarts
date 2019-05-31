
<template>
        <div class="codeContain">
            <div class="codeMain">
                <div class="codeSearch">
                       <input ref="getValue" type="text" placeholder="请输入溯源码" style="font-size:14px;width:100%;height:100%;border:1px solid #e2e2e2;padding-left:10px;" > 
                       <a class="sButton" @click="sButton">     
                            <Button type="primary" @click="modal1 = true" style="font-size:18px;!important">搜索</Button>
                            <Modal
                                v-model="modal1"
                                title="Common Modal dialog box title"
                                @on-ok="ok"
                                @on-cancel="cancel">
                                <p>Content of dialog</p>
                                <p>Content of dialog</p>
                            </Modal>
                       </a>
                    </div>
            </div>
        </div>
</template>
<script>

export default { 
    data(){789
        return{
         
        }
    },
    created(){

    },
    mounted() {
    this.ajaxGet();
    },
    methods:{

        sButton(){
            let self = this;
            let code = self.$refs.getValue.value
            if(code === ''){
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>溯源码不能为空</p>',
                    onOk: () => {
                        this.$Message.info('确定');
                    },
                    onCancel: () => {
                        this.$Message.info('取消');
                    }
                });
            }
            if(code !== ''){
                console.log("getValue.value",self.$refs.getValue.value)
                self.$router.push({ 
                    name: "CodeManage",
                    query:{
                        sourceCode:code,
                    }    
                });
            }
        }
    }
}
</script>
<style scoped>
.codeContain{
    width: 100%;
    height: 318px;
    padding:40px;
} 
.codeMain{
    background-color: #fff;
    width: 100%;
    height: 100%;
}
.codeSearch{  
    transform: translate(50%,50%);
    width: 511px;
	height: 50px;
    /* border: solid 1px #e2e2e2; */
    position: absolute;
    /* margin-left: 83px; */
    margin-top: 61px;
}
.sButton{
    text-align: center;
    width: 160px;
    height: 50px;
    font-size:20px;
    color:#fff!important;
    line-height: 50px;
	background-color: #52cefc;
	border-radius: 10px;
    position: absolute;
    margin-top: -50px;
    margin-left: 600px;
}
</style>


