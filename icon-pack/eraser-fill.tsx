import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966ZM15.6567 14.5113L19.1922 10.9758L12.8283 4.61185L9.29275 8.14738L15.6567 14.5113Z" />
    </Svg>
  )
}

Icon.displayName = 'EraserFill'

/**
 * Remix Icon: Eraser Fill
 * @see {@link https://remixicon.com/icon/eraser-fill Remix Icon Docs}
 */
export const EraserFill = memo(Icon)
