# React Clothes Store
### [Is hosted here](https://golden-kashata-473707.netlify.app/)

## Technology Stack.
1)React.
2)[Google Firebase](https://firebase.google.com/) For keeping there shop data and implement the system of sign in and sign out.
3)[Netlify](https://app.netlify.com/) Is a web hosting and automation platform.
4)[Styled components](https://styled-components.com/) Module that allows you to write styles inside independent components.
5)[Emailjs](https://www.emailjs.com/) Is a js library that will guide you through building a contact form that sends the content of the form to your email.
6)[React Router](https://reactrouter.com/en/main) React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application.
7)[Redux](https://es.redux.js.org/) Js library, that allows you to manage the state of the application.
ETC...

## Application Functionality
1) Дизайн у приложения скромный, я все еще не сделал мобильную версию, но это изначально задумывалось как обучение, и пошаговое изучения оприделенных вещей на живом пректе. Со стилями еще придется поработать. Для стилей использовался модуль styled-components
2) Это магазин в котором любой желающий может купить одежду. Здесь все еще нет системы оплаты, но в будущем я ее добавю.
3) Используется система реакт роутер дома для передвижения по страницам при этом навигационная панель всегда статична.
4) Для авторизации и создания аккаунта используется библиотека 'firebase', с помошью нее пользователь может подключаться с помощью уже созданных ранее аккаунтов гугл, фейсбук и так далее, либо создать свой аккаунт с нуля, данные которого будут храниться на серверах firebase.
5) При заполнении формы во вкладке contact us, сообщение приходит на ранее созданную почту, так же можно настроить систему авто ответов пользователям. Для этого использовалась библиотека Emailjs.
6) В ветке redux-version есть версия этого проекта переписанная с использованием redux вместо useState, useEffect и context.
7) единственное отличие этих версий что в redux-version тавары в корзине сохраняются, и после повторного входа, они не пропадут это сделано с помощью redux-persist


