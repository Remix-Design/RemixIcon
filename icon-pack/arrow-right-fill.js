import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightFill'

/**
 * Remix Icon: Arrow Right Fill
 * @see {@link https://remixicon.com/icon/arrow-right-fill Remix Icon Docs}
 */
export const ArrowRightFill = memo(Icon)
