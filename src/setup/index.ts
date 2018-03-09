export const setup = iconPath => {
	const iconFontStyles = `@font-face {
		src: url(${iconPath});
		font-family: FontAwesome;
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
};
