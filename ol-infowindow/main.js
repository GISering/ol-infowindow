ol.Map.prototype.beforeOverlay = null;
ol.Map.prototype.addInfoWindow = function (attrs) {
    var attrs = arguments[0] || {
        title: "未知",
        content: [{
            "name": "未知",
            "value": "未知"
        }]
    };
    var that = this;
    var winElement = document.createElement('div');
    var titleElement = document.createElement('div');
    var closeElement = document.createElement('span');
    var contentElement = document.createElement('div');
    var buttonContainerElement = document.createElement('div');
    var leftBtn = document.createElement('div');
    var rightBtn = document.createElement('div');
    var fullBtn = document.createElement('div');
    var clearElement = document.createElement("div");
    
    

    //整个窗体
    winElement.className = "ol-popup";
    winElement.style.width = attrs.width;
    /*by ice add */
    var style=document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;
    style.innerHTML=".ol-popup{margin-left:-" + (parseFloat(attrs.width)/2) + "px}";
    //winElement.style.marginLeft = Math.abs(attrs.width/2);
    //使下面的三角居中
    /*var style = document.createElement("style");
    document.head.appendChild(style);
    var sheet = style.sheet;
    sheet.addRule('.ol-popup:before','left: '+ (attrs.width/2-5));
    sheet.addRule('.ol-popup:after','left: '+ (attrs.width/2-5));
    winElement.style.left = -(attrs.width/2-5);*/

  /*  var style=document.createElement('style');
    style.innerHTML=".ol-popup:before{left:" + (attrs.width/2-5)+ "px}";
    style.innerHTML=".ol-popup:after{left:" + (attrs.width/2-5)+ "px}";
    winElement.style.left = -(attrs.width/2-5) + "px";

    document.head.appendChild(style);*/

    //标题
    if(attrs.title.show){
        titleElement.className = 'info-window-title';
        titleElement.innerText = attrs.title.text;
        if(attrs.title.textColor){
            titleElement.style.color = attrs.title.textColor;
        }
        if(attrs.title.textSize){
            titleElement.style.fontSize = attrs.title.textSize;
        }
        if(attrs.title.backgroundColor){
            titleElement.style.backgroundColor = attrs.title.backgroundColor;
        }
        if(attrs.title.textAlign){
            titleElement.style.textAlign = attrs.title.textAlign;
        }
        titleElement.style.padding = '10px';
        /* by ice modify 2019.1.9*/
        titleElement.style.paddingTop = '7px';
        titleElement.style.paddingBottom = '7px';
        titleElement.style.border = 'solid 1px #fff';
        titleElement.style.borderBottom = 'solid 1px #b6d9f8';
        // titleElement.style.paddingBottom = '10px';  

    }
    //内容
    var content = attrs.content;
    contentElement.className = "info-window-content";
    for (var i = 0, l = content.length; i < l; i++) {
        var rowEle = document.createElement("div");
        var keyEle = document.createElement("div");
        var valueEle = document.createElement("div");
        var clearEle = document.createElement("div");

        rowEle.className = "info-window-row-info";
        keyEle.className = 'info-window-key';
        valueEle.className = 'info-window-value';
        clearEle.style.clear = 'both';

        keyEle.innerText = content[i].name + ":";
        valueEle.innerHTML = content[i].value;

        if(content[i].nameColor){
            keyEle.style.color =  content[i].nameColor;
        }
        if(content[i].valueColor){
            valueEle.style.color =  content[i].valueColor;
        }

        if(content[i].textAlign){
            valueEle.style.textAlign =  content[i].textAlign;
            if(content[i].left){
                valueEle.style.paddingLeft =  content[i].left;
            }
        }

        if(!content[i].divider){
            rowEle.style.borderBottom = "0px"
        }

        rowEle.appendChild(keyEle);
        rowEle.appendChild(valueEle); 
        rowEle.appendChild(clearEle);
        contentElement.appendChild(rowEle);
    }

    //按钮
    clearElement.style.clear = 'both';
    if(attrs.button.show){
    
        if(attrs.button.fullButton){
            fullBtn.className = "info-window-full info-window-info-button"  //TODO-添加一个按钮样式
            fullBtn.innerText = attrs.button.fullButton.text;
            fullBtn.addEventListener('click', attrs.button.fullButton.callBack);
            buttonContainerElement.appendChild(fullBtn);
        }

        if(attrs.button.leftButton){
            leftBtn.className = "info-window-left info-window-info-button"; //TODO-添加左侧按钮样式
            leftBtn.innerText = attrs.button.leftButton.text;
            leftBtn.addEventListener('click', attrs.button.leftButton.callBack);
            buttonContainerElement.appendChild(leftBtn);

        }

        if(attrs.button.rightButton){
            rightBtn.className = "info-window-right info-window-info-button"; //TODO-添加右侧按钮样式
            rightBtn.innerText = attrs.button.rightButton.text;
            rightBtn.addEventListener('click', attrs.button.rightButton.callBack);
            buttonContainerElement.appendChild(rightBtn);

        }
        buttonContainerElement.appendChild(clearElement);

    }


    if (attrs.closeBtn){
        closeElement.className = "info-window-close";
        winElement.appendChild(closeElement);
    }

    winElement.appendChild(titleElement);    
    winElement.appendChild(contentElement);
    winElement.appendChild(buttonContainerElement);
    
    closeElement.addEventListener('click', function (e) {
        //winElement.style.display = 'none';
        console.log(that);
        that.removeOverlay(overlay);
        return;
    })

    var overlay = new ol.Overlay({
        element: winElement,
        positioning: 'bottom-center',
        stopEvent: true,
        offset: [0, -10],
        autoPan: true
    });
    if(attrs.hideBefore){
        if(that.beforeOverlay){
            that.removeOverlay(that.beforeOverlay);
        }
    }else {//默认隐藏上个窗口
        that.removeOverlay(that.beforeOverlay);
    }
    this.addOverlay(overlay);
    that.beforeOverlay = overlay;
    overlay.setPosition(attrs.position)

    return overlay;
}

