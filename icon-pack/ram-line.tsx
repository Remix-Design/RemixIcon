import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 7H21V17H19V15H17V17H15V15H13V17H11V15H9V17H7V15H5V17H3V7ZM2 5C1.44772 5 1 5.44772 1 6V18C1 18.5523 1.44772 19 2 19H22C22.5523 19 23 18.5523 23 18V6C23 5.44772 22.5523 5 22 5H2ZM11 9H5V12H11V9ZM13 9H19V12H13V9Z" />
    </Svg>
  )
}

Icon.displayName = 'RamLine'

/**
 * Remix Icon: Ram Line
 * @see {@link https://remixicon.com/icon/ram-line Remix Icon Docs}
 */
export const RamLine = memo(Icon)
