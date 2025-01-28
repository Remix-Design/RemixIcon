import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" />
    </Svg>
  )
}

Icon.displayName = 'Progress2Fill'

/**
 * Remix Icon: Progress 2 Fill
 * @see {@link https://remixicon.com/icon/progress-2-fill Remix Icon Docs}
 */
export const Progress2Fill = memo(Icon)
