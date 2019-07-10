---
imports:
  '{ Button }': '@/Button'
---

~~~
	引入模板的方式

如果想渲染html组件的话就
​```render html
	your componets
​```
~~~



## 按钮

一个基础按钮组件，支持click回调，常用的按钮颜色尺寸等

#### 代码演示

```render html
<Button type='primary'>primary</Button>
<Button type='danger'>danger</Button>
<Button disabled>danger</Button>
<Button size='large'>danger</Button>
<Button href='http://www.baidu.com'>link</Button>
```




### API

| 属性     | 说明                                     | 类型     | 默认值  |
| -------- | ---------------------------------------- | -------- | ------- |
| type     | 按钮类型，可选值为primary,danger,default | string   | default |
| size     | 按钮大小，可选值为small,normal,large     | string   | normal  |
| disabled | 按钮是否禁用                             | boolean  | false   |
| onClick  | 点击按钮后的回调                         | function |         |
| href     | 将按钮转为a标签， 指向具体href网址       | string   |         |

