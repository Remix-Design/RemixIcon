import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.3608 10.9468L18.0176 16.6037L16.6034 18.0179L10.9466 12.361L5.99683 17.3108V5.99707H17.3105L12.3608 10.9468Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpFill'

/**
 * Remix Icon: Arrow Left Up Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-fill Remix Icon Docs}
 */
export const ArrowLeftUpFill = memo(Icon)
