# React Clothes Store
### [Is hosted here](https://golden-kashata-473707.netlify.app/)

## Technology Stack.
1)React. \
2)[Google Firebase](https://firebase.google.com/) For keeping there shop data and implement the system of sign in and sign out. \
3)[Netlify](https://app.netlify.com/) Is a web hosting and automation platform. \
4)[Styled components](https://styled-components.com/) Module that allows you to write styles inside independent components. \
5)[Emailjs](https://www.emailjs.com/) Is a js library that will guide you through building a contact form that sends the content of the form to your email. \
6)[React Router](https://reactrouter.com/en/main) React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application.\
7)[Redux](https://es.redux.js.org/) Js library, that allows you to manage the state of the application. \
ETC...

## Application Functionality
1) The design of the application is modest and i also haven't made a mobile version, but it was originally conceived as a training, and a step-by-step study of certain things building live project. Styles still have to be worked on. I used styled components module.
2) This is a store where anyone can add favorite thing to the cart and buy them. There is still no payment system here, I want to add it in the near future.
3) The react router dome system is used to navigate through the pages, while the navigation panel is always static.
4) The firebase library is used for authorization and creation an account, also with it's help , user can connect using previously created accounts of Google, Facebook etc. or create it from scratch, whose data will be stored on firebase servers.
5)Contact us tab. When form is completed and submitted, the message comes to my mail. Also this library allows to configure out  the system of auto responses. The Library is EmailJs 
6) The "redux-version" branch has a version of this project rewritten using redux instead of useState, useEffect and context.
7) The only one difference between them is, in redux-version, the products in the basket are saved and after reloading the page, they won't disappear. This is done using redux-persist.


