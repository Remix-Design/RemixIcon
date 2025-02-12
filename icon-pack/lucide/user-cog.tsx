import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6.66666 10H3.99999C3.29275 10 2.61447 10.281 2.11438 10.781C1.61428 11.2811 1.33333 11.9594 1.33333 12.6667V14M14.4667 10.9333L13.8667 10.7333M10.1333 9.26667L9.53333 9.06667M11.0667 12.4667L11.2667 11.8667M12.7333 8.13333L12.9333 7.53333M13.0667 12.4667L12.8 11.8M11.2 8.2L10.9333 7.53333M9.53333 11.0667L10.2 10.8M13.8 9.2L14.4667 8.93333M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10ZM8.66666 4.66667C8.66666 6.13943 7.47275 7.33333 6 7.33333C4.52724 7.33333 3.33333 6.13943 3.33333 4.66667C3.33333 3.19391 4.52724 2 6 2C7.47275 2 8.66666 3.19391 8.66666 4.66667Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'UserCog'

/**
 * Lucide Icon: User Cog
 * @see {@link https://lucide.dev/icons/user-cog Lucide Icon Docs}
 */
export const UserCog = memo(Icon)
