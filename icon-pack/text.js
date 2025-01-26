import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6V21H11V6H5V4H19V6H13Z" />
    </Svg>
  )
}

Icon.displayName = 'Text'

/**
 * Remix Icon: Text
 * @see {@link https://remixicon.com/icon/text Remix Icon Docs}
 */
export const Text = memo(Icon)
