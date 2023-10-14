const datawork = [
  {
    Nameproject: "Real estate",
    image: "../src/projects/inmovalley/assets/image_banner.jpg",
    Description:
      "Inmovalley is a page that I have built for the real estate sector, using the technological stack of html, css, jquery and sass.",
    Liveproject: "../src/projects/inmovalley/index.html",
    Code: "https://github.com/SrParker98/inmovalley",
  },
  {
    Nameproject: "My first portfolio",
    image: "../src/projects/first-portfolio/miniatura.png",
    Description:
      " This website is my first portfolio, which I have tried to improve and update to the current page. My first portfolio is built with html, css, sass and javascript. On the other hand, the current page is built with react.js. ",
    Liveproject: "../src/projects/first-portfolio/index.html",
    Code: "https://github.com/SrParker98/first-public-portfolio",
  },
  {
    Nameproject: "Airbnb clon",
    image:
      "https://media.itsnicethat.com/original_images/563b992b7fa44cff9d001763.gif",
    Description:
      "Airbnb clone, with react.js, swiper.js, Mui components and Sass. Here i learned how to use the key, also i improved the way to use the function map and also react dropdown and react icons.",
    Liveproject: "../src/projects/airbnb/",
    Code: "https://github.com/SrParker98/Githubairbnb",
  },
  {
    Nameproject: "Weatherapp",
    image:
      "https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif",
    Description:
      "App Weather App is created with React, Here i call an Api from Openweathermap and i show the weather, on all the citys of the world also the forecast on the next hours.",
    Liveproject: "../src/projects/dist/",
    Code: "https://github.com/SrParker98/weatherapp",
  },
  {
    Nameproject: "Pokeapi",
    image:
      "data:image/png;base64,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",
    Description:
      "App calling a API of Pokemon, i made it little personalized and also put some phrase each time that you choose a pokemon, you can try it! This app was created with html, css and JavaScript",
    Liveproject: "../src/projects/pokeapi/index.html",
    Code: "https://github.com/SrParker98/mipokeapi",
  },
  {
    Nameproject: "STAL`",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-cms-concept-landing-page_23-2148802661.jpg?size=626&ext=jpg&ga=GA1.1.2096631676.1695637188&semt=ais",
    Description:
      "Wordpress shop with Woocomerce for a ring shop, this project is real and it's not finish yet, i will implement payments with Stripe and finish the design with a father theme, i'm using php like main.",
    Liveproject: "https://staljewelry.com",
    Code: "https://github.com/SrParker98/stal",
  },
  {
    Nameproject: "To do App",
    image: "https://ik.imagekit.io/freshman/final-app_dPFLhFnTI.gif",
    Description:
      "Is there somthing more classic than the To Do App for developers? here is it. This it was my first app with javascript, where i learned how to create and modify elements at DOM.",
    Liveproject: "../src/projects/todo/index.html",
    Code: "https://github.com/SrParker98/todo-app",
  },
  {
    Nameproject: "Digital agency",
    image:
      "https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif",
    Description:
      "Puushagency it's a digital agency created with wordpress, i created this website to practice the design in wordpress and improve my skills on it.",
    Liveproject: "https:/puushagency.com",
    Code: "https://github.com/SrParker98/puushagency",
  },
];

export default datawork;
