'use client'

import useCurrentLocation from '@/hooks/useCurrentLocation'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const { location, error } = useCurrentLocation()
  const [naverMap, setNaverMap] = useState<naver.maps.Map>()

  const ncpClientId = 'r3h10r9ucg'

  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (naverMap !== undefined) {
      return
    }

    if (location === undefined) {
      return
    }

    const { naver } = window as Partial<typeof window>
    if ((mapElement.current === null) || naver === undefined) {
      return
    }

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const naverLocation = new naver.maps.LatLng(location.latitude, location.longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: naverLocation,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    }

    const map = new naver.maps.Map(mapElement.current, mapOptions)
    setNaverMap(map)

    const marker = new naver.maps.Marker({
      position: naverLocation,
      map,
    })
  }, [location])

  return (
    <>
      <div>지도... {JSON.stringify(location)} {JSON.stringify(error)}</div>
      <div ref={mapElement} style={{ minHeight: '400px' }}></div>
      <Script src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${ncpClientId}`}></Script>
    </>
  )
}
