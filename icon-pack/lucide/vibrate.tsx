import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M1.33333 5.33334L2.66666 6.66668L1.33333 8.00001L2.66666 9.33334L1.33333 10.6667M14.6667 5.33334L13.3333 6.66668L14.6667 8.00001L13.3333 9.33334L14.6667 10.6667M5.99999 3.33334H9.99999C10.3682 3.33334 10.6667 3.63182 10.6667 4.00001V12C10.6667 12.3682 10.3682 12.6667 9.99999 12.6667H5.99999C5.6318 12.6667 5.33333 12.3682 5.33333 12V4.00001C5.33333 3.63182 5.6318 3.33334 5.99999 3.33334Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'Vibrate'

/**
 * Lucide Icon: Vibrate
 * @see {@link https://lucide.dev/icons/vibrate Lucide Icon Docs}
 */
export const Vibrate = memo(Icon)
