import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightDownLine'

/**
 * Remix Icon: Arrow Right Down Line
 * @see {@link https://remixicon.com/icon/arrow-right-down-line Remix Icon Docs}
 */
export const ArrowRightDownLine = memo(Icon)
