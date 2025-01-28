import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_628)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M11.3047 23.9128C11.3047 25.3535 12.4727 26.5215 13.9134 26.5215H21.7395C21.7395 27.7221 22.7127 28.6954 23.9134 28.6954H26.522C27.7227 28.6954 28.6959 27.7221 28.6959 26.5215V23.9128H11.3047Z"
          fill={color}
        />
        <Path
          d="M28.913 11.3043V17.3913C28.913 18.3503 28.1328 19.1304 27.1738 19.1304V21.7391C29.5712 21.7391 31.5216 19.7886 31.5216 17.3913V11.3043H28.913Z"
          fill={color}
        />
        <Path
          d="M10.2177 17.3913C10.2177 18.3503 9.4375 19.1304 8.47852 19.1304V21.7391C10.8759 21.7391 12.8263 19.7886 12.8263 17.3913V11.3043H10.2177V17.3913Z"
          fill={color}
        />
        <Path d="M25 11.3043H27.6087V17.3913H25V11.3043Z" fill={color} />
        <Path
          d="M21.0873 14.7825C21.0873 15.0222 20.8923 15.2172 20.6526 15.2172C20.4129 15.2172 20.2178 15.0222 20.2178 14.7825V11.3042H17.6091V14.7825C17.6091 15.0222 17.4141 15.2172 17.1744 15.2172C16.9347 15.2172 16.7396 15.0222 16.7396 14.7825V11.3042H14.1309V14.7825C14.1309 16.4607 15.4962 17.826 17.1744 17.826C17.8207 17.826 18.4201 17.6229 18.9135 17.2779C19.4069 17.6228 20.0063 17.826 20.6527 17.826C20.7828 17.826 20.9108 17.8169 21.0366 17.8008C20.8518 18.5625 20.1659 19.1303 19.3483 19.1303V21.739C21.7457 21.739 23.6961 19.7885 23.6961 17.3912V14.7825V11.3042H21.0874V14.7825H21.0873Z"
          fill={color}
        />
        <Path d="M14.1309 19.1304H18.0439V21.739H14.1309V19.1304Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_51_628">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SaudiArabia'

/**
 * Flags by `Deji.Zeal`: Saudi Arabia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaudiArabia = memo(Icon)
