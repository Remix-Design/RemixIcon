import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 4V9H10V11H16V17H10V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H16ZM14 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8V15H14V13H8V7H14V4ZM2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'FriendicaLine'

/**
 * Remix Icon: Friendica Line
 * @see {@link https://remixicon.com/icon/friendica-line Remix Icon Docs}
 */
export const FriendicaLine = memo(Icon)
