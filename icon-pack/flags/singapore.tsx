import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_572)">
        <Path
          d="M20 39.9998C31.0457 39.9998 40 31.0454 40 19.9998C40 8.95406 31.0457 -0.000244141 20 -0.000244141C8.95431 -0.000244141 0 8.95406 0 19.9998C0 31.0454 8.95431 39.9998 20 39.9998Z"
          fill={color}
        />
        <Path
          d="M0 19.9998C0 8.95413 8.95438 -0.000244141 20 -0.000244141C31.0456 -0.000244141 40 8.95413 40 19.9998"
          fill={color}
        />
        <Path
          d="M12.1732 10.4348C12.1732 7.52087 14.2211 5.08665 16.9558 4.48938C16.5355 4.39767 16.0995 4.3479 15.6514 4.3479C12.2896 4.3479 9.56445 7.07306 9.56445 10.4349C9.56445 13.7967 12.2896 16.5218 15.6514 16.5218C16.0993 16.5218 16.5354 16.472 16.9558 16.3802C14.2211 15.783 12.1732 13.3488 12.1732 10.4348V10.4348Z"
          fill={color}
        />
        <Path
          d="M19.9985 4.78247L20.4302 6.11099H21.8272L20.697 6.93216L21.1287 8.26067L19.9985 7.43966L18.8684 8.26067L19.3001 6.93216L18.1699 6.11099H19.5668L19.9985 4.78247Z"
          fill={color}
        />
        <Path
          d="M16.61 7.39136L17.0416 8.71995H18.4386L17.3084 9.54104L17.7402 10.8696L16.61 10.0485L15.4797 10.8696L15.9115 9.54104L14.7812 8.71995H16.1782L16.61 7.39136Z"
          fill={color}
        />
        <Path
          d="M23.3891 7.39136L23.8209 8.71995H25.2178L24.0876 9.54104L24.5194 10.8696L23.3891 10.0485L22.259 10.8696L22.6907 9.54104L21.5605 8.71995H22.9574L23.3891 7.39136Z"
          fill={color}
        />
        <Path
          d="M22.0845 11.3042L22.5162 12.6328H23.913L22.7829 13.4539L23.2146 14.7824L22.0845 13.9614L20.9543 14.7824L21.386 13.4539L20.2559 12.6328H21.6527L22.0845 11.3042Z"
          fill={color}
        />
        <Path
          d="M17.9146 11.3042L18.3462 12.6328H19.7433L18.613 13.4539L19.0448 14.7824L17.9146 13.9614L16.7844 14.7824L17.2161 13.4539L16.0859 12.6328H17.4829L17.9146 11.3042Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_572">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Singapore'

/**
 * Flags by `Deji.Zeal`: Singapore
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Singapore = memo(Icon)
