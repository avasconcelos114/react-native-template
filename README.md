#### SUMMARY
After experiencing significant issues with utilizing compatible ReactNative libraries for testing/navigation/any number of things,
I prepared a project that has a readily baked ReactNative project to modify.

#### PROJECT COMPONENTS
The project runs with:
* Expo SDK 26.0.0 (Easier testing, especially in non-native ios environments)
* Expo's ReactNative SDK 26.0.0 (equivalent of ReactNative v0.54)
* React Navigation 
* Jest/Enzyme (Unit Testing)
* Redux

I will only be updating dependencies when they have been proven not to contain breaking changes

#### REQUIREMENTS
Be sure you have run the following dependencies before attempting to run this project:
* [NodeJS](https://nodejs.org/en/)
* NPM V4+
* Watchman (Be sure to increase `maxfiles` and `maxfilesperproc` values)
* Expo application installed in your device  
  
#### STARTING UP
* Clone Repository
* Run `npm install` to install dependencies
* Run `npm test` to confirm that the `App` component renders with no issues (Not necessary but good to confirm)
* Run `npm start` to run server
* Use link or QR code to view project using the Expo app

#### CONTRIBUTING
I'd be glad to take in Pull Requests or look over any issues you may be having when getting this set up.

#### RELEVANT LINKS
[Expo](https://docs.expo.io/versions/latest/index.html)

#### LICENSE
MIT