import { Cta } from '../blocks/Cta'
import { Features } from '../blocks/Features'
import { Hero } from '../blocks/Hero'
import { Testimonials } from '../blocks/Testimonials'
import { Page } from '@/payload-types'

type BlocksProps = {
  blocks: Page['layout']
}

const blockComponents = {
  hero: Hero,
  features: Features,
  testimonials: Testimonials,
  cta: Cta,
}

export const Blocks = ({ blocks }: BlocksProps) => {
  const hasBlocks = blocks && blocks.length > 0;

  if (!hasBlocks) {
    return null;
  }

  return (
    <div>
      {blocks.map((block, index) => {
        const { blockType } = block;
        if (blockType && blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType];
          
          // @ts-expect-error -- dynamic component props
          return <BlockComponent key={index} {...block} />
        }
        return <p key={index}>The component for block type &ldquo;{blockType}&rdquo; does not exist.</p>
      })}
    </div>
  )
}