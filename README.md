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

![演示效果](http://ww1.sinaimg.cn/large/cca5a724ly1g0cti4fltug20na0hx11j.gif)

## 3. 使用方法
### 安装
### 参数配置
```
var option = {
    title: {//窗口标题配置
        show: true, //是否显示标题，默认是 true
        text: "标题", //标题内容
        textSize: "15px", //标题文字大小
        textColor: "#000",//标题文字大小
        backgroundColor: "#ddf1ff",//标题文字大小
        textAlign: "left"//标题文字对其方式，"left","center","right"
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
            value: 1 == "1" ? "运行" : "停止",
            nameColor: "#222222",
            valueColor: 1 == "1" ? "#00aa00" : "#ff0000",
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
            text: "单按钮",
            callBack: function () {
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