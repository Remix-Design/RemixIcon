import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpLine'

/**
 * Remix Icon: Arrow Right Up Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-line Remix Icon Docs}
 */
export const ArrowRightUpLine = memo(Icon)
