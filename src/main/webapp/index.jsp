<%@ page language="java"  contentType="text/html; charset=UTF-8" %>

<script type="text/javascript" src="/js/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/js/components/artDialogV4/artDialog.js?skin=default"></script>
<script type="text/javascript" src=/js/components/artDialogV4/plugins/iframeTools.source.js"></script>

<html>
<head>
<script>
    function uploadfile(){
        $.ajax({
            url: "/manage/product/upload.do",
            data: {},
            type: 'post',
            dataType: "json",
            success: function (reMsg) {
                if (reMsg.status == 1) {
                    document.getElementById("result").innerHTML = data.msg;
                } else {
                    $("#image").src(reMsg.data.url);
                }
            }
        });
    }
</script>
</head>
<body>
<a style="color:red" href="/jsp/order_list.jsp" >订单列表 </a>
<br>
<br>
上传文件
<form name="form1" action="/manage/product/upload.do" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_file" />
    <input type="submit" value="上传图片"/>
    <%--<p id="result" style=" font-size:small; color: #F00">&nbsp;</p>
    <img id="image" src=""/>--%>
</form>


<!--富文本图片上传文件
<form name="form2" action="/manage/product/richtext_img_upload.do" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_file" />
    <input type="submit" value="富文本图片上传文件" />
</form>-->

</body>
</html>
