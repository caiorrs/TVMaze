# TVMaze

## Instructions

To run this repository you need to have the react native environment configured
https://reactnative.dev/docs/environment-setup

After cloning this repo, on it's root, run `yarn` to install the dependencies, and then run `yarn android`

If you are going to run on ios, run `npx pod-install` or `cd ios && pod install && cd ..` and then `yarn ios`

(The app was not tested on ios)

## APK

There is an APK file under `./Distribution` folder

## Tools used

- FastImage: For faster image rendering and OOTB cache solution
- FlashList: Recently launched by Shopify, this is an alternative for React Native's FlatList, with better performance. I gave it a shot and it is really good
- Axios: for API calls management, I usually create a singleton like instance for all the api calls, and separate the endpoints in different files, using the same instance
- Moment: for formatting dates, the API is really simple to understand and use, but I also like to use date-fns
- React Navigation: For screen navigation handling, together with typescript is a very powerful and simple way to manage the app screens
- React Native Render HTML: To render HTML content in the app, without the need of the full power of a webview
- React Native SVG: To add SVG icons on the app
- React Native Safe Area Context: To use only the usable area of the device's screen
- Typescript: A must for current days, it helps the developer in development time as well as provides some "documentation".

## Project Structure

This project follows a common structure I use today
<br>
`src`

- `assets`: Where images, icons and themes are. In this project I have used only one svg icon and a theme file for the app theming
- `components`: it holds all the components used in the app, I do not put any component under screens folder, as I have already seen this kind of pattern.
- `contexts`: This is where all the app context providers are, in this case I only have created a ThemeContext/ThemeProvider, to provide the colors to app components
- `hooks`: where all custom hooks are, in this case, only a useDebounce hook was created, to debounce the search API call
- `navigation`: holds the navigation structure
- `screens`: all the app screens separated in folders
- `services`: all API calls are located in this folder
- `utils`: util functions, only had to create a date format for this project
