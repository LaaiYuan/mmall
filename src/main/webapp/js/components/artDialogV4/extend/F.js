function _FAlert(content,alertHandler){
	var contentHTML = '<table style="margin:0;padding:0;height:100%;width:100%;">'
		             +' <tr>'
	                 +'  <td><img src="'+contextpath+'/common/images/info.png" style="width:32px;height:32px;vertical-align:text-bottom;"/></td>'
	                 +'  <td style="max-width:440px;">'+content+'</td>'
	                 +' </tr>'
	                 +'</table>';
	if(!alertHandler){
		alertHandler = new function(){};
	}
	art.dialog({
	    title: '提示消息',
	    content: contentHTML,
	    lock: true,
	    okValue: '确定',
	    ok:alertHandler
	})
}
function _FSuccessAlert(content,alertHandler){
	var contentHTML = '<table style="margin:0;padding:0;height:100%;width:100%;">'
		             +' <tr>'
	                 +'  <td><img src="'+contextpath+'/common/images/ok.png" style="width:32px;height:32px;vertical-align:text-bottom;"/></td>'
	                 +'  <td style="max-width:440px;">'+content+'</td>'
	                 +' </tr>'
	                 +'</table>';
	if(!alertHandler){
		alertHandler = new function(){};
	}
	art.dialog({
	    title: '提示消息',
	    content: contentHTML,
	    lock: true,
	    okValue: '确定',
	    ok:alertHandler
	})
}
function _FFailAlert(content,alertHandler){
	var contentHTML = '<table style="margin:0;padding:0;height:100%;width:100%;">'
		             +' <tr>'
	                 +'  <td><img src="'+contextpath+'/common/images/error.png" style="width:32px;height:32px;vertical-align:text-bottom;"/></td>'
	                 +'  <td style="max-width:440px;">'+content+'</td>'
	                 +' </tr>'
	                 +'</table>';
	if(!alertHandler){
		alertHandler = new function(){};
	}
	art.dialog({
	    title: '提示消息',
	    content: contentHTML,
	    lock: true,
	    cancelValue: '确定',
	    cancel:alertHandler
	})
}
function _FConfirm(content,confirmHandler){
	var contentHTML = '<table style="margin:0;padding:0;height:100%;width:100%;">'
		             +' <tr>'
	                 +'  <td><img src="'+contextpath+'/common/images/confirm.png" style="width:32px;height:32px;vertical-align:text-bottom;"/></td>'
	                 +'  <td style="max-width:440px;">'+content+'</td>'
	                 +' </tr>'
	                 +'</table>';
	if(!confirmHandler){
		confirmHandler = new function(){};
	}
	art.dialog({
	    title: '提示消息',
	    content: contentHTML,
	    fixed: true,
	    lock: true,
	    okValue: '确认',
	    cancelValue: '取消',
	    ok:confirmHandler,
	    cancel:new function(){}
	})
}
function FAlert(content,alertHandler){
	this._FAlert(content,alertHandler);
}
function FSuccessAlert(content,alertHandler){
	this._FSuccessAlert(content,alertHandler);
}
function FFailAlert(content,alertHandler){
	this._FFailAlert(content,alertHandler);
}
function FConfirm(content,confirmHandler){
	this._FConfirm(content,confirmHandler);
}