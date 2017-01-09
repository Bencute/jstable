/*!
 * Copyright © 2017 Nosov Mark <markusx64bit@inbox.ru>
 * All rights reserved.
 * https://github.com/Bencute/jstable
 *
 * Released under the MIT license
 * https://github.com/Bencute/jstable/blob/master/LICENSE
 *
 * Version 1.0
 */

jstable = {
	create: function(idelem, rows, cols, options){
		var options = options || {};
		options = Object.assign({}, this.defaultOptions, options);
		
		var type = options.type;
		var values = options.values;
		
		var container = document.getElementById(idelem);
		var instance = new instanceTable(rows, cols);
		
		iOffset = (options.titleCols != null) ? 1 : 0 ;
		gOffset = (options.titleRows != null) ? 1 : 0 ;
		
		var table = container.appendChild(document.createElement('table'));
		instance.elemTable = table;
		for (var i = 0 - iOffset; i < rows; i++){
			var tr = table.appendChild(document.createElement('tr'));
			for (var g = 0 - gOffset; g < cols; g++){
				var td = tr.appendChild(document.createElement('td'));
				if (i < 0 && g < 0) {
					continue;
				}
				else if (i < 0 ^ g < 0) {	//XOR
					if (i < 0){
						var value = (typeof options.titleCols[g] != "undefined") ? options.titleCols[g] : '' ;
					}
					else if (g < 0) {
						var value = (typeof options.titleRows[i] != "undefined") ? options.titleRows[i] : '' ;
					}
					td.textContent = value;
				}
				else {
					var value = (typeof values[i] != "undefined" && typeof values[i][g] != "undefined") ? values[i][g] : '' ;
					instance.change(i, g, value);
					switch (type){
						case 'input':
							var input = td.appendChild(document.createElement('input'));
							input.type = "text";
							input.row = i;
							input.col = g;
							input.value = value;
							input.tableInstance = instance;
							input.addEventListener("change", function(){
									this.tableInstance.change(this.row, this.col, this.value);
							});
							break;
						case 'text':
							td.textContent = value;
							break;
					}
				}
			}
		}
		return instance;
	},
	
	defaultOptions: {
		type: 'input',	// input | text
		values: [],
		titleCols: null,
		titleRows: null,
	}
}

function instanceTable(rows, cols){
	this.data = [];
	this.elemTable;
	
	for (var i = 0; i < rows; i++){
		this.data.push([]);
		for (var g = 0; g < cols; g++){
			this.data[i][g] = null;
		}
	}
}

instanceTable.prototype.change = function(row, col, value){
	this.data[row][col] = value;
}

instanceTable.prototype.getData = function(){
	return this.data;
}

instanceTable.prototype.delete = function(){
	this.elemTable.remove();
}