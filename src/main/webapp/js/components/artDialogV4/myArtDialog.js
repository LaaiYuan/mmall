var dialog;
var uuid = new UUID().id;
 
//ljp
function openListDialog(url,title,width,height){
	
	var pageWidth = $(window).width();
	var pageHeight = $(window).height()-36;
	
	if((typeof(width) == "undefined" || width == null || width == "")) {
		pageWidth = pageWidth * 0.99;
	} else {
		pageWidth = pageWidth<width?pageWidth:width;
	}
	
	if((typeof(height) == "undefined" || height == null || height == "")) {
		pageHeight = pageHeight * 1;
	} else {
		pageHeight = pageHeight<height?pageHeight:height;
	}
	
	art.dialog.open(url, {
		id: uuid,
 		lock: true,
		title: title,
		width: pageWidth,
		height: pageHeight,
		padding: '0',
		close: function () {
			var isRefresh = art.dialog.data("isRefresh");
			if(typeof(isRefresh) != "undefined" && isRefresh) {
				art.dialog.removeData("isRefresh");
				window.location.reload(); 
				
			}
		}
	}, false);

}

//ljp
function openDetailDialog(url,title,needF5,width,height){
	
	var pageWidth = $(window).width();
	var pageHeight = $(window).height()-36;
	
	if((typeof(width) == "undefined" || width == null || width == "")) {
		pageWidth = pageWidth * 0.99;
	} else {
		pageWidth = pageWidth<width?pageWidth:width;
	}
	
	if((typeof(height) == "undefined" || height == null || height == "")) {
		pageHeight = pageHeight * 1;
	} else {
		pageHeight = pageHeight<height?pageHeight:height;
	}
	
	art.dialog.open(url, {
		id: uuid,
 		lock: true,
		title: title,
		width: pageWidth,
		height: pageHeight,
		padding: '0',
		close: function () {
			var isRefresh = art.dialog.data("isRefresh");
			if((typeof(isRefresh) != "undefined" && isRefresh) || (typeof(needF5) != "undefined" && needF5)) {
				art.dialog.removeData("isRefresh");
				window.location.reload(); 
			}
		}
	}, false);

}

//弹出对话框
function openFlowDialog(url, dialogName,needF5,width,height){
	art.dialog.data('isNotes', true);
	openDetailDialog(url,dialogName,true,width,height);
}

//ljp
function openSubDialog(url,title,width,height){
	
	var pageWidth = $(window).width();
	var pageHeight = $(window).height();
	
	if((typeof(width) == "undefined" || width == null || width == "")) {
		pageWidth = pageWidth * 0.8;
	} else {
		pageWidth = pageWidth<width?pageWidth:width;
	}
	
	if((typeof(height) == "undefined" || height == null || height == "")) {
		pageHeight = pageHeight * 0.8;
	} else {
		pageHeight = pageHeight<height?pageHeight:height;
	}
	
	art.dialog.open(url, {
		id: uuid,
 		lock: true,
		title: title,
		width: pageWidth,
		height: pageHeight,
		padding: '0',
		close: function () {
			var isRefresh = art.dialog.data("isRefresh");
			if((typeof(isRefresh) != "undefined" && isRefresh)) {
				art.dialog.removeData("isRefresh");
				window.location.reload(); 
			}
		}
	}, false);

}

//ljp
function openSelectEmpDialog(url,selectedId,displayId,title){
	
	var pageWidth = $(window).width() * 0.8;
	var pageHeight = $(window).height() * 0.8;
	
	url += $(selectedId).val();
	art.dialog.open(url, {
		id: uuid,
 		lock: true,
		title: title,
		width: pageWidth,
		height: pageHeight,
		padding: '0',
		close: function () {
			
			var ids = art.dialog.data("ids");
			var names = art.dialog.data("names");
			if(typeof(ids) != "undefined") {
				$(selectedId).val(ids);
				$(displayId).val(names);
				
				art.dialog.removeData("ids");
				art.dialog.removeData("names");
			}
			
			var isRefresh = art.dialog.data("isRefresh");
			if(typeof(isRefresh) != "undefined" && isRefresh) {
				art.dialog.removeData("isRefresh");
				window.location.reload(); 
			}
		}
	}, false);
}


function selectUser() {
	
	var pageWidth = $(window).width() * 0.8;
	var pageHeight = $(window).height() * 0.8;
	
	art.dialog.data('sfuId', $("#sfuId").val());
	art.dialog.data('identityCard', $("#identityCard").val());
	art.dialog.data('sfuName', $("#sfuName").val());
	
	art.dialog.open(
		'../system/hrUser_selectUser.do', 
		{ 
			id:'selectUser', 
			lock:true, 
			title:'&#x7528;&#x6237;&#x9009;&#x62E9;&#x5217;&#x8868;', 
			width:pageWidth, 
			height:pageHeight, 
			opacity:0.3,
		}, false);
}
function selectUserForDuty() {
	
	var pageWidth = $(window).width() * 0.8;
	var pageHeight = $(window).height() * 0.8;
	
	art.dialog.data('sfuId', $("#sfuId").val());
	art.dialog.data('identityCard', $("#identityCard").val());
	art.dialog.data('sfuName', $("#sfuName").val());
	
	art.dialog.open(
		'../system/hrUser_selectUserForDuty.do', 
		{ 
			id:'selectUser', 
			lock:true, 
			title:'&#x7528;&#x6237;&#x9009;&#x62E9;&#x5217;&#x8868;', 
			width:pageWidth, 
			height:pageHeight, 
			opacity:0.3,
		}, false);
}
 
