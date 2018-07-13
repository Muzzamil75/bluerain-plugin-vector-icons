
![Vector Icons for React Native](https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png)

# bluerain plugin vector icon

Customizable Icons for BlueRain Apps from  [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/) with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.

| 🌏 Web             | 🖥 Electron        | 📱 React Native    |
| :----------------: | :----------------: | :----------------: |
| ✔️ |   ✔️ | TBD  |

## Screenshots

|Type    | Example 1             | Example 2       |
| :----------------: | :----------------: | :----------------: |
| Web |![vectoricons](screenshots/title665470849.png)  |![vectoricons](screenshots/title978367726.png) |
| Electron |TBD | TBD |
| Native |TBD | TBD |

## Installation

Run the following command in the plugin directoy:

```shell
yarn add  @blueeast/bluerain-plugin-vector-icons
```

## Components

### Icon

#### **Props**

| Name          | Default  |Type   |Description  |
| ------------- | -------------    |-------------|-------------|
| name|          |string | This is used for the name of the Icon |
| size|          |string | This is used  for size of the icon |

#### **Example:**

```react
import BR from '@blueeast/bluerain-os';

<BR.Components.Icon name="airplane" size={30} color="blue" />
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### VectorIconsFontAwesome

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

#### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "VectorIconsFontAwesome"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "vector-icons-font-awesome"

### VectorIconsEntypo

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

#### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  "VectorIconsEntypo"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "vector-icons-Entypo"

### VectorIconsIonicons

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

#### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "VectorIconsIonicons"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "vector-icons-Ionicons"

### VectorMaterialCommunityIcons

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

#### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "VectorMaterialCommunityIcons"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  "vector-materialCommunity-icons"

### VectorIconsMaterialIcons

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

#### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "VectorIconsMaterialIcons"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  "vector-icons-material-icons"
