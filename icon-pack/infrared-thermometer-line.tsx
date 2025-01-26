import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 2V11H17.999L18 12C18 14.2091 16.2091 16 14 16H12.621L12.0084 19.1113L12.9192 20.4324C13.2327 20.8871 13.1182 21.5098 12.6635 21.8233C12.4966 21.9384 12.2987 22 12.0959 22H3L5.31286 11.9762L3 11L7 2H21ZM19 4H8.29975L5.65535 9.9499L7.6397 10.7874L5.51402 20H10.1918L9.88322 19.5524L11.9604 9H19V4ZM15.999 11H13.6051L13.014 14H14C15.1046 14 16 13.1046 16 12L15.999 11Z" />
    </Svg>
  )
}

Icon.displayName = 'InfraredThermometerLine'

/**
 * Remix Icon: Infrared Thermometer Line
 * @see {@link https://remixicon.com/icon/infrared-thermometer-line Remix Icon Docs}
 */
export const InfraredThermometerLine = memo(Icon)
