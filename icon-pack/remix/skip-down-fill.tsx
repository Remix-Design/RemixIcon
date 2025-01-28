import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipDownFill'

/**
 * Remix Icon: Skip Down Fill
 * @see {@link https://remixicon.com/icon/skip-down-fill Remix Icon Docs}
 */
export const SkipDownFill = memo(Icon)
