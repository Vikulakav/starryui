import {
 StarryUIComponent,
 StarryUITrait,
 StarryUITraitConfig,
 applyTraits,
 starryComponent,
} from '@starryui/traits'

export const defaultButtonConfig: StarryUITraitConfig = { themeFacet: 'button' }

export const button = starryComponent<HTMLButtonElement>(function (
 traits: StarryUITrait[]
) {
 return function (config?: StarryUITraitConfig) {
  const elem = document.createElement('button')
  applyTraits(elem, traits, Object.assign({}, defaultButtonConfig, config))
  return elem
 }
})