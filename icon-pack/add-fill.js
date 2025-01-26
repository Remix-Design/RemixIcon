import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
    </Svg>
  )
}

Icon.displayName = 'AddFill'

/**
 * Remix Icon: Add Fill
 * @see {@link https://remixicon.com/icon/add-fill Remix Icon Docs}
 */
export const AddFill = memo(Icon)
