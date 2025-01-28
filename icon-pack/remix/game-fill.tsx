import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C15.1215 2 17.9089 3.43021 19.7428 5.67108L13.4142 12L19.7428 18.3289C17.9089 20.5698 15.1215 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5Z" />
    </Svg>
  )
}

Icon.displayName = 'GameFill'

/**
 * Remix Icon: Game Fill
 * @see {@link https://remixicon.com/icon/game-fill Remix Icon Docs}
 */
export const GameFill = memo(Icon)
