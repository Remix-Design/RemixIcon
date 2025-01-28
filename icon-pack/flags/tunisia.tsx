import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_315)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.95431 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.95431 40.0002 20 40.0002Z"
          fill="#D80027"
        />
        <Path
          d="M20.0008 29.5653C25.2835 29.5653 29.566 25.2828 29.566 20.0001C29.566 14.7173 25.2835 10.4348 20.0008 10.4348C14.7181 10.4348 10.4355 14.7173 10.4355 20.0001C10.4355 25.2828 14.7181 29.5653 20.0008 29.5653Z"
          fill="#F0F0F0"
        />
        <Path
          d="M21.177 16.343L22.8179 18.6043L25.4755 17.7426L23.832 20.002L25.4727 22.2633L22.816 21.3983L21.1725 23.6576L21.1742 20.8638L18.5176 19.9988L21.1752 19.1371L21.177 16.343Z"
          fill="#D80027"
        />
        <Path
          d="M22.1734 25.6524C19.0518 25.6524 16.5212 23.1218 16.5212 20.0003C16.5212 16.8787 19.0518 14.3481 22.1734 14.3481C23.1466 14.3481 24.0625 14.5942 24.862 15.0275C23.6077 13.8008 21.8925 13.0437 19.9995 13.0437C16.1576 13.0437 13.043 16.1582 13.043 20.0002C13.043 23.8421 16.1576 26.9567 19.9995 26.9567C21.8925 26.9567 23.6078 26.1996 24.862 24.9729C24.0625 25.4064 23.1466 25.6524 22.1734 25.6524Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_315">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Tunisia'

/**
 * Flags by `Deji.Zeal`: Tunisia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Tunisia = memo(Icon)
