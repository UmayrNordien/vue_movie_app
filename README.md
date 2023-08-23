# movie_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

----------------------------------
# Project Overview
----------------------------------

## Initial Setup and Dependencies 🛠️

I set up the project through Vue CLI and installed essential dependencies 
like Vue, Vuex, Vue Router, Axios, and Bootstrap. 
These  components formed the project's development.

## Authentication Flow 🔐

I integrated an external provider—TMDb. 
I followed TMDb's authentication process, 
involving the acquisition of a request token, its validation via login credentials, 
and its subsequent exchange for a session ID via the authcallback. 
This ensured the users secure and seamless access to the app.

## Vuex Store Configuration 📦

To steer the app's state management, I initiated a Vuex store. 
I introduced state variables that tracked user authentication status \
Umayrand session information. 
The mutations and actions were behind the state updates, 
offering the user interactions with the api.

## Vue Router Setup 🛤️

Navigating the app via the Vue Router. With configuration of various routes 
views such as login, dashboard, movie details, search results, and the about page.

## Reusable Components 🧩

With a commitment to reusability, I made Vue components including the NavBar and its counterpart LoginNavBar. 
Movie cards made for both MovieList and SearchResults which displays code reusability.

## Navigation and Routing 🚀

User navigation was simplified with the use of Vue Router's <router-link> component. 
This navigation allows the user to navigate to different sections of the app.

## Search Functionality 🔍

The implementation of a search feature using Axios, 
allowed the user to discover movies. 
By fetching and displaying search results, 
this feature increased user engagement

## View Implementation 🌆

Dedicated views were sculpted to cater to distinct sections of the app. From the user's first step on the login page to the detailed terrain of movie information, search results, and more, each view orchestrated data fetching, user interactions, and visual rendering.

## User Dashboard 📊

In the realm of user experience, I curated a dashboard showcasing rated movies and pertinent details. The vigilant Vuex store undertook the task of managing user session data and movie ratings, ensuring the continuity of the user's journey.

## Movie Details View 🎬

Designed a view dedicated to providing movie information including movie details, user ratings, and an interactive "Rate Me" button. In real-time with the TMDb API.

## Styling 🎨

By using Bootstrap and CSS via aesthetics and diligent styling but most importantly responsive design, harmonizing the app's appearance across devices.

## Error Handling ❗

To confront the unpredictable realm of errors, I fortified the app with robust error handling mechanisms. This safeguard extended its protective wings over the app, ensuring that even in the face of adversities like failed API requests and user input errors, the user experience remained unscathed.

## Testing and Debugging 🔧

A stringent testing regimen, conducted across a spectrum of browsers and devices, ensured the app's resilience. Equipped with browser developer tools and Vue Devtools, I meticulously debugged and resolved issues, fostering an environment of unblemished user experience.

## Deployment 🚀

Deployment of via Vue CLI and Netlify. 

## Final Testing and Documentation 🔎

Before the final curtain call, the app underwent rigorous testing to validate the seamless integration of all its features. This final check was complemented by the creation of comprehensive documentation, extending guidance on app usage, authentication, navigation, and the dynamic movie rating feature.

## Optional Enhancements 🌟

To sprinkle the app with an extra layer of delight, I contemplated the incorporation of optional enhancements such as user profile settings, sorting options, and user reviews. These optional features held the potential to amplify user engagement and satisfaction.

## Code Review and Refactoring 🔍

With the finish line in sight, I dedicated myself to a meticulous code review, emphasizing readability and adherence to best practices. Code sections were meticulously refactored to optimize performance and elucidate intricacies.

## Summary 📝

Secure user authentication to basic movie search, movie information, and a  movie rating feature .

----------------------------------
# Project Challenges and Solutions
----------------------------------

## Challenges Faced 🛠️

### 🔑 API Key Management:
challenge: directly embedding the API key within the codebase.
This approach exposed the key.
This experience underscored the importance of securing sensitive information. 
I tried to use environment variables to confidentially manage the API key.

### ⚙️ No Backend:
Early on, I realized that no backend server could introduce security vulnerabilities, 
particularly regarding Cross-Origin Resource Sharing (CORS). 
It would handle API requests and data.

### 🔐 External User Authentication Flow using TMDb API:
Navigating the intricacies of implementing external user authentication through the TMDb API was a significant challenge. Orchestrating callback URLs and token exchanges demanded careful consideration. My journey was marked by gaining a deep understanding of these processes, ensuring users experienced a seamless and secure authentication journey.

### 🚧 Error Handling:
During the process of authentication and session creation, managing errors was critical. 

### 🧩 Complex Vuex Setup:
Integrating Vuex for authentication and session.
Included Store structure, actions, mutations, and getters

## My Assessment Recap 📝

The challenges I encountered and the solutions implemented collectively formed the project. From guarding the movie dashboard to  user authentication and rating posting, led to revision regarding http requests using axios. 
