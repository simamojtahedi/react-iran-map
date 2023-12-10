import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import IranMap from '../src/components/mapSvg/IranMap'

const testData = {
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

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<IranMap data={testData} colorRange={''} />)
  })
})
