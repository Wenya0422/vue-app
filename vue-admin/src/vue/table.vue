<template>
<div id="right" >
    <div class="commonBody">
        <p class="x_title">table</p>
        <div class="commonTable" style=" margin-bottom: 20px;">
            <div class="search clearfix">
                <p class="posrel">
                    <span>时间：</span>
                    <calendar
                        :value="today"
                        :placeholder="placeholder"
                        v-on:selected="getData"
                    >
                    </calendar>
                </p>
                <p style="overflow: hidden">
                    <input type="button" class="btn btn-danger" value="新增" style="width: 115px; float: right; margin-right: 20px" @click="addIfo()">
                </p>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered table-hover text-center" id="tabletList">
                <thead>
                    <tr>
                        <th class="bgColor" width="30px"></th>
                        <th class="bgColor">创建时间</th>
                        <th class="bgColor">用户电话号码</th>
                        <th class="bgColor">用户地址</th>
                        <th class="bgColor">用户姓名</th>
                        <th class="bgColor">编辑</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(x,index) in list">
                        <td>
                            <!-- <input type="checkbox"> -->
                            <input type="checkbox" class="checkBox" v-model="x.checked" @change="selectSingle(index)" :value="x.checked" style="zoom:140%">
                        </td>

                        <td v-text="format(x.createTime)"></td>
                        <td v-text="x.userPhone"></td>
                        <td v-text="x.userAdress"></td>
                        <td v-text="x.userName"></td>
                        <td>
                            <a href="javascript:;" @click="deletes(index)">删除</a>
                            <a href="javascript:;" @click="modify(index)">修改</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <input type="checkbox" class="checkAll" v-model="allChecked" @change="selectAll"> 全选
                 <!-- {{'('+ checkedCount + '条)' }}  -->
                <a href="javascript:;" style="margin-left:20px" @click="modify2(index)">批量删除</a>
            </p>
            <div class="pager">
                    <button class="btn btn-primary" :disabled="currentPage == 1" @click="prevPage" v-bind:style="styleObject">上一页</button>
                    <span v-if="total.page !== 1" class="page-index" @click="goPage(1)"  v-bind:style="styleObject">1</span>
                    <span v-if="preClipped" class="page-index">...</span>

                    <span v-for="index in pages" class="page-index" @click="goPage(index)" v-if="index==currentPage" v-bind:class="{ active: isActive }" >{{index}}</span>
                    <span class="page-index" @click="goPage(index)" v-else >{{index}}</span>

                    <span v-if="backClipped" class="page-index">...</span>
                    <span class="page-index" @click="goPage(total.page)" v-bind:style="styleObject">{{total.page}}</span>
                    <button class="btn btn-primary" :disabled="currentPage == total.page" @click="nextPage" style="margin-left:5px" v-bind:style="styleObject">下一页</button>
                </div>
        </div>
    </div>

    <!-- 新增 -->
    <sweet-modal ref="dialog" class="dialog">
        <h3>新增</h3>
        <table>
            <tr>
                <td>用户姓名:</td>
                <td>
                    <input type="text" v-model="userName" class="form-control">
                </td>
            </tr>
            <tr>
                <td>用户电话号码:</td>
                <td>
                    <input type="text" v-model="userPhone" class="form-control">
                </td>
            </tr>
            <tr>
                <td>用户地址:</td>
                <td>
                    <input type="text" v-model="userAdress" class="form-control">
                </td>
            </tr>
        </table>
        <button @click="cancelAdd" type="button" class="btn btn-default">取消</button>
        <button @click="submitAdd" type="button" class="btn btn-danger">确定</button>
    </sweet-modal>
    <!-- 修改 -->
    <sweet-modal ref="dialog2" class="dialog">
        <h3>修改</h3>
        <table>
            <tr>
                <td>用户姓名:</td>
                <td>
                    <input type="text" v-model="current.userName" class="form-control">
                </td>
            </tr>
            <tr>
                <td>用户电话号码:</td>
                <td>
                    <input type="text" v-model="current.userPhone" class="form-control">
                </td>
            </tr>
            <tr>
                <td>用户地址:</td>
                <td>
                    <input type="text" v-model="current.userAdress" class="form-control">
                </td>
            </tr>
        </table>
        <button @click="cancelEdit" type="button" class="btn btn-default">取消</button>
        <button @click="submitEdit" type="button" class="btn btn-danger">确定</button>
    </sweet-modal>
    <!-- 批量删除弹窗 -->
        <sweet-modal ref="dialog3" class="dialog">
            <p style="height: 30px"></p>
            <p>您是否要将所勾选的删除</p>
            <button @click="cancelAllDelete" type="button" class="btn btn-default">取消</button>
            <button @click="submitAllDelete" type="button" class="btn btn-danger">确定</button>
        </sweet-modal>
