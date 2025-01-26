import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.45711 18.9539L15.0208 10.3902L13.6066 8.97596L5.04289 17.5397L6.45711 18.9539ZM12.1924 7.56174L10.7782 6.14753L12.1924 4.73331L13.9602 6.50108L16.7886 3.67265C17.1791 3.28213 17.8123 3.28213 18.2028 3.67265L20.3241 5.79397C20.7146 6.1845 20.7146 6.81766 20.3241 7.20819L17.4957 10.0366L19.2635 11.8044L17.8492 13.2186L16.435 11.8044L7.24264 20.9968H3V16.7541L12.1924 7.56174Z" />
    </Svg>
  )
}

Icon.displayName = 'SipLine'

/**
 * Remix Icon: Sip Line
 * @see {@link https://remixicon.com/icon/sip-line Remix Icon Docs}
 */
export const SipLine = memo(Icon)
