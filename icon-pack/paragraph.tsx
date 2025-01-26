import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6V21H10V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H20V6H17V21H15V6H12ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Paragraph'

/**
 * Remix Icon: Paragraph
 * @see {@link https://remixicon.com/icon/paragraph Remix Icon Docs}
 */
export const Paragraph = memo(Icon)
