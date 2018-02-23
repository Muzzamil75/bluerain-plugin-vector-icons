
import VectorMaterialIcons from  './bluerain-plugin-vector-icons-MaterialIcons';
export {VectorMaterialIcons};


// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
const iconFontStyles = `@font-face {
  src: url('react-native-vector-icons/Fonts/MaterialIcons.ttf');
  font-family: MaterialIcons;
}`;

// Create stylesheet
const style:any = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);