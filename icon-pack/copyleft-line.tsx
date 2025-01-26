import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 17C10.1805 17 8.58698 16.0265 7.71225 14.5723L9.42649 13.5432C9.95089 14.4162 10.9069 15 12 15C13.6575 15 15 13.6575 15 12C15 10.3425 13.6575 9 12 9C10.9074 9 9.95162 9.58339 9.42709 10.4558L7.71225 9.42771C8.58698 7.9735 10.1805 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
    </Svg>
  )
}

Icon.displayName = 'CopyleftLine'

/**
 * Remix Icon: Copyleft Line
 * @see {@link https://remixicon.com/icon/copyleft-line Remix Icon Docs}
 */
export const CopyleftLine = memo(Icon)