function getUploadDialog(id, title, url) {
	
	art.dialog.open(url, {
		id: id,
		lock: true,
		title: title,
		width: 600,
		height: 300,
		opacity: 0.3,
		close: function () {
			var isCommit = art.dialog.data("isCommit");
			art.dialog.removeData("isCommit");
			if(typeof(isCommit) != "undefined" && isCommit) {
				window.location.reload(); 
			}
		}
	}, false);
}

function openUploadDialog(title, formId,actUrl) {
	var dialogUrl = "../common/upload_importUI.do?formId=" + formId;
	art.dialog.data("actUrl",actUrl);
	art.dialog.open(dialogUrl, {
		id: uuid,
		lock: true,
		title: title,
		width: 600,
		height: 300,
		opacity: 0.3,
		close: function () {
			var isCommit = art.dialog.data("isCommit");
			art.dialog.removeData("isCommit");
			if(typeof(isCommit) != "undefined" && isCommit) {
				window.location.reload(); 
			}
		}
	}, false);
}

function checkUuid(uuid) {
	if(typeof(uuid) != "undefined" || uuid == null || uuid == "") {
		return new UUID().id;
	} else {
		return uuid;
	}
}

//列表选择，返回相应信息
function selectObjectDialog(dialogName, inputIds, dialogUrl) {
	
	var pageWidth = $(window).width() * 0.8;
	var pageHeight = $(window).height() * 0.8;
	
	if(typeof(dialogUrl) != "undefined" && dialogUrl != "") {
		
		art.dialog.open(dialogUrl, {
			id: 'selectObjectList',
			lock: true,
			title: dialogName,
			width: pageWidth,
			height: pageHeight,
			opacity: 0.3,
			close: function () {
				var values = art.dialog.data("values"); // 返回值
				if(typeof(values) != "undefined" && values.length > 0) {
					// 遍历inputIds数组
					$.each(inputIds, function(i,inputId){
				     	
				     	if(inputId != null || inputId != "") {
				     		var index = inputId.split("#")[0];// 对应返回值的索引
				     		inputId = inputId.replace(index,"");
				     		$(inputId).val(values[index]);
				     	}
						
					  }); 
					
					art.dialog.removeData("values");
				}
				
			}
		}, false);
	} else {
		art.dialog({icon:'error', content:'请求有误', ok:true });
	}
}

function openSelectListDialog(url,title){
	
	var pageWidth = $(window).width() * 0.8;
	var pageHeight = $(window).height() * 0.8;
	
	art.dialog.open(url, {
		id: uuid,
 		lock: true,
		title: title,
		width: pageWidth,
		height: pageHeight,
		padding: '0',
		close: function () {
			var refreshUrl = art.dialog.data("refreshUrl");
			location.href = refreshUrl;
			art.dialog.removeData("refreshUrl");
		}
	}, false);

}

function getApproveNotesUI(id) {
	var isNotes = art.dialog.data("isNotes");
	art.dialog.removeData("isNotes");
	if (typeof (isNotes) != "undefined" && isNotes) {
		$.post('../workflow/workflow_getApprovesNote.do?commonProperties.formId='+id,
			function(data) {
			if ("有记录" == data) {
				var dialogUrl = '../workflow/workflow_approveNotesUI.do?commonProperties.formId='+id;
				art.dialog.open(dialogUrl, {
					id:'notesDialog',
					title:'流程办理说明',
					width: 360,
					height: 180,
					left: '100%',
					top: '100%',
					fixed: true,
					drag: false,
					resize: false,
					padding: 0
				}, false);
			}
		},'text');
	}
}

//显示成功的提示对话框
function succeedDialog(msg){
	art.dialog({
		icon : 'succeed',
		content : msg,
		lock : true,
		ok : true
	});
}
//显示错误的提示对话框
function errorDialog(msg){
	art.dialog({
		icon : 'error',
		content : msg,
		lock : true,
		ok : true
	});
}

//刷新提示
function refreshTips() {
	errorDialog("此页面已执行过删除操作而未刷新，请刷新页面后再操作！");
}

//字数限制
function wordLimit(obj,num) {
	var len = obj.value.length;
	if(len > num) {
		errorDialog("请输入的字符长度不要大于:" + num);
		obj.value = obj.value.substring(0,num);
	}
}

function openProgressLoop() {
	art.dialog({
		id : 'progressDialog',
		title : false,
		lock : true,
		content : '<img alt="执行中，请等待..." src="../images/progressbar_02.gif">',
		opacity : 0.3,
		padding : 0,
		cancel : false
	});
}

function closeProgressLoop() {
	art.dialog.list['progressDialog'].close();
}