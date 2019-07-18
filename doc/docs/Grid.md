---
imports:
  '{ Col,Row }': '@/Grid'
---





## Grid 栅格

一个基础的布局组件，支持flex，间距，将页面分为标准的24份

#### 代码演示

```render html
<Row type='flex' justify="space-between" align="bottom" gutter={8}>
    <Col span={8}>123</Col>
    <Col span={8}>456</Col>
    <Col span={8}>我的字体很大很大很大</Col>
</Row>
```



### Row

| 属性    | 说明                                                         | 类型    | 默认值 |
| ------- | ------------------------------------------------------------ | ------- | ------ |
| type    | 是否设置flex布局                                             | string  |        |
| align   | flex的垂直对齐选项:top,middle,bottom                         | string  |        |
| justify | flex 布局下的水平排列方式：start,end,center,space-around,space-between | string  |        |
| gutter  | 不同列之间的间距                                             | numberr |        |
|         |                                                              |         |        |

### Col

| 属性 | 说明                     | 类型   | 默认值 |
| ---- | ------------------------ | ------ | ------ |
| span | 占位的百分比,最小0最大24 | string |        |

### 

