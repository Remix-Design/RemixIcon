import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM15 4H5V20H19V8H15V4ZM13 9V13H16V15H11V9H13Z" />
    </Svg>
  )
}

Icon.displayName = 'FileHistoryLine'

/**
 * Remix Icon: File History Line
 * @see {@link https://remixicon.com/icon/file-history-line Remix Icon Docs}
 */
export const FileHistoryLine = memo(Icon)
