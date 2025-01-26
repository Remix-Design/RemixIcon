import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.53614 5.11383 7.33243 6.86543 5.86492L9 8V2L3 2L5.44648 4.44656C3.33509 6.28002 2 8.9841 2 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ResetRightFill'

/**
 * Remix Icon: Reset Right Fill
 * @see {@link https://remixicon.com/icon/reset-right-fill Remix Icon Docs}
 */
export const ResetRightFill = memo(Icon)
