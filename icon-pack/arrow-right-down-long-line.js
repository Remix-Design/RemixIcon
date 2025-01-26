import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.2216 5.63589L5.63562 4.22168L17.0709 15.6569V10.0712H19.0709L19.0709 19.0712L10.0709 19.0712L10.0709 17.0712L15.6567 17.0712L4.2216 5.63589Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightDownLongLine'

/**
 * Remix Icon: Arrow Right Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-down-long-line Remix Icon Docs}
 */
export const ArrowRightDownLongLine = memo(Icon)
