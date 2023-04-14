# Online Payment FE (Donations App)

This is an React app, bootstrapped using Vite. It is part of a tutorial series ([See playlist](https://www.youtube.com/playlist?list=PLseH49SWn6vbVS_QQLkWdRrZFeLauLpzH)) to illustrate how to integrate payment using an application's payment api.

## Table of Contents

- [App Features](#app-features)
- [Concepts and Apis Employed](#concepts-and-apis-employed)
- [Built with](#built-with)
- [Mock Designs](#mock-designs)
- [Required Installations](#required-installations)
- [Installation of This App](#instalation)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- Movie features -->

## App Features

- A donor visiting the app, is greeted with a donate page 🤭 to make donations for Sickle Cell research.
- Upon submittion of a valid donation form, the donor is redirected to paystack to conclude payment by providing card/bank details.
- Once transaction is concluded on paystack the donor is redirected back to the application to a thank you page acknowledging donation 🙏🏽.

<!-- concepts and apis employed -->

## Concepts and APIs Employed

- The API employed for donation was gotten from a previous project: [Online Payment API](https://github.com/frankly034/online-payment-api). Checkout the youtube playlist of a walkthrough on how the API was built [here](https://www.youtube.com/playlist?list=PLseH49SWn6vbVS_QQLkWdRrZFeLauLpzH).
- API documentation can be found [here](https://documenter.getpostman.com/view/17383417/2s93RXtqr5)
- This app demonstrates the use of React concepts like:
  - Compnents structuring
  - Routing and templating with [react route dom v6](https://www.npmjs.com/package/react-router-dom)
  - API integration with [axios](https://www.npmjs.com/package/axios)
  - Data fetching management with [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
  - Custom hooks
  - Typescript concepts like (generics, interfaces, etc)
  - Form validation with [formik](https://www.npmjs.com/package/formik) and [yup](https://www.npmjs.com/package/yup)
  - Simple form generator with validation using formik and yup

<!-- BUILT wITH -->

## Built with

- HTML5
- CSS3
- JavaScript
- React

<!-- MOCK DESIGNS -->

## Mock Designs

See mock design guides for the app below;

- Donate Page.
- Donations/Receipt Page.
- Error Page.

<!-- REQUIRED INSTALLATION -->

## Required Installations

- Npm
- API app running [SEE](https://github.com/frankly034/online-payment-api)

<!-- INSTALLATION -->

## Installation of This Repository

Once you have installed the required packages with the api app running as shown on the [Required Installations](#required-installations), proceed with the following steps

Clone the Repository

```Shell
your@pc:~$ git clone git@github.com:frankly034/online-payment-fe.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd online-payment-fe
```

Install all packages

```Shell
your@pc:~$ npm install
```

Open the app

```Shell
your@pc:~$ npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- 🇳🇬 Lewis Ugege - franklynugege@gmail.com | [Github Account](https://github.com/frankly034) | [Twitter](https://twitter.com/@wizlulu) | [Linkedin](https://linkedin.com/in/lewis-ugege) | [Youtube](https://www.youtube.com/channel/UC5t5gpLAJqEYEdDGNCPVRuQ)

## Acknowledgements

- <a href="https://paystack.com/">Paystack</a> and God Almighty .
