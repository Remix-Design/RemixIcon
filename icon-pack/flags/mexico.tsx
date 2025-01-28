import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1059)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M39.9997 20.0001C39.9997 12.0709 35.3852 5.21962 28.6953 1.98462V38.0155C35.3852 34.7806 39.9997 27.9293 39.9997 20.0001V20.0001Z"
          fill="#D80027"
        />
        <Path
          d="M0 20.0001C0 27.9293 4.61445 34.7805 11.3044 38.0155V1.98462C4.61445 5.21962 0 12.0709 0 20.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M14.7822 20.0001C14.7822 22.8816 17.1182 25.2175 19.9996 25.2175C22.8811 25.2175 25.2171 22.8816 25.2171 20.0001V18.261H14.7822V20.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M26.9561 16.5219H21.7387C21.7387 15.5614 20.96 14.7827 19.9995 14.7827C19.0391 14.7827 18.2604 15.5614 18.2604 16.5219H13.043C13.043 17.4824 13.8796 18.261 14.84 18.261H14.7821C14.7821 19.2215 15.5607 20.0001 16.5212 20.0001C16.5212 20.9607 17.2998 21.7393 18.2604 21.7393H21.7387C22.6992 21.7393 23.4778 20.9607 23.4778 20.0001C24.4384 20.0001 25.217 19.2215 25.217 18.261H25.159C26.1195 18.261 26.9561 17.4824 26.9561 16.5219Z"
          fill="#FF9811"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1059">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Mexico'

/**
 * Flags by `Deji.Zeal`: Mexico
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mexico = memo(Icon)
