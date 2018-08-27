// 对话框
function getDialog(url, element, dialogName) {
	var elementId = element + "Id";
	var elementValue = element + "Name";
	var aId = document.getElementById(elementId).value;
	var aValue = document.getElementById(elementValue).value;
	// 存储数据
	art.dialog.data("selectedId", aId);
	art.dialog.data("selectedName", aValue);
	art.dialog.data("dialogName", dialogName);
		
	art.dialog.open(url, {
		id: 'aaa',
		lock: true,
		opacity: 0.3,
		width: '26em',
		height: 385,
		close: function () {
			// 读取弹出框选择的数据

			var bId = art.dialog.data("selectedId");
			var bValue = art.dialog.data("selectedName");
			
			if (bId != undefined && bValue != undefined) {
				document.getElementById(elementId).value = bId;
				document.getElementById(elementValue).value = bValue;
			}
					
		}
	}, false);
}

//弹出对话框多项选择
function getCheckBox(url, zNodes, dialogName,valueId) {
	
	// 存储数据
	art.dialog.data("zNodes", zNodes);
		
	art.dialog.open(url, {
		id: 'aaa',
		title: dialogName,
		lock: true,
		opacity: 0.3,
		width: '22em',
		height: 370,
		close: function () {
			// 读取弹出框选择的数据
			var ids=art.dialog.data("ids");
			var names=art.dialog.data("names");
			//确定则cancel为true赋值到页面
			var cancel=art.dialog.data("cancel");
			//把传回的数据赋值到页面隐藏参数变量中
			if (cancel) {
				document.getElementById(valueId).value = ids;
				//显示选择的选项的名字
				if(valueId=="setDutys"){
					document.getElementById("showdutys").value = names;
				}else if(valueId=="setRoles"){
					document.getElementById("showroles").value = names;
				}
			}
					
		}
	}, false);
}