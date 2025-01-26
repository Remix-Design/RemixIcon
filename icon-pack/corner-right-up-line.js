import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.9999 19.0001L5.00003 19.0002L5 17.0002L11.9999 17.0001L12 6.8283L8.05027 10.778L6.63606 9.36381L13 2.99985L19.364 9.36381L17.9498 10.778L14 6.82825L13.9999 19.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerRightUpLine'

/**
 * Remix Icon: Corner Right Up Line
 * @see {@link https://remixicon.com/icon/corner-right-up-line Remix Icon Docs}
 */
export const CornerRightUpLine = memo(Icon)
