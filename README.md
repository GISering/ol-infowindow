# Openlayer 信息弹出框控件
> 在 webgis 前端地图展示中常常有这样的需求：点击某个要素，在点击位置弹出一个小窗口，显示相关信息，介于此本人基于 Openlayer 编写了一个控件，传入相应参数自动生成界面，显示窗口。
## 1.控件特点：

- 扩展 `ol.Map` 类方法调用简单
    ```
    var map = new ol.Map({});
    map.addInfoWindow(option)
    ```
- 不仅可以显示属性信息，也可配置在窗口中显示一个或两个按钮，并提供回调接口
- 提供两种主题风格

## 2. 截图

![演示效果](http://ww1.sinaimg.cn/large/cca5a724ly1g0cti4fltug20na0hx11j.gif)