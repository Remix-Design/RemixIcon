import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1320)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M31.3041 20.2173H8.69531C8.69531 21.7781 10.0548 23.0434 11.6155 23.0434H11.5214C11.5214 24.6042 12.7866 25.8695 14.3475 25.8695C14.3475 27.4303 15.6127 28.6956 17.1736 28.6956H22.8258C24.3866 28.6956 25.6519 27.4303 25.6519 25.8695C27.2127 25.8695 28.478 24.6042 28.478 23.0434H28.3839C29.9445 23.0434 31.3041 21.7781 31.3041 20.2173V20.2173Z"
          fill={color}
        />
        <Path
          d="M27.826 16.5216C27.826 20.8438 24.3221 24.3477 19.9999 24.3477C15.6777 24.3477 12.1738 20.8438 12.1738 16.5216"
          fill={color}
        />
        <Path
          d="M25.9779 16.5216L23.5354 17.6706L24.8361 20.0362L22.1837 19.5288L21.8476 22.2081L20.0002 20.2374L18.1527 22.2081L17.8167 19.5288L15.1643 20.036L16.465 17.6705L14.0225 16.5216L16.465 15.3727L15.1643 13.0071L17.8166 13.5145L18.1528 10.8351L20.0002 12.8058L21.8477 10.8351L22.1837 13.5145L24.8361 13.0071L23.5354 15.3727L25.9779 16.5216Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1320">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Kazakhstan'

/**
 * Flags by Deji.Zeal: Kazakhstan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Kazakhstan = memo(Icon)
