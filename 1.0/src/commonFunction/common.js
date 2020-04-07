export default{
    log1: function (text){
        console.log(text)
    },
    toDate: function(time){
        var date = new Date(time);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        // console.log(Y+M+D+h+m+s);
        return Y+M+D+h+m+s;
    },
    unique: function(arr){
        //数组去重
        var obj = {},
        len = arr.length,
        newArr = [];
        for(var i =0;i<len;i++){
            if(!obj[arr[i]]){
                    obj[arr[i]] = i+1;
                    newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    sort1: function(arr){
        //数组排序
        return arr.sort(function (a, b){ return a - b; });
    },
    message: function(self, type, text) {
        self.$message({howClose: true, message: text, type: type})
        //success-成功 | warning-警告 | error-错误  | ‘’-普通
        //使用：this.common.message(this, type, msg);
      }
}