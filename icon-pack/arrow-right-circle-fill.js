import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightCircleFill'

/**
 * Remix Icon: Arrow Right Circle Fill
 * @see {@link https://remixicon.com/icon/arrow-right-circle-fill Remix Icon Docs}
 */
export const ArrowRightCircleFill = memo(Icon)
