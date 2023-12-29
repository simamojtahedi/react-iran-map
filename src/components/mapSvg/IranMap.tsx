import React, { useEffect, useRef, useState } from 'react'
import IranMapWrapper from './IranMapWrapper'
import { provinces } from '../../data/provinces'
import { IranMapWrapperProps, mapDataType, provinceType, selectedProvinceType } from '../../interfaces'
import './iran-map.css'

const IranMap: React.FC<IranMapWrapperProps> = ({
  data,
  width,
  colorRange,
  defaultSelectedProvince,
  textColor = '#000',
  deactiveProvinceColor = '#e6e6e6',
  selectedProvinceColor,
  tooltipTitle = '',
  selectProvinceHandler,
}) => {
  const mapRef = useRef(null)
  const [provinceName, setProvinceName] = useState<null | string>(null)
  const [selectedProvince, setSelectedProvince] = useState<selectedProvinceType>({
    name: defaultSelectedProvince ? defaultSelectedProvince : '',
    faName: defaultSelectedProvince
      ? provinces.find((province: provinceType) => province.provinceName === defaultSelectedProvince)?.provinceFaName
      : '',
  })

  const pathMouseOverHandler = (event: any) => {
    const path = event.target
    setProvinceName(path.dataset.name)
  }

  const pathClickedHandle = (pathName: string) => {
    setSelectedProvince({
      faName: pathName,
      name: provinces.find((province: provinceType) => province.provinceFaName === pathName)?.provinceName,
    })

    selectProvinceHandler &&
      selectProvinceHandler({
        faName: pathName,
        name: provinces.find((province: provinceType) => province.provinceFaName === pathName)?.provinceName,
      })
  }

  const setPathBackgrounds = (svg: Element, mapData: mapDataType) => {
    const polygons = svg.querySelectorAll('polygon')
    const paths = svg.querySelectorAll('path')

    const values = Object.values(mapData)
    //@ts-ignore
    const min = Math.min(...values)
    const max = Math.max(...values)

    const setColorHandler = (element: SVGPathElement) => {
      const title = provinces.find((item: provinceType) => item.provinceFaName === element.getAttribute('data-name'))
        ?.provinceName

      const selectedItem = provinces.find(
        (province: provinceType) => province.provinceFaName === selectedProvince.faName,
      )?.provinceFaName

      if (title) {
        const count = mapData[title.trim()]
        if (count === 0) {
          element.style.fill = deactiveProvinceColor
        } else {
          if (min !== max) {
            const alpha = Math.max(0.1, Math.min(1, (count - min) / (max - min)))
            const usageColor = `rgba(${colorRange}, ${alpha})`
            element.style.fill = usageColor
          } else {
            const usageColor = `rgba(${colorRange}, ${min > 0 ? 1 : 0.1})`
            element.style.fill = usageColor
          }
        }
      }
      if (element.getAttribute('data-name') === selectedItem && selectedProvinceColor) {
        element.style.fill = selectedProvinceColor
      }
    }

    paths.forEach((path: SVGPathElement) => {
      setColorHandler(path)
    })

    polygons.forEach((polygon: SVGPathElement) => {
      setColorHandler(polygon)
    })
  }

  useEffect(() => {
    if (mapRef.current) {
      setPathBackgrounds(mapRef.current, data)
    }
  }, [mapRef, selectedProvince])

  return (
    <div className='iran-map-wrapper' style={{ width: width ? width : 500 }}>
      <IranMapWrapper
        mapRef={mapRef}
        textColor={textColor}
        provinceName={provinceName}
        pathClickedHandle={pathClickedHandle}
        pathMouseOverHandler={pathMouseOverHandler}
        data={data}
        tooltipTitle={tooltipTitle}
        width={width}
      />
    </div>
  )
}

export default IranMap
