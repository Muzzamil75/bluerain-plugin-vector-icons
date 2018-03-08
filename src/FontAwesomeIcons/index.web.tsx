
import VectorFontAwesome from  './bluerain-plugin-vector-iconsFontAwesome-web';
export default VectorFontAwesome;



// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFont = require('react-native-vector-icons/Fonts/FontAwesome.ttf');
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
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
