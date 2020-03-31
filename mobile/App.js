import React from 'react';
import Main from './src/pages/Main';
import * as Font from 'expo-font';

Font.loadAsync({
  'IM Fell Double Pica': require('./src/assets/fonts/IMFellDoublePica-Regular.ttf'),
  'ABeeZee': require('./src/assets/fonts/ABeeZee-Regular.ttf')
});

export default function App() {
  return (
    <Main />
  );
}
