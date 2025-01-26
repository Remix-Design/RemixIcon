import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    </Svg>
  )
}

Icon.displayName = 'CheckboxBlankCircleFill'

/**
 * Remix Icon: Checkbox Blank Circle Fill
 * @see {@link https://remixicon.com/icon/checkbox-blank-circle-fill Remix Icon Docs}
 */
export const CheckboxBlankCircleFill = memo(Icon)
