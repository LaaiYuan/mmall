var check = 0;//该变量是记录当前选择的评分次），可以忽略
var checkk = 0;
/*over()是鼠标移过事件的处理方法*/

function over(param){
	if(param == 1){
		$("#star1").attr("src","images/star_red.png");//第一颗星星亮起来，下面以此类推
		$("#message").html("很差");//设置提示语，下面以此类推
	}else if(param == 2){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#message").html("比较差");
	}else if(param == 3){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#message").html("一般");
	}else if(param == 4){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#star4").attr("src","images/star_red.png");
		$("#message").html("比较好");
	}else if(param == 5){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#star4").attr("src","images/star_red.png");
		$("#star5").attr("src","images/star_red.png");
		$("#message").html("很好");
	}
}
function over1(param){
	if(param == 1){
		$("#star11").attr("src","images/star_red.png");//第一颗星星亮起来，下面以此类推
		$("#message1").html("很差");//设置提示语，下面以此类推
	}else if(param == 2){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#message1").html("比较差");
	}else if(param == 3){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#message1").html("一般");
	}else if(param == 4){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#star44").attr("src","images/star_red.png");
		$("#message1").html("比较好");
	}else if(param == 5){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#star44").attr("src","images/star_red.png");
		$("#star55").attr("src","images/star_red.png");
		$("#message1").html("很好");
	}
}
/*out 方法是鼠标移除事件的处理方法，当鼠标移出时，恢复到我的打分情况*/
function out(){
	if(check == 1){//打分是1，设置第一颗星星亮，其他星星暗，其他情况以此类推
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star.png");
		$("#star3").attr("src","images/star.png");
		$("#star4").attr("src","images/star.png");
		$("#star5").attr("src","images/star.png");
		$("#message").html("");
		$("#wloVlevel").val("1");
	}else if(check == 2){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star.png");
		$("#star4").attr("src","images/star.png");
		$("#star5").attr("src","images/star.png");
		$("#message").html("");
		$("#wloVlevel").val("2");
	}else if(check == 3){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#star4").attr("src","images/star.png");
		$("#star5").attr("src","images/star.png");
		$("#message").html("");
		$("#wloVlevel").val("3");
	}else if(check == 4){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#star4").attr("src","images/star_red.png");
		$("#star5").attr("src","images/star.png");
		$("#message").html("");
		$("#wloVlevel").val("4");
	}else if(check == 5){
		$("#star1").attr("src","images/star_red.png");
		$("#star2").attr("src","images/star_red.png");
		$("#star3").attr("src","images/star_red.png");
		$("#star4").attr("src","images/star_red.png");
		$("#star5").attr("src","images/star_red.png");
		$("#message").html("");
		$("#wloVlevel").val("5");
	}else if(check == 0){
		$("#star1").attr("src","images/star.png");
		$("#star2").attr("src","images/star.png");
		$("#star3").attr("src","images/star.png");
		$("#star4").attr("src","images/star.png");
		$("#star5").attr("src","images/star.png");
		$("#message").html("");
		$("#wloVlevel").val("");
	}
}
function out1(){
	if(checkk == 1){//打分是1，设置第一颗星星亮，其他星星暗，其他情况以此类推
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star.png");
		$("#star33").attr("src","images/star.png");
		$("#star44").attr("src","images/star.png");
		$("#star55").attr("src","images/star.png");
		$("#message1").html("");
		$("#wloSlevel").val("1");
	}else if(checkk == 2){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star.png");
		$("#star44").attr("src","images/star.png");
		$("#star55").attr("src","images/star.png");
		$("#message1").html("");
		$("#wloSlevel").val("2");
	}else if(checkk == 3){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#star44").attr("src","images/star.png");
		$("#star55").attr("src","images/star.png");
		$("#message1").html("");
		$("#wloSlevel").val("3");
	}else if(checkk == 4){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#star44").attr("src","images/star_red.png");
		$("#star55").attr("src","images/star.png");
		$("#message1").html("");
		$("#wloSlevel").val("4");
	}else if(checkk == 5){
		$("#star11").attr("src","images/star_red.png");
		$("#star22").attr("src","images/star_red.png");
		$("#star33").attr("src","images/star_red.png");
		$("#star44").attr("src","images/star_red.png");
		$("#star55").attr("src","images/star_red.png");
		$("#message1").html("");
		$("#wloSlevel").val("5");
	}else if(checkk == 0){
		$("#star11").attr("src","images/star.png");
		$("#star22").attr("src","images/star.png");
		$("#star33").attr("src","images/star.png");
		$("#star44").attr("src","images/star.png");
		$("#star55").attr("src","images/star.png");
		$("#message1").html("");
		$("#wloSlevel").val("");
	}
}
/*click()点击事件处理，记录打分*/
function click(param){
	check = param;//记录当前打分
	out();//设置星星数
}
function click1(param){
	checkk = param;//记录当前打分
	out1();//设置星星数
}