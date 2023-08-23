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

For the discerning moviegoer, I meticulously designed a view dedicated to providing comprehensive movie information. The user's attention was captivated by movie details, user ratings, and an interactive "Rate Me" button. In real-time harmony with the TMDb API, ratings resonated with the latest updates.

## Styling and UI 🎨

By infusing Bootstrap and CSS finesse, I harnessed the power of aesthetics. This diligent styling strategy orchestrated an eye-catching and responsive design, harmonizing the app's appearance across an array of devices.

## Error Handling ❗

To confront the unpredictable realm of errors, I fortified the app with robust error handling mechanisms. This safeguard extended its protective wings over the app, ensuring that even in the face of adversities like failed API requests and user input errors, the user experience remained unscathed.

## Testing and Debugging 🔧

A stringent testing regimen, conducted across a spectrum of browsers and devices, ensured the app's resilience. Equipped with browser developer tools and Vue Devtools, I meticulously debugged and resolved issues, fostering an environment of unblemished user experience.

## Deployment 🚀

The culmination of development led to the deployment of the production version via Vue CLI and Netlify. This pivotal step catapulted the app into the online realm, making it accessible to users worldwide.

## Final Testing and Documentation 🔎

Before the final curtain call, the app underwent rigorous testing to validate the seamless integration of all its features. This final check was complemented by the creation of comprehensive documentation, extending guidance on app usage, authentication, navigation, and the dynamic movie rating feature.

## Optional Enhancements 🌟

To sprinkle the app with an extra layer of delight, I contemplated the incorporation of optional enhancements such as user profile settings, sorting options, and user reviews. These optional features held the potential to amplify user engagement and satisfaction.

## Code Review and Refactoring 🔍

With the finish line in sight, I dedicated myself to a meticulous code review, emphasizing readability and adherence to best practices. Code sections were meticulously refactored to optimize performance and elucidate intricacies.

## Summary 📝

As each piece of the puzzle fell into place, the app emerged as a fully functional and user-friendly marvel. Guided by meticulous steps, the journey encompassed a range of features, from secure user authentication to intuitive movie search, comprehensive information presentation, and the captivating feature of movie rating.

----------------------------------
# Project Challenges and Solutions
----------------------------------

## Challenges Faced 🛠️

### 🔑 API Key Management:
At the project's outset, I encountered a common challenge: directly embedding the API key within the codebase. While it expedited development, this approach exposed the key to security risks. This experience underscored the importance of securing sensitive information. I swiftly adopted environment variables to confidentially manage the API key.

### ⚙️ No Backend:
Early on, I realized the absence of a backend server could introduce security vulnerabilities, particularly regarding Cross-Origin Resource Sharing (CORS). Recognizing this, I understood the necessity of a backend server. It would act as an intermediary, handling API requests and sensitive data to enhance both security and performance.

### 🔐 External User Authentication Flow using TMDb API:
Navigating the intricacies of implementing external user authentication through the TMDb API was a significant challenge. Orchestrating callback URLs and token exchanges demanded careful consideration. My journey was marked by gaining a deep understanding of these processes, ensuring users experienced a seamless and secure authentication journey.

### 🚧 Error Handling:
Robust error handling emerged as a central challenge. Particularly during critical stages like authentication and session creation, effectively capturing and managing errors was paramount. Instances of unnoticed errors threatened the user experience. This propelled me to refine my error-handling skills, ensuring the app's resilience and reliability.

### 🧩 Complex Vuex Setup:
Integrating Vuex for authentication and session management introduced complexity. Grappling with the intricacies of store structure, actions, mutations, and getters was a formidable task. While challenging, this orchestration was pivotal for effective data management. The Vuex setup played a pivotal role in ensuring a seamless app experience.

## Navigating to the Core Challenge 🚀

My journey led me to a critical challenge involving the use of Vuex getters to access the session_id for movie rating. Initially, I explored a guest session approach for movie rating. However, I recognized its limitations in ensuring authenticated and secure user interactions. This approach posed potential limitations and misuse risks.

Rather than persistently storing the session_id in Vuex and facing issues with getters, which I subsequently commented out when calling them in relevant components, I opted for a more secure and dependable path.

In the MovieDetail.vue component, I took a direct approach by embedding the authentication token in the Authorization header of the API request for movie rating. This strategic decision maintained the user's authentication status throughout the rating process.

This adjustment empowered me to facilitate movie ratings using authenticated tokens, enabling better control over user interactions. While tailored to my project's scope, this shift underscores the criticality of securely managing API keys.

> Note: It's important to highlight that for broader applications, securely managing API keys would be the recommended best practice.

## Project Recap 📝

The challenges I encountered, addressed, and the solutions implemented collectively formed the project. From safeguarding the movie dashboard to enhancing user authentication and rating posting, each challenge led to a refined application which I definately improve in future. T
