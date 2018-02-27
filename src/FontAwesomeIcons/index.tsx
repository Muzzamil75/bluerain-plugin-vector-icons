
import VectorFontAwesome from  './bluerain-plugin-vector-iconsFontAwesome-web';
export {VectorFontAwesome};


// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url('react-native-vector-icons/Fonts/FontAwesome.ttf');
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