import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM20 13H4V19H20V13ZM20 7H4V11H7V9H9V11H15V9H17V11H20V7ZM9 3V5H15V3H9Z" />
    </Svg>
  )
}

Icon.displayName = 'Briefcase2Line'

/**
 * Remix Icon: Briefcase 2 Line
 * @see {@link https://remixicon.com/icon/briefcase-2-line Remix Icon Docs}
 */
export const Briefcase2Line = memo(Icon)
