import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 12L10 18V6L16 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightSFill'

/**
 * Remix Icon: Arrow Right S Fill
 * @see {@link https://remixicon.com/icon/arrow-right-s-fill Remix Icon Docs}
 */
export const ArrowRightSFill = memo(Icon)
