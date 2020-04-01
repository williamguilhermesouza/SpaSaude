import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Routes from './src/routes';



export default function App() {
  let [fonts, setFonts] = useState(true);

  async function loadFonts() {
    await Font.loadAsync({
      'IM Fell Double Pica': require('./src/assets/fonts/IMFellDoublePica-Regular.ttf'),
      'ABeeZee': require('./src/assets/fonts/ABeeZee-Regular.ttf')
    });
    setFonts(false);
  }

  
  if (fonts) {
    return (
      <AppLoading
        startAsync={() => loadFonts()}
        onFinish={() => {}}
        onError={console.warn}
      />
    );
  }
  return (
    <Routes />
  );
}