ol.Map.prototype.addInfoListWindow = function (attrs) {
    var attrs = arguments[0] || {
        title: "未知",
        content: [{
            "name": "未知",
            "value": "未知"
        }]
    };
    var that = this;
    var winElement = document.createElement('div');
    var titleElement = document.createElement('div');
    var closeElement = document.createElement('span');
    var contentElement = document.createElement('div');
    var buttonContainerElement = document.createElement('div');
    var leftBtn = document.createElement('div');
    var rightBtn = document.createElement('div');
    var fullBtn = document.createElement('div');
    var clearElement = document.createElement("div");



    //整个窗体
    winElement.className = "ol-popup";
    winElement.style.width = attrs.width;
    /*by ice add */
    var style=document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;
    style.innerHTML=".ol-popup{margin-left:-" + (parseFloat(attrs.width)/2) + "px}";
    //winElement.style.marginLeft = Math.abs(attrs.width/2);
    //使下面的三角居中
    /*var style = document.createElement("style");
    document.head.appendChild(style);
    var sheet = style.sheet;
    sheet.addRule('.ol-popup:before','left: '+ (attrs.width/2-5));
    sheet.addRule('.ol-popup:after','left: '+ (attrs.width/2-5));
    winElement.style.left = -(attrs.width/2-5);*/

    /*  var style=document.createElement('style');
      style.innerHTML=".ol-popup:before{left:" + (attrs.width/2-5)+ "px}";
      style.innerHTML=".ol-popup:after{left:" + (attrs.width/2-5)+ "px}";
      winElement.style.left = -(attrs.width/2-5) + "px";

      document.head.appendChild(style);*/

    //标题
    if(attrs.title.show){
        titleElement.className = 'info-window-title';
        titleElement.innerText = attrs.title.text;
        if(attrs.title.textColor){
            titleElement.style.color = attrs.title.textColor;
        }
        if(attrs.title.textSize){
            titleElement.style.fontSize = attrs.title.textSize;
        }
        if(attrs.title.backgroundColor){
            titleElement.style.backgroundColor = attrs.title.backgroundColor;
        }
        if(attrs.title.textAlign){
            titleElement.style.textAlign = attrs.title.textAlign;
        }
        titleElement.style.padding = '10px';
        /* by ice modify 2019.1.9*/
        titleElement.style.paddingTop = '7px';
        titleElement.style.paddingBottom = '7px';
        titleElement.style.border = 'solid 1px #fff';
        titleElement.style.borderBottom = 'solid 1px #b6d9f8';
        // titleElement.style.paddingBottom = '10px';

    }
    //内容
    var content = attrs.content;
    contentElement.className = "info-window-content";
    contentElement.style.height = attrs.height;
    for (var i = 0, l = content.length; i < l; i++) {
        var listEle = document.createElement("div");
        listEle.className = "info-window-list"
        for(var j=0; j< content[i].length; j++){
            var rowEle = document.createElement("div");
            var keyEle = document.createElement("div");
            var valueEle = document.createElement("div");
            var clearEle = document.createElement("div");

            rowEle.className = "info-window-row-info";
            keyEle.className = 'info-window-key';
            valueEle.className = 'info-window-value';
            clearEle.style.clear = 'both';

            keyEle.innerText = content[i][j].name + ":";
            valueEle.innerHTML = content[i][j].value;

            if(content[i][j].nameColor){
                keyEle.style.color =  content[i].nameColor;
            }
            if(content[i][j].valueColor){
                valueEle.style.color =  content[i][j].valueColor;
            }

            if(content[i][j].textAlign){
                valueEle.style.textAlign =  content[i][j].textAlign;
                if(content[i][j].left){
                    valueEle.style.paddingLeft =  content[i][j].left;
                }
            }

            if(!content[i][j].divider){
                rowEle.style.borderBottom = "0px"
            }

            rowEle.appendChild(keyEle);
            rowEle.appendChild(valueEle);
            rowEle.appendChild(clearEle);
            listEle .appendChild(rowEle)
        }

        contentElement.appendChild(listEle);
    }

    //按钮
    clearElement.style.clear = 'both';
    if(attrs.button.show){

        if(attrs.button.fullButton){
            fullBtn.className = "info-window-full info-window-info-button"  //TODO-添加一个按钮样式
            fullBtn.innerText = attrs.button.fullButton.text;
            fullBtn.addEventListener('click', attrs.button.fullButton.fullCallBack);
            buttonContainerElement.appendChild(fullBtn);
        }

        if(attrs.button.leftButton){
            leftBtn.className = "info-window-left info-window-info-button"; //TODO-添加左侧按钮样式
            leftBtn.innerText = attrs.button.leftButton.text;
            leftBtn.addEventListener('click', attrs.button.leftButton.leftCallBack);
            buttonContainerElement.appendChild(fullBtn);

        }

        if(attrs.button.rightButton){
            rightBtn.className = "info-window-right info-window-info-button"; //TODO-添加右侧按钮样式
            rightBtn.innerText = attrs.button.rightButton.text;
            rightBtn.addEventListener('click', attrs.button.rightButton.rightCallBack);
            buttonContainerElement.appendChild(rightBtn);

        }
        buttonContainerElement.appendChild(clearElement);

    }


    if (attrs.closeBtn){
        closeElement.className = "info-window-close";
        winElement.appendChild(closeElement);
    }

    winElement.appendChild(titleElement);
    winElement.appendChild(contentElement);
    winElement.appendChild(buttonContainerElement);

    closeElement.addEventListener('click', function (e) {
        //winElement.style.display = 'none';
        console.log(that);
        that.removeOverlay(overlay);
        return;
    })

    var overlay = new ol.Overlay({
        element: winElement,
        positioning: 'bottom-center',
        stopEvent: true,
        offset: [0, -10],
        autoPan: true
    });
    if(attrs.hideBefore){
        if(that.beforeOverlay){
            that.removeOverlay(that.beforeOverlay);
        }
    }else {//默认隐藏上个窗口
        that.removeOverlay(that.beforeOverlay);
    }
    this.addOverlay(overlay);
    that.beforeOverlay = overlay;
    overlay.setPosition(attrs.position)

    return overlay;
}

//查询坐标
function getPosFromMapServer(level, code, map) {// 4地级市 5县 6乡镇
    var posLoadIndex = layer.msg('查询中...', {icon: 16});
    var queryUrl = 'http://10.34.0.12:6080/arcgis/rest/services/AHSL_ZH0717/MapServer/' + level + '/query?where=CODE = \'' + code + '\'&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson';
    $.ajax({
        url: queryUrl,
        success: function (data) {
            layer.close(posLoadIndex);
            if (JSON.parse(data).features[0]) {
                var x = JSON.parse(data).features[0].geometry.x;
                var y = JSON.parse(data).features[0].geometry.y;
                map.getView().setCenter([x,y]);
                if (level == 5){
                    map.getView().setZoom(11);
                } else{
                    map.getView().setZoom(9);
                }
            }
        },
        error:function (data) {
            layer.close(posLoadIndex);
        }
    })
}
