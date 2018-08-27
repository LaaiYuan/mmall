$(function() {
	// 设置待校验表单、模式、提示方式
	$.formValidator.initConfig({
		tidyMode : true,
		onError : function(msg) {
			errorDialog(msg);
		}
	});
});

// 用于某元素的非空检验
function checkInput(id, errMsg) {
	checkInputSize(id, errMsg, 1);
}

// 用于某元素的长度检验
function checkInputSize(id, errMsg, min, max) {
	$("#" + id + "").formValidator({}).inputValidator({
		min : min,
		max : max,
		onError : errMsg
	});
}

// 用于处于某流程节点某元素的非空检验
function checkTaskKeyMsg(id, taskKey, errMsg) {
	checkNodeMsg(id, "currentTaskKey", taskKey, errMsg);
}

// 用于某元素和依赖元素的非空校验
function checkNodeMsg(id, node_id, node_text, errMsg) {
	$("#" + id + "").formValidator({}).functionValidator(
			{
				fun : function(val) {
					if ((val == "" || val == null || val < 1)
							&& ($("#" + node_id + "").val() == node_text)) {
						return errMsg;
					} else {
						return true;
					}
				}
			});
}