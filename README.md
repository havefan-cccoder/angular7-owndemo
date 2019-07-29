# MyApp<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu"></a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

默认进入login页面，登录成功后进入quickmodel页面，这个页面有很多组件，所以这些组件放进了quickmodel module里（文件结构上）。
根路由里（app-routing.ts文件）设置默认路由&需要懒加载的模块，即login所在的module。这module里定义（放在declarations数组里）所有的组件和（放在imports数组里）子模块（quickmodel module等）。
同理quickmodel module（.ts文件）里定义所有的组件和它的子模块（比如 nav module等）

启动:npm install && npm run start
