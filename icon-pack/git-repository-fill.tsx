import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM7 19V17H13V19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7ZM7 5V7H9V5H7ZM7 8V10H9V8H7ZM7 11V13H9V11H7Z" />
    </Svg>
  )
}

Icon.displayName = 'GitRepositoryFill'

/**
 * Remix Icon: Git Repository Fill
 * @see {@link https://remixicon.com/icon/git-repository-fill Remix Icon Docs}
 */
export const GitRepositoryFill = memo(Icon)
