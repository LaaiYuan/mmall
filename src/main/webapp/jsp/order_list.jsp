<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/8/18
  Time: 17:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="/js/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/js/components/artDialogV4/artDialog.js?skin=default"></script>
<script type="text/javascript" src=/js/components/artDialogV4/plugins/iframeTools.source.js"></script>


<html>
<head>
    <title>订单列表</title>
    <script>
        $(function(){
            $.ajax({
                url : "/order/list.do",
                data :{},
                type : 'POST',
                dataType : "json",
                success : function(result) {
                    if(result.status == 10){
                        var a=confirm("请先登录系统");
                        if(a==true){
                            window.location.href="/jsp/login.jsp";
                        }
                    }else{
                        jQuery.each(result.data.list, function (i, item) {
                            var status;
                            if(item.status == 0){
                                status = "已取消";
                            }else if(item.status == 10){
                                status = "<a href=\"javascript:void(0)\" onclick=\"topay(" + item.orderNo+ ")\">未付款</a>";
                            }else if(item.status == 20){
                                status = "已付款";
                            }else if(item.status == 40){
                                status = "已发货";
                            }else if(item.status == 50){
                                status = "交易成功";
                            }else{
                                status = "交易关闭";
                            };
                            var msg = "<tr><td>"+ item.orderNo+"</td><td>"
                                    + item.payment + "</td><td>"
                                    + status + "</td><td>"
                                    + item.paymentTime + "</td><td>"
                                    + item.sendTime + "</td><td>"
                                    + item.endTime + "</td></tr>";
                            $("#orderList").append(msg);
                        });
                    }
                }
            });
        })


        function topay(orderNo){
            $.ajax({
                url: "/order/pay.do?orderNo=" + orderNo,
                data: {},
                type: 'POST',
                dataType: "json",
                success: function (reMsg) {
                    window.open (reMsg.data.qrUrl, "请使用支付宝扫码支付", "height=500, width=400,Left=700,top=100");
                    //window.location.href=reMsg.data.qrUrl;
                }
            })
        }
    </script>
</head>
<body>
    <table id = "orderList" border="1" cellspacing="0">
        <tr>
            <td align="center">订单编号</td>
            <td align="center">实际付款金额</td>
            <td align="center">订单状态</td>
            <td align="center">支付时间</td>
            <td align="center">发货时间</td>
            <td align="center">交易完成时间</td>
        </tr>


    </table>
</body>
</html>
