# New APK

New APK is a mobile application built using React Native and integrates with the NewAPI.org service. This project aims to provide an example of how to set up a basic React Native app and demonstrate some of its core functionalities.

# Images

<div style="display: flex; justify-content: space-between; gap: 20px;">
  <img src="assets/image1.jpg" alt="New APK Logo" width="200"/>
</div>

## Installation

Follow these steps to get a local copy of the project up and running:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Surajnathani/new-apk.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd new-apk
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```
    
4. **Add your API key:**

    Create a `.env` file in the root of your project and add your API key from NewAPI.org:

    ```env
    EXPO_PUBLIC_API_KEY = your_api_key_here
    ```

5. **Start the Metro Bundler:**

    ```bash
    npx react-native start
    ```

6. **Run the app:**

    For Android:
    ```bash
    npx react-native run-android
    ```

    For iOS:
    ```bash
    npx react-native run-ios
    ```

## Usage

Once the application is running, you can interact with it through your connected device or emulator. The app is set up to provide basic functionality and a starting point for further development.

## Features

- Basic React Native setup
- Integration with NewAPI.org
- Cross-platform support (Android and iOS)
- Example components and navigation
