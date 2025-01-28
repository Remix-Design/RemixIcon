import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 5C1.44772 5 1 5.44772 1 6V18C1 18.5523 1.44772 19 2 19H5V17H7V19H9V17H11V19H13V17H15V19H17V17H19V19H22C22.5523 19 23 18.5523 23 18V6C23 5.44772 22.5523 5 22 5H2ZM5 9H11V12H5V9ZM13 9H19V12H13V9Z" />
    </Svg>
  )
}

Icon.displayName = 'RamFill'

/**
 * Remix Icon: Ram Fill
 * @see {@link https://remixicon.com/icon/ram-fill Remix Icon Docs}
 */
export const RamFill = memo(Icon)
