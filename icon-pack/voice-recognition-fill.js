import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.998 3V21H2.99805V3H20.998ZM12.998 6H10.998V18H12.998V6ZM8.99805 9H6.99805V15H8.99805V9ZM16.998 9H14.998V15H16.998V9Z" />
    </Svg>
  )
}

Icon.displayName = 'VoiceRecognitionFill'

/**
 * Remix Icon: Voice Recognition Fill
 * @see {@link https://remixicon.com/icon/voice-recognition-fill Remix Icon Docs}
 */
export const VoiceRecognitionFill = memo(Icon)
