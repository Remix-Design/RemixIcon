import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7784 5.63589L18.3644 4.22168L6.92908 15.6569L6.92908 10.0712H4.92908L4.92908 19.0712L13.9291 19.0712V17.0712L8.34326 17.0712L19.7784 5.63589Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftDownLongLine'

/**
 * Remix Icon: Arrow Left Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-long-line Remix Icon Docs}
 */
export const ArrowLeftDownLongLine = memo(Icon)
