import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpLongLine'

/**
 * Remix Icon: Arrow Right Up Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-long-line Remix Icon Docs}
 */
export const ArrowRightUpLongLine = memo(Icon)
