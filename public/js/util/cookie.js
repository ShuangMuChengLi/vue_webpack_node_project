/**
 * Created by lin on 2017/4/10.
 */
var getCookie = function (c_name)
{
    if (document.cookie.length>0)
    {
        var c_start=document.cookie.indexOf(c_name + "=")
        if (c_start != -1)
        {
            c_start = c_start + c_name.length+1
            var c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return (document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

var setCookie = function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +encodeURI(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
module.exports = {
    "getCookie":getCookie,
    "setCookie" : setCookie
}