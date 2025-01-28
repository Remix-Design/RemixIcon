import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 7V11H13V7H11ZM14 12V16H16V12H14ZM8 12V16H10V12H8Z" />
    </Svg>
  )
}

Icon.displayName = 'Outlet2Fill'

/**
 * Remix Icon: Outlet 2 Fill
 * @see {@link https://remixicon.com/icon/outlet-2-fill Remix Icon Docs}
 */
export const Outlet2Fill = memo(Icon)
