import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0001 22.0001C7.02956 22.0001 3.00012 17.9707 3.00012 13.0001C3.00012 8.02956 7.02956 4.00012 12.0001 4.00012C16.9707 4.00012 21.0001 8.02956 21.0001 13.0001C21.0001 17.9707 16.9707 22.0001 12.0001 22.0001ZM13.0001 13.0001V8.00012H11.0001V15.0001H16.0001V13.0001H13.0001ZM1.74707 6.2826L5.2826 2.74707L6.69682 4.16128L3.16128 7.69682L1.74707 6.2826ZM18.7176 2.74707L22.2532 6.2826L20.839 7.69682L17.3034 4.16128L18.7176 2.74707Z" />
    </Svg>
  )
}

Icon.displayName = 'AlarmFill'

/**
 * Remix Icon: Alarm Fill
 * @see {@link https://remixicon.com/icon/alarm-fill Remix Icon Docs}
 */
export const AlarmFill = memo(Icon)
