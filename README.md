# Iran Map

This is an interactive and responsive SVG map of Iran which is a powerful tool for visualizing data related to Iran's provinces. It allows users to customize the colors of each province based on data values and additionally, users can click on each province to change it's color and retrieve it's name using a simple function.

This package is perfect for anyone looking to create data visualizations related to Iran or for anyone who needs an interactive map of Iran's provinces.

## Demo

[**Live Demo**](https://simamojtahedi.github.io/react-iran-map/)

## Installation

`npm i react-iran-map`

## Usage

```jsx
import { IranMap } from 'react-iran-map'
import mapData from '../data.tsx'

function App() {
  const selectProvinceHandler = (province) => {
    console.log(province)
  }

  return (
    <div style={{ fontFamily: 'vazir' }}>
      <IranMap
        data={mapData}
        colorRange='30, 70, 181'
        width={600}
        textColor='#000'
        defaultSelectedProvince='tehran'
        deactiveProvinceColor='#eee'
        selectedProvinceColor='#3bcc6d'
        tooltipTitle='تعداد:'
        selectProvinceHandler={selectProvinceHandler}
      />
    </div>
  )
}

export default App
```

## Data schema

```jsx
const mapData = {
  ardabil: 0,
  isfahan: 20,
  alborz: 11,
  ilam: 18,
  eastAzerbaijan: 10,
  westAzerbaijan: 20,
  bushehr: 15,
  tehran: 3,
  chaharmahalandBakhtiari: 25,
  southKhorasan: 29,
  razaviKhorasan: 11,
  northKhorasan: 19,
  khuzestan: 12,
  zanjan: 18,
  semnan: 9,
  sistanAndBaluchestan: 3,
  fars: 7,
  qazvin: 35,
  qom: 30,
  kurdistan: 24,
  kerman: 23,
  kohgiluyehAndBoyerAhmad: 2,
  kermanshah: 7,
  golestan: 18,
  gilan: 14,
  lorestan: 7,
  mazandaran: 28,
  markazi: 25,
  hormozgan: 14,
  hamadan: 19,
  yazd: 32,
}
```

## Available attributes

| Name                      | Type       | Required | Description                                                                                              |
| :------------------------ | :--------- | :------- | :------------------------------------------------------------------------------------------------------- |
| `data`                    | `object`   | True     | An object that has 'Data schema' items as provinces                                                      |
| `colorRange`              | `string`   | True     | It defines the range of color based on it's value and it should be rgb color like this : `"30, 70, 181"` |
| `width`                   | `number`   | False    | Width of the map                                                                                         |
| `textColor`               | `string`   | False    | Color of map texts                                                                                       |
| `defaultSelectedProvince` | `string`   | False    | You can set one of the provinces from 'Data schema' as default selected province                         |
| `deactiveProvinceColor`   | `string`   | False    | It set color of the provinces with `0` value                                                             |
| `selectedProvinceColor`   | `string`   | False    | Color of the clicked province                                                                            |
| `tooltipTitle`            | `string`   | False    | You can add a name for the value in tooltip                                                              |
| `selectProvinceHandler`   | `function` | False    | You can define a function like example above to get selected province name                               |

## Authors

- [@simamojtahedi](https://github.com/simamojtahedi)
