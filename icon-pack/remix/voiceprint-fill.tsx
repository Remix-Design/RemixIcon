import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z" />
    </Svg>
  )
}

Icon.displayName = 'VoiceprintFill'

/**
 * Remix Icon: Voiceprint Fill
 * @see {@link https://remixicon.com/icon/voiceprint-fill Remix Icon Docs}
 */
export const VoiceprintFill = memo(Icon)
