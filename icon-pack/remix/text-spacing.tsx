import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 17H17V14.5L20.5 18L17 21.5V19H7V21.5L3.5 18L7 14.5V17ZM13 6V15H11V6H5V4H19V6H13Z" />
    </Svg>
  )
}

Icon.displayName = 'TextSpacing'

/**
 * Remix Icon: Text Spacing
 * @see {@link https://remixicon.com/icon/text-spacing Remix Icon Docs}
 */
export const TextSpacing = memo(Icon)
