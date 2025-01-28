import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2214)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95437 31.0457 6.10352e-05 20 6.10352e-05C8.9543 6.10352e-05 0 8.95437 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001Z"
          fill="#D80027"
        />
        <Path
          d="M31.304 14.8444H24.0598C24.507 14.3761 24.7822 13.7422 24.7822 13.0435C24.7822 11.6028 23.6142 10.4348 22.1735 10.4348C21.2659 10.4348 20.4669 10.8986 19.9996 11.6018C19.5323 10.8986 18.7333 10.4348 17.8257 10.4348C16.385 10.4348 15.217 11.6028 15.217 13.0435C15.217 13.7422 15.4923 14.3762 15.9395 14.8444H8.69531C8.69531 16.7654 10.3685 18.3226 12.2894 18.3226H12.1734C12.1734 20.2437 13.7307 21.801 15.6518 21.801C15.6518 22.4232 15.8158 23.0065 16.102 23.5115L13.2169 26.3967L15.4305 28.6101L18.5705 25.4702C18.6934 25.5153 18.8207 25.5515 18.9521 25.5761L17.0547 29.8601L19.9996 33.0435L22.9445 29.8599L21.0471 25.5759C21.1786 25.5513 21.3058 25.5152 21.4288 25.47L24.5688 28.61L26.7823 26.3965L23.8971 23.5112C24.1834 23.0063 24.3474 22.4229 24.3474 21.8008C26.2684 21.8008 27.8257 20.2436 27.8257 18.3224H27.7098C29.6307 18.3225 31.304 16.7654 31.304 14.8444V14.8444Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2214">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Albania'

/**
 * Flags by `Deji.Zeal`: Albania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Albania = memo(Icon)
