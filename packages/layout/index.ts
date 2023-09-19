import {
 StarryUITrait,
 StarryUITraitConfig,
 applyTraits,
 starryComponent,
} from '@starryui/traits'

export const defaultColumnConfig: StarryUITraitConfig = { themeFacet: 'column' }

export const column = starryComponent<HTMLDivElement>(function (
 traits: StarryUITrait[]
) {
 return function (config?: StarryUITraitConfig) {
  const elem = document.createElement('div')
  applyTraits(elem, traits, Object.assign({}, defaultColumnConfig, config))
  return elem
 }
})

export const defaultRowConfig: StarryUITraitConfig = { themeFacet: 'row' }

export const row = starryComponent<HTMLDivElement>(function (
 traits: StarryUITrait[]
) {
 return function (config?: StarryUITraitConfig) {
  const elem = document.createElement('div')
  applyTraits(elem, traits, Object.assign({}, defaultRowConfig, config))
  return elem
 }
})
