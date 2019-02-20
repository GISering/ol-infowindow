ol.Map.prototype.beforeOverlay = null;
ol.Map.prototype.addInfoWindow = function (options) {
    var options = arguments[0] || {
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
    winElement.style.width = options.width;
    var style=document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;
    style.innerHTML=".ol-popup{margin-left:-" + (parseFloat(options.width)/2) + "px}";
   

    //标题
    if(options.title.show){
        titleElement.className = 'info-window-title';
        titleElement.innerText = options.title.text;
        if(options.title.textColor){
            titleElement.style.color = options.title.textColor;
        }
        if(options.title.textSize){
            titleElement.style.fontSize = options.title.textSize;
        }
        if(options.title.backgroundColor){
            titleElement.style.backgroundColor = options.title.backgroundColor;
        }
        if(options.title.textAlign){
            titleElement.style.textAlign = options.title.textAlign;
        }
    }
    //内容
    var content = options.content;
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
    if(options.button.show){
    
        if(options.button.fullButton){
            fullBtn.className = "info-window-full info-window-info-button"  //TODO-添加一个按钮样式
            fullBtn.innerText = options.button.fullButton.text;
            fullBtn.addEventListener('click', options.button.fullButton.callBack);
            buttonContainerElement.appendChild(fullBtn);
        }

        if(options.button.leftButton){
            leftBtn.className = "info-window-left info-window-info-button"; //TODO-添加左侧按钮样式
            leftBtn.innerText = options.button.leftButton.text;
            leftBtn.addEventListener('click', options.button.leftButton.callBack);
            buttonContainerElement.appendChild(leftBtn);

        }

        if(options.button.rightButton){
            rightBtn.className = "info-window-right info-window-info-button"; //TODO-添加右侧按钮样式
            rightBtn.innerText = options.button.rightButton.text;
            rightBtn.addEventListener('click', options.button.rightButton.callBack);
            buttonContainerElement.appendChild(rightBtn);

        }
        buttonContainerElement.appendChild(clearElement);

    }


    if (options.closeBtn){
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
    if(options.hideBefore){
        if(that.beforeOverlay){
            that.removeOverlay(that.beforeOverlay);
        }
    }else {//默认隐藏上个窗口
        that.removeOverlay(that.beforeOverlay);
    }
    this.addOverlay(overlay);
    that.beforeOverlay = overlay;
    overlay.setPosition(options.position)

    return overlay;
}

ol.Map.prototype.addInfoListWindow = function (options) {
    var options = arguments[0] || {
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
    winElement.style.width = options.width;
    var style=document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;
    style.innerHTML=".ol-popup{margin-left:-" + (parseFloat(options.width)/2) + "px}";


    //标题
    if(options.title.show){
        titleElement.className = 'info-window-title';
        titleElement.innerText = options.title.text;
        if(options.title.textColor){
            titleElement.style.color = options.title.textColor;
        }
        if(options.title.textSize){
            titleElement.style.fontSize = options.title.textSize;
        }
        if(options.title.backgroundColor){
            titleElement.style.backgroundColor = options.title.backgroundColor;
        }
        if(options.title.textAlign){
            titleElement.style.textAlign = options.title.textAlign;
        }

    }
    //内容
    var content = options.content;
    contentElement.className = "info-window-content";
    contentElement.style.height = options.height;
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
    if(options.button.show){

        if(options.button.fullButton){
            fullBtn.className = "info-window-full info-window-info-button"  //TODO-添加一个按钮样式
            fullBtn.innerText = options.button.fullButton.text;
            fullBtn.addEventListener('click', options.button.fullButton.fullCallBack);
            buttonContainerElement.appendChild(fullBtn);
        }

        if(options.button.leftButton){
            leftBtn.className = "info-window-left info-window-info-button"; //TODO-添加左侧按钮样式
            leftBtn.innerText = options.button.leftButton.text;
            leftBtn.addEventListener('click', options.button.leftButton.leftCallBack);
            buttonContainerElement.appendChild(fullBtn);

        }

        if(options.button.rightButton){
            rightBtn.className = "info-window-right info-window-info-button"; //TODO-添加右侧按钮样式
            rightBtn.innerText = options.button.rightButton.text;
            rightBtn.addEventListener('click', options.button.rightButton.rightCallBack);
            buttonContainerElement.appendChild(rightBtn);

        }
        buttonContainerElement.appendChild(clearElement);

    }


    if (options.closeBtn){
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
    if(options.hideBefore){
        if(that.beforeOverlay){
            that.removeOverlay(that.beforeOverlay);
        }
    }else {//默认隐藏上个窗口
        that.removeOverlay(that.beforeOverlay);
    }
    this.addOverlay(overlay);
    that.beforeOverlay = overlay;
    overlay.setPosition(options.position)

    return overlay;
}
