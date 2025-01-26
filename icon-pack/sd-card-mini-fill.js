import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V12.4196C4 12.1549 4.10493 11.901 4.29179 11.7135L5.8541 10.1464C5.94754 10.0526 6 9.92569 6 9.79335V3C6 2.44772 6.44772 2 7 2ZM15 4V8H17V4H15ZM12 4V8H14V4H12ZM9 4V8H11V4H9Z" />
    </Svg>
  )
}

Icon.displayName = 'SdCardMiniFill'

/**
 * Remix Icon: Sd Card Mini Fill
 * @see {@link https://remixicon.com/icon/sd-card-mini-fill Remix Icon Docs}
 */
export const SdCardMiniFill = memo(Icon)
