## tesign

doc 也即文档存放点，yarn run dev的时候会请求这里面的文档组件
example 也即测试存放点, yarn run examples的时候回请求这里面的组件，他们的区别只是examples直接引用examples下目录的组件,并且添加数据进行调试


自动化构建思路
每次在src目录下 新建一个文件夹 abc 就自动在abc文件下里面生成index.jsx 与 index.scss文件
同时 由watcher监听到目录的变化,
自动生成 common文件下的router.conf.js 文件
自动生成 doc下docs的同名md文件
自动生成 examples文件下 components目录下 新建abc文件夹 以此同时生成和src目录一样的index.jsx 与index.scss

第二步，支持模板引入。

修改。  同步监听examples与src文件目录并进行对比，保证文件除模版文件外的一致，在任意文件夹添加文件时都会触发addDir，并自动赋予相应的模版内容方便开发测试。
Src为组件存放地点，examples为引入Src组件的样例，doc为组件文档。
预计支持组件

修改。 组件开发页与文档编辑页是否可以同时挂载，通过不同路由进入，方便开发。
+ Button 按钮
+ Icon 图标

+ layout 布局 （栅格，flex）
+ Dropdown  下拉菜单
+ Menu  导航菜单
+ Pagination 分页
+ PageHeader 页头 
+ Steps 步骤条
+ Checkbox 多选框
+ Radio  单选框
+ Cascader  级联  
+ DatePicker 日期选择
+ Form 表单
+ Input 输入框
+ Switch 开关
+ Select 选择器
+ TimePicker 时间选择框
+ Upload 上传按钮
+ Avatar  头像
+ Collapse 折叠面板
+ Carousel  轮播图
+ Statistic 统计数值
+ Tree 树形控件
+ Timeline 时间轴
+ Tag 标签
+ Tabs 标签页
+ Table 表格
+ Alert 警告提示
+ Drawer 抽屉
+ Model 对话框
+ Message 全局提示
+ Progress 进度条
+ Spin 加载中
+ Skeleton 骨架屏
+ BackTop 回到顶部
+ Drvider 分割线