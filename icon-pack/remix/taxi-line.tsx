import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.44721 6.10557C4.786 5.428 5.47852 5 6.23607 5H9V3H15V5H17.7639C18.5215 5 19.214 5.428 19.5528 6.10557L22 11ZM20 13H4V18H20V13ZM4.23607 11H19.7639L17.7639 7H6.23607L4.23607 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z" />
    </Svg>
  )
}

Icon.displayName = 'TaxiLine'

/**
 * Remix Icon: Taxi Line
 * @see {@link https://remixicon.com/icon/taxi-line Remix Icon Docs}
 */
export const TaxiLine = memo(Icon)
