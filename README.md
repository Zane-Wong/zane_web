# zane_web
个人网站

[预览地址](http://120.79.71.94)

## 项目构建
### 所需环境

运行时环境：NodeJS 20

工程化：Vite+Vue3+TS

包管理工具：pnpm9

### 项目初始化

~~~sh
git clone git@github.com:Zane-Wong/zane_web.git
~~~

~~~sh
cd zane_web
~~~

### 安装依赖

~~~sh
npm install pnpm -g
pnpm install
~~~

### 运行

~~~sh
pnpm run dev
~~~

### 构建

~~~sh
pnpm run build
~~~

## 部署到服务器
把build生成的`dist`目录下的所有文件

> dist/
> - assets/
> - ...
> - index.html
 
通过FTP（XFTP、MobaXterm等软件均可）上传到web服务器的服务目录下（以Nginx为例，需放到 `html` 目录下）
注意：Nginx的`html`目录会因系统版本不同而不同，注意使用`nginx -V`命令查看其所在的具体路径。

> html/
> - assets/
> - ...
> - index.html

文件上传完之后，启动Nginx服务即可（启动后，需要更新网页时直接覆盖`html`下的文件即可，无需重启服务，Nginx会自动代理为最新内容）