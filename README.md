# Openlayer 信息弹出框控件
> 在 webgis 前端地图展示中常常有这样的需求：点击某个要素，在点击位置弹出一个小窗口，显示相关信息，介于此本人基于 Openlayer 编写了一个控件，传入相应参数自动生成界面，显示窗口。
## 1.控件特点：

- 扩展 `ol.Map` 类方法调用简单
    ```
    var map = new ol.Map({});
    map.addInfoWindow(option) //option配置内容见下文
    ```
- 不仅可以显示属性信息，也可配置在窗口中显示一个或两个按钮，并提供回调接口
- 提供两种主题风格

## 2. 控件演示
- 使用 default.css 样式

![](http://ww1.sinaimg.cn/large/cca5a724ly1g0cwmiaps9g20gg0eq79m.gif)

- 使用 metro.css 样式

![](http://ww1.sinaimg.cn/large/cca5a724ly1g0cw7apkn1g20gg0eqn36.gif)
## 3. 使用方法
### 安装使用
1. 下载项目代码，将 `ol-infowindow` 文件夹下的 `ol-infowindow.js`添加至自己的项目中， 并在需要使用的页面中引用，引用顺序在 ol.js 之后；根据需要选择样式文件 `default.css` 或 `metro.css`添加至项目中，比如
    ```
    <link rel="stylesheet" href="./Openlayer/ol.css" type="text/css">
    <link rel="stylesheet" href="./ol-infowindow/metro.css" type="text/css">
    <script src="./Openlayer/ol.js"></script>
    <script src="./ol-infowindow/ol-infowindow.js"></script>
 
    ```
2. 调用方法

```
 var map = new ol.Map({
    view: new ol.View({
        center: center,
        zoom: 8,
        maxZoom: 18
    }),
    target: 'map'
});

map.addInfoWindow(option); //可将该方法添加至触发事件中， option 配置如下
```

### 参数配置
```
var option = {
    title: {//窗口标题配置
        show: true, //是否显示标题，默认是 true
        text: "标题", //标题内容
        textSize: "13px", //标题文字大小, 默认 13px
        textColor: "#000",//标题文字颜色, metro 主题默认颜色为 #fff，default 主题颜色为 #000
        backgroundColor: "#ddf1ff",//标题背景色，metro 主题默认颜色为 #108ee9，defalut 主题颜色为 #ddf1ff
        textAlign: "left"//标题文字对其方式，"left","center","right", metro 主题默认颜色为 "center"，default 主题颜色默认为 "left"
    },
    width: "300px",//窗体宽度
    hideBefore: true,//当显示当前信息窗口时，是否隐藏上一个，默认是 true
    closeBtn: true, //是否显示关闭按钮， 默认是 true
    content: [{//窗体字段内容配置
            name: "设备编码",//字段名称
            value: "1234564789",//字段值
            nameColor: "#222222",//字段名称颜色
            valueColor: "#222222",//字段值颜色
            divider: false //是否显示分割线，默认 false, 否则会在该行信息下方显示一条分割线
        }, {
            name: "运行状态",
            value: "运行",
            nameColor: "#222222",
            valueColor: "#00aa00",
            divider: false
        },
        {
            name: "时间",
            value: 2019,
            nameColor: "#222222",
            divider: false
        },
        {
            name: "管理单位",
            value: "某某某公司",
            nameColor: "#222222",
            divider: false
        },
        {
            name: "设备温度",
            value: 34,
            nameColor: "#222222",
            divider: false
        },
        {
            name: "设备厂商",
            value: "某某某厂商",
            nameColor: "#222222",
            divider: false
        }
    ],
    button: {
        show: true, //窗口底部显示按钮，默认 false, 不显示
        fullButton: {// 如果只显示一个按钮，请配置且只配置此项
            text: "单按钮", //按钮显示文本
            callBack: function () { //按钮点击回调
                alert(1);
            }
        },
        // 如果显示两个按钮，请配置且只配置下面两项,窗口左右各显示一个按钮
        leftButton: {
                text: "左侧按钮",
                callBack: function () {
                    alert(1);
                }
            },
        rightButton: {
            text: "右侧按钮",
            callBack: function () {
                alert(1);
            }
        }
    }
};
```