</div>
</template>
<script>
    import calendar from './calendar.vue'
    import sweetModal from './sweet-modal.vue'
    export default {
        data() {
            return {
                placeholder : '请选择日期',
                popup: false,
                collapsed: false,
                list: [],
                date:null,
                userName:null,
                userPhone:null,
                userAdress:null,
                createTime: null,
                current:{
                    userName: null,
                    userAdress: null,
                    userPhone: null
                },
                index: null,
                 total:{
                    num: 0,
                    page: 0
                },
                currentPage: 1,
                allChecked:null,
                addArr:{//模拟新增数组
                    createTime: '',
                    userName: '',
                    userAdress: '',
                    userPhone: ''
                },
                jsonp:{//模拟json数据
                    totalPage:2,
                    totalNum:11,
                    rechargeRecords: [
                        {
                            id: 1,
                            createTime: 1495472899020,
                            userId: 22,
                            userName: '小雅',
                            userAdress: '杭州市西湖区',
                            userPhone: 15864230000
                        },
                        {
                            id: 2,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: '雅雅',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 3,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 4,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name2',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 5,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name3',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 6,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name4',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 7,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name5',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 8,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name6',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 9,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name7',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 10,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name8',
                            userAdress: '',
                            userPhone: 15864230000
                        },
                        {
                            id: 11,
                            createTime: 1494472699000,
                            userId: 24,
                            userName: 'name9',
                            userAdress: '',
                            userPhone: 15864230000
                        }
                    ]
                },
            }
        },
        methods: {
            format(s) {//将后台传过来的valueOf格式的时间改成yyyy/m/d的格式
                const 
                    date = new Date(s),
                    y = date.getFullYear(),
                    m = date.getMonth() + 1,
                    d = date.getDate(),
                    h = date.getHours(),
                    minutes = date.getMinutes(),
                    seconds = date.getSeconds()
                return `${y}/${m < 10 ? '0'+m : m}/${d < 10 ? '0' + d : d} ${h < 10 ? '0' + h : h}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}` 
            },
            modify(i) {//修改列表
                this.current.userName = this.list[i].userName
                this.current.userAdress = this.list[i].userAdress
                this.current.userPhone = this.list[i].userPhone
                this.index = i
                this.$refs.dialog2.open()
            },
            deletes(i){//删除列表
               this.list = this.list.slice(1)
               alert('确认删除选中记录吗？')
            },
            getData(date){
                this.list = this.jsonp.rechargeRecords
                this.total.num = this.jsonp.totalNumber
                this.total.page = this.jsonp.totalPage
            },
            addIfo(){//新增
                this.$refs.dialog.open()
            },
            cancelEdit(){//关闭修改弹窗
                this.$refs.dialog2.close()
            },
            submitEdit(){//修改
                const i = this.index
                this.$refs.dialog2.close()
                this.list[this.index].userName = this.current.userName
                this.list[this.index].userAdress = this.current.userAdress
                this.list[this.index].userPhone = this.current.userPhone
                // window.opener=alert('修改成功更新成功!')
            },
            cancelAdd() {//关闭新增弹窗
                this.$refs.dialog.close()
            },
            submitAdd(){
                const i = this.index
                if (this.userName == null || this.userPhone == null || this.userAdress == null) {
                    alert('请将信息填写完整')
                }else{
                    this.$refs.dialog.close()
                    const 
                        date = new Date(),
                        year = date.getFullYear(),
                        month = date.getMonth()+1,
                        myDate = date.getDate(),
                        h = date.getHours(),
                        minutes = date.getMinutes(),
                        seconds = date.getSeconds()
                    this.createTime = `${year}/${month < 10 ? '0'+month : month}/${myDate < 10 ? '0'+myDate : myDate} ${h < 10 ? '0' + h : h}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

                    const addArr={
                        createTime: this.createTime,
                        userName: this.userName,  
                        userPhone: this.userPhone,  
                        userAdress: this.userAdress  
                    }
                    this.list.push(addArr)
                    this.resetStu()
                    console.log(addArr)
                    // window.opener=alert('添加成功更新成功!')
                }
            },
            //复位新增表单
            resetStu(){  
                this.addArr={ 
                    createTime:'',
                    userName:'',  
                    userPhone:'',  
                    userAdress:''
                }  
            },
            selectSingle(index, id) {//单选个input点击事件
                this.id = id
                this.index = index
                this.list.forEach((item, i) => {
                    if (item.id === id && i !== index) {
                        item.checked = this.list[index].checked
                        this.$set(this.list, i, item)
                    }
                })
            },
            selectAll(event) {//全选
                this.list.forEach((item, i)=> {
                   if(item.checked === true){
                        item.checked = this.list.length.checked
                   }
                    item.checked ^= 1
                    this.$set(this.list, i, item)
                })
            },

            modify2(i){// 批量删除
                this.list.forEach((item,id)=>{
                    if (item.checked) {
                        this.$refs.dialog3.open()
                    }
                })
            },
            submitAllDelete() {//批量确定时提交弹窗
                this.$refs.dialog3.close()
                this.list.forEach((item,id)=>{
                    if (item.checked) {
                        this.$refs.dialog3.open()
                        this.list = this.list.slice(item.checked)
                    }
                })
            },
            cancelAllDelete() {//关闭弹窗
                this.$refs.dialog3.close()
            },
             nextPage(){//下一页
                this.currentPage ++
                this.getData(this.currentPage)
            },
            prevPage(){//上一页
                this.currentPage --
                this.getData(this.currentPage)
            },
            goPage (index) {
              // 跳转到相应页面
                if (index !== this.currentPage) {
                    // console.log(index)
                    this.currentPage = index
                    this.getData(this.currentPage)
                }
            },

        },
        created() {//获得当前时间
            const 
                date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth()+1,
                myDate = date.getDate()
            this.today = `${year}/${month < 10 ? '0'+month : month}/${myDate < 10 ? '0'+myDate : myDate}`,
            this.getData(this.today)
        },
        components: {
            calendar,
            sweetModal
        },
    }
</script>