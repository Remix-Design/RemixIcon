import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 18H12V20H2V18ZM2 11H22V13H2V11ZM2 4H22V6H2V4ZM18 18V15H20V18H23V20H20V23H18V20H15V18H18Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayListAddFill'

/**
 * Remix Icon: Play List Add Fill
 * @see {@link https://remixicon.com/icon/play-list-add-fill Remix Icon Docs}
 */
export const PlayListAddFill = memo(Icon)
