import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7784 18.3641L18.3644 19.7783L6.92908 8.34305V13.9288H4.92908L4.92908 4.9288L13.9291 4.9288L13.9291 6.9288L8.34326 6.9288L19.7784 18.3641Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpLongLine'

/**
 * Remix Icon: Arrow Left Up Long Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-long-line Remix Icon Docs}
 */
export const ArrowLeftUpLongLine = memo(Icon)
