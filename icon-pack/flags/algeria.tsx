import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2204)">
        <Path
          d="M20.0003 0C31.0459 0 40.0003 8.95438 40.0003 20C40.0003 31.0456 31.0459 40 20.0003 40C20.0003 39.1305 17.3916 20 17.3916 20L20.0003 0Z"
          fill={color}
        />
        <Path
          d="M20 40.0001C8.95437 40.0001 0 31.0458 0 20.0001C0 8.9545 8.95437 0.00012207 20 0.00012207"
          fill={color}
        />
        <Path
          d="M24.2975 16.1637L22.6566 18.425L19.999 17.5632L21.6426 19.8225L20.0018 22.0839L22.6584 21.2189L24.302 23.4782L24.3003 20.6844L26.9569 19.8194L24.2994 18.9577L24.2975 16.1637Z"
          fill={color}
        />
        <Path
          d="M21.6597 25.6522C18.5381 25.6522 16.0075 23.1216 16.0075 20C16.0075 16.8785 18.5381 14.3478 21.6597 14.3478C22.633 14.3478 23.5488 14.5939 24.3484 15.0272C23.094 13.8006 21.3787 13.0435 19.4858 13.0435C15.6437 13.0435 12.5293 16.158 12.5293 19.9999C12.5293 23.8419 15.6438 26.9564 19.4858 26.9564C21.3787 26.9564 23.0941 26.1993 24.3484 24.9727C23.5488 25.4061 22.633 25.6522 21.6597 25.6522Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2204">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Algeria'

/**
 * Flags by `Deji.Zeal`: Algeria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Algeria = memo(Icon)
