[TOC]

# [Custom Element](https://developers.google.cn/web/fundamentals/web-components/customelements)

- 自定义元素使 HTML 变得现代化
- 补充了缺少的部件，并将结构与行为相结合
- 自定义元素在保留 HTML 优点的同时为浏览器带来了新功能

---

## 定义新元素

```text
customElements 全局性定义自定义元素
customElements.define() 将自Î定义元素注册到浏览器中，使得浏览器可以识别到我们自定义元素标签
```

---

### 定义元素的 JavaScript API

自定义元素的功能使用 ES6 `class`来定义，从而扩展了`HTMLElement`，确保自定义元素继承完整的 DOM API，并且添加到类的任何属性/方法都将成为元素 DOM 接口的一部分。

自定义元素中的`this`指向`DOM`元素自身

#### 自定义元素规则

1. 自定义元素的名称必须包含短横线，主要使 HTML 解析器能够区分自定义元素和常规元素，同时还可以确保向 HTML 添加新标记时的向前兼容性。
2. 不能多次注册同一标记，否则会产生`DOMException`。
3. 自定义元素不能自我封闭，必须编写封闭标记。

```shell
<app-drawer></app-drawer>
```

---

## 扩展元素

### 扩展自定义元素

扩展其他自定义元素可以通过扩展其类定义来实现。

### 扩展原生 HTML 元素

要扩展原生 HTML 元素，则需要继承自正确 DOM 接口的类定义。例如，扩展`<button>`的自定义元素需要继承`HTMLButtonElement`而不是`HTMLElement`。

扩展原生 HTML 元素时，`customElement.define()`的调用需要传递第三个参数，需要告诉浏览器要扩展的标记是什么。

```shell
customElement.define('fancy-button', FancyButton, {extends: 'button'})
```

[HTML DOM 接口的完整列表，HTML 规范](https://html.spec.whatwg.org/multipage/indices.html#element-interfaces)

扩展原生 HTML 元素的好处：在继承原生元素的 DOM 属性/方法的同时，还可以对其功能进行增强。减少了我们创建自定义元素的代码，同时使原生 HTML 元素的可重用性更高。

#### 扩展原生 HTML 元素后的使用

自定义内置元素有多种方法来使用该元素。

- 通过在原生标记上添加`is=""`属性来声明：

```shell
<button is="fancy-button">ripple</button>
```

- 通过在 JavaScript 中创建实例

```shell
let button = document.createElement('button', {is: 'fancy-button'});
button.textContent = 'ripple';
document.body.appendChild(button);
```

- 使用`new`运算符

```shell
let button = new FancyButton();
button.textContent = 'ripple';
```

## 自定义元素响应

自定义元素的生命周期钩子即自定义元素响应。

| 名称                                               | 调用时机                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| constructor                                        | 创建或扩展元素的的一个实例，相当于实例初始化。主要用于初始化状态、设置事件监听器或创建`shadow DOM`。                                                         |
| connectedCallback                                  | 元素每次插入到 DOM 时都会调用。用于运行安装代码。例如获取资源或渲染。                                                                                        |
| disconnectedCallback                               | 元素每次从 DOM 中移除时调用的方法。用于清理运行代码。                                                                                                        |
| attributeChangedCallback(attrName, oldVal, newVal) | 属性添加、移除、更新或替换。解析器创建元素时，或者扩展时，也会调用此生命周期函数来获取初始值。**注：仅`observedAttributes`属性中列出的特性才会收到此回调。** |
| adoptedCallback                                    | 自定义元素被移入新的 document 时调用                                                                                                                         |

```text
响应回调是同步的
```
