import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17 16L22 12L17 8V11H9V13H17V16Z" />
    </Svg>
  )
}

Icon.displayName = 'LogoutCircleRFill'

/**
 * Remix Icon: Logout Circle R Fill
 * @see {@link https://remixicon.com/icon/logout-circle-r-fill Remix Icon Docs}
 */
export const LogoutCircleRFill = memo(Icon)
