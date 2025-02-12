import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M1.33333 6.66667V8.66667M3.99999 4V11.3333M6.66666 2V14M9.33333 5.33333V10M12 3.33333V12M14.6667 6.66667V8.66667"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'AudioLines'

/**
 * Lucide Icon: Audio Lines
 * @see {@link https://lucide.dev/icons/audio-lines Lucide Icon Docs}
 */
export const AudioLines = memo(Icon)
