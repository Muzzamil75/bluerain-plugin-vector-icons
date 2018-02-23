import VectorIonicons from './bluerain-plugin-vector-icons-Ionicons';
export { VectorIonicons };

// import Icon from 'react-native-vector-icons/dist/Ionicons';

// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
const iconFontStyles = `@font-face {
  src: url('react-native-vector-icons/Fonts/Ionicons.ttf');
  font-family: Ionicons;
}`;

// Create stylesheet
const style: any = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
	style.styleSheet.cssText = iconFontStyles;
} else {
	style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
