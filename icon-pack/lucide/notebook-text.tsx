import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M1.33333 4.00001H3.99999M1.33333 6.66668H3.99999M1.33333 9.33334H3.99999M1.33333 12H3.99999M6.33333 5.33334H9.66666M6.33333 8.00001H10.6667M6.33333 10.6667H9.33333M3.99999 1.33334H12C12.7364 1.33334 13.3333 1.9303 13.3333 2.66668V13.3333C13.3333 14.0697 12.7364 14.6667 12 14.6667H3.99999C3.26362 14.6667 2.66666 14.0697 2.66666 13.3333V2.66668C2.66666 1.9303 3.26362 1.33334 3.99999 1.33334Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'NotebookText'

/**
 * Lucide Icon: Notebook Text
 * @see {@link https://lucide.dev/icons/notebook-text Lucide Icon Docs}
 */
export const NotebookText = memo(Icon)
