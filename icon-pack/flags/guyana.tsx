import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1480)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9999 -0.00012207C16.4639 -0.00012207 13.1429 0.918784 10.2607 2.52894V37.4708C13.143 39.081 16.4639 39.9999 19.9999 39.9999C31.0455 39.9999 39.9999 31.0455 39.9999 19.9999C39.9999 8.95425 31.0455 -0.00012207 19.9999 -0.00012207Z"
          fill="#6DA544"
        />
        <Path
          d="M10.32 2.49609C9.06176 3.19336 7.88691 4.02211 6.81355 4.9643C6.92207 4.86914 7.03168 4.77508 7.14215 4.68227L22.4597 19.9999L7.14207 35.3176C7.03152 35.2248 6.92199 35.1307 6.81348 35.0355C7.88684 35.9777 9.06176 36.8064 10.3199 37.5037L40.0003 19.9999L10.32 2.49609Z"
          fill="#F0F0F0"
        />
        <Path
          d="M8.63094 3.54541C8.02102 3.96775 7.43523 4.42221 6.87703 4.90791L20.0005 19.9999L6.87695 35.092C7.43516 35.5777 8.02094 36.0322 8.63086 36.4545L36.5769 19.9999L8.63094 3.54541Z"
          fill="#FFDA44"
        />
        <Path
          d="M7.14141 4.68237C6.6968 5.05597 6.26773 5.44761 5.85742 5.85784L18.2605 20L5.85742 34.1422C6.26773 34.5525 6.69672 34.9442 7.14141 35.3177L22.4591 20L7.14141 4.68237Z"
          fill="black"
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C9.08543 30.9146 12.1896 27.8104 20 20L5.85785 5.85779Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1480">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Guyana'

/**
 * Flags by `Deji.Zeal`: Guyana
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Guyana = memo(Icon)
