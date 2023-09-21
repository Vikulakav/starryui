import { button, withButtonImage } from '@starryui/button'
import { row } from '@starryui/layout'
import { attachMenu, menu } from '@starryui/menu'
import { StarryUIPage } from '@starryui/page'
import {
 StarryUITheme,
 applyTheme,
 attachStyle,
 attachThemeFacet,
 attachThemeVariables,
 useThemeDimensions,
} from '@starryui/theme'
import { themeMidnight } from '@starryui/theme-midnight'
import { themeSandstone } from '@starryui/theme-sandstone'
import { withTextContent } from '@starryui/traits'
import { tray, traySpacer } from '@starryui/tray'

attachThemeVariables('body', themeMidnight.variables)
attachStyle(themeMidnight, 'body', themeMidnight.facets.body)
useThemeDimensions.tiny()

export function mainTray(route: () => void, theme: StarryUITheme) {
 const themedButton = applyTheme(theme, button)
 const themedMenu = applyTheme(theme, menu)
 const themedRow = applyTheme(theme, row)
 const themedTray = applyTheme(theme, tray)

 const container = themedTray({
  style: {
   zIndex: '1',
  },
 })
 attachThemeVariables(container, themeMidnight.variables)
 document.body.appendChild(container)

 container.appendChild(
  themedButton.add(
   withButtonImage('/pages/home/starryui.png'),
   withTextContent('StarryUI')
  )({ href: '/#', tagName: 'a' })
 )
 const breadcrumbs = themedRow()
 container.appendChild(breadcrumbs)
 container.appendChild(traySpacer(themeMidnight))

 const themeNameStorageKey = 'theme'
 const storedThemeName = localStorage.getItem(themeNameStorageKey)
 let allThemes = [themeMidnight, themeSandstone]
 let activeTheme =
  allThemes.find((x) => x.name === storedThemeName) ?? themeMidnight

 const themeSwitcher = document.createElement('div')

 attachThemeFacet(themeSwitcher, themeMidnight, 'button')
 themeSwitcher.textContent = activeTheme.name
 attachMenu(
  themeSwitcher,
  themedMenu.add({
   type: 'onSelect',
   onSelect(selectedThemeName) {
    const selectedTheme = allThemes.find((x) => x.name === selectedThemeName)
    if (selectedTheme) {
     activeTheme = selectedTheme
     themeSwitcher.textContent = activeTheme.name
     localStorage.setItem(themeNameStorageKey, activeTheme.name)
     route()
    }
   },
  })({
   content(container) {
    for (const theme of allThemes) {
     const pickTheme = document.createElement('div')
     pickTheme.textContent = theme.name
     pickTheme.setAttribute('data-value', theme.name)
     container.appendChild(pickTheme)
    }
   },
  })
 )

 container.appendChild(themeSwitcher)

 function withBreadcrumb(path: string, page: StarryUIPage): StarryUIPage {
  const crumb = themedButton.add(withTextContent(page.title))({
   href: path,
   tagName: 'a',
  })
  page.startUpTasks.initial.push(function () {
   crumb.setAttribute('data-starryui-reveal', 'hidden')
   breadcrumbs.appendChild(crumb)
  })
  page.startUpTasks.final.push(function () {
   crumb.setAttribute('data-starryui-reveal', 'reveal')
  })
  page.cleanUpTasks.initial.push(function () {
   crumb.setAttribute('data-starryui-reveal', 'hidden')
  })
  page.cleanUpTasks.final.push(function () {
   breadcrumbs.removeChild(crumb)
  })
  return page
 }

 return {
  container,
  get activeTheme() {
   return activeTheme
  },
  withBreadcrumb,
 }
}
