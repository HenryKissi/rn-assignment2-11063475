# Welcome to your Expo app 👋



## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```



## Editing the App

1. **Open `App.js`** in your preferred code editor 

    ```javascript
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>My name is Prince Henry<Text style={styles.boldText}>YourName</Text></Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f0f8ff',  // Change the background color to your preference
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 24,  // Increase font size to 24
      },
      boldText: {
        fontWeight: 'bold',  // Make "Prince Henry" bold
      }
    });
    ```

    Replace `YourName` with your actual name.

## Running the Project

1. **Start the development server:**

    ```bash
    expo start


    
    ```
