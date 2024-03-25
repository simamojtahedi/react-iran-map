/* eslint-disable @typescript-eslint/ban-types */
export interface selectedProvinceType {
  name: string | undefined
  faName: string | undefined
}

export interface provinceType {
  provinceName: string
  provinceFaName: string
}

export interface mapDataType {
  [key: string]: number
}

export interface IranMapWrapperProps {
  data: {}
  width?: number | string
  colorRange: string
  textColor?: string
  defaultSelectedProvince?: string
  selectedProvinceColor?: string
  tooltipTitle?: string
  selectProvinceHandler?: Function
  deactiveProvinceColor?: string
}

export interface MapProps {
  textColor: string
  mapRef: React.RefObject<any>
  provinceName: null | string
  pathClickedHandle: Function
  pathMouseOverHandler: Function
  data: {}
  tooltipTitle: undefined | string
  width: number | string | undefined
}
