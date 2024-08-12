# Getting Started with Create React App
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

modify
beforePath           afterPath
./index.html       ./public/index.html
./assets/          ./public/assets/

如果要进行修改，打包后的assets目录直接替换git仓库中public下的assets目录

modify index.html
can't remove or edit <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> And <div id="root"></div>

<div id="wrap">xxxxxx</div> need copy code to ./public/assets/contentAppend.js const str = "xxxxx"

修改index.html时<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />以及<div id="root"></div>这两行不能删除或者修改，其他代码可以进行随意增删改操作 修改后的index.html代码需要注意将<div id="wrap">xxxxxx</div> 中间的代码 要拷贝到 ./public/assets/contentAppend.js 文件中的 const str =  直接替换后面内容即可。 以上为修改UI操作后的整个过程
