import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99805 15V19H8.99805V21H2.99805V15H4.99805ZM20.998 15V21H14.998V19H18.998V15H20.998ZM12.998 6V18H10.998V6H12.998ZM8.99805 9V15H6.99805V9H8.99805ZM16.998 9V15H14.998V9H16.998ZM8.99805 3V5H4.99805V9H2.99805V3H8.99805ZM20.998 3V9H18.998V5H14.998V3H20.998Z" />
    </Svg>
  )
}

Icon.displayName = 'VoiceRecognitionLine'

/**
 * Remix Icon: Voice Recognition Line
 * @see {@link https://remixicon.com/icon/voice-recognition-line Remix Icon Docs}
 */
export const VoiceRecognitionLine = memo(Icon)
