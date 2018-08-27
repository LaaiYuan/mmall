<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/8/18
  Time: 17:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="/js/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/js/components/artDialogV4/artDialog.js?skin=default"></script>
<script type="text/javascript" src=/js/components/artDialogV4/plugins/iframeTools.source.js"></script>

<html>
<head>
    <title>登录系统</title>
    <script>
        function logins(){
            var username = $("#username").val();
            var password = $("#password").val();
            if(username == "" & password == "" ){
                document.getElementById("result").innerHTML="请输入用户名和密码!";
                form.username.focus();
            }else if(username == ""){
                document.getElementById("result").innerHTML="用户名不能为空!";
                form.username.focus();
            }else if(password == ""){
                document.getElementById("result").innerHTML="密码不能为空!";
                form.password.focus();
            }else{
                $.ajax({
                    url:"/user/login.do",
                    data: {"username":username,"password":password},
                    type: "post",
                    success:function(data){
                        if(data.status == 1){
                            document.getElementById("result").innerHTML=data.msg;
                            form.wluNiName.focus();
                        }else{
                            document.getElementById("result").innerHTML=data.msg;
                            window.location.href="/jsp/order_list.jsp";
                        }
                    }
                });
            }
        }
    </script>

</head>
<body>
<div>
    <form name="form" namespace="/sys" action="" method="post">
        <center><p class="son11">---登陆界面---</p></center>
        <center><p id="result" style=" font-size:small; color: #F00">&nbsp;</p></center>
        <table class="son12" width=400" border="0" align="center"  cellpadding="6" cellspacing="1">
            <tr>
                <td align="right">用户名：</td>
                <td align="left">
                    <input type="text" id="username" name="username" style="height:30px;width:180px;line-height: 30px"/>
                </td>
            </tr>
            <tr>
                <td align="right">密&nbsp;码：</td>
                <td align="left">
                    <input type="password" name="password" id="password"  style="height:30px;width:180px;line-height: 30px"/>
                </td>
            </tr>
            <tr><td></td><td></td></tr>
            <tr>
                <td></td>
                <td>
                    <input type="button" value="登录" onclick="logins()" style="height:30px;width:70px" />
                    &nbsp;&nbsp;
                    <input type="reset" value="取消" style="height:30px;width:70px" />
                </td>
            </tr>
        </table>
    </form>
</div>

</body>
</html>
