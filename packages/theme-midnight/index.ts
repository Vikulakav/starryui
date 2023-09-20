import { StarryUITheme } from '@starryui/theme'

export const themeMidnight: StarryUITheme = {
 name: 'midnight',
 variables: {
  theme0: '#000000',
  theme1: '#101010',
  theme2: '#202020',
  theme3: '#303030',
  theme4: '#404040',
  theme5: '#505050',
  theme6: '#606060',
  theme7: '#707070',
  theme8: '#808080',
  themef: '#ffffff',
 },
 facets: {
  body: [
   {
    '': {
     backgroundColor: 'var(--theme0)',
     display: 'flex',
     flexDirection: 'column',
     margin: 'var(--dimension0)',
     minHeight: '100vh',
     maxHeight: '100vh',
     overflow: 'hidden',
     padding: 'var(--dimension0)',
    },
    '&, input, textarea, select, a': {
     color: 'var(--themef)',
     fontFamily: 'sans-serif',
     fontSize: '16px',
    },
    a: {
     textDecoration: 'none',
    },
    h1: {
     fontSize: '24px',
    },
    h2: {
     fontSize: '20px',
    },
    h3: {
     fontSize: '18px',
    },
    h4: {
     fontSize: '16px',
    },
    h5: {
     fontSize: '14px',
    },
    h6: {
     fontSize: '12px',
    },
    'div[starryui-reveal]': {
     opacity: '0',
     transform: 'scaleY(0.975) translateY(-2.5%)',
     transformOrigin: 'top left',
     transition: '0.5s ease-out opacity, 0.5s ease-out transform',
    },
    'div[starryui-reveal="reveal"]': {
     opacity: '1',
     transform: 'scaleY(1) translateY(0)',
    },
   },
  ],
  button: [
   {
    '': {
     backgroundColor: 'var(--theme0)',
     border: '1px solid var(--theme8)',
     boxSizing: 'border-box',
     color: 'var(--themef)',
     cursor: 'pointer',
     display: 'inline-flex',
     flexDirection: 'row',
     fontSize: '14px',
     height: 'var(--dimension4)',
     lineHeight: '14px',
     maxHeight: 'var(--dimension4)',
     minWidth: 'var(--dimension4)',
     padding: 'var(--dimension1)',
     whiteSpace: 'nowrap',
    },
    '&:hover': {
     backgroundColor: 'var(--theme2)',
    },
    '&:active': {
     backgroundColor: 'var(--theme0)',
    },
    '& div[data-starryui-trait="buttonImage"]': {
     backgroundSize: '100%',
     height: 'var(--dimension3)',
     imageRendering: 'pixelated',
     marginRight: 'var(--dimension1)',
     width: 'var(--dimension3)',
    },
   },
  ],
  column: {
   display: 'flex',
   flexDirection: 'column',
   flexGrow: '1',
   overflowX: 'hidden',
   overflowY: 'auto',
  },
  frame: {
   border: '1px solid var(--theme4)',
   borderRadius: 'var(--dimension1)',
   boxSizing: 'border-box',
   height: '100%',
   overflowX: 'hidden',
   overflowY: 'auto',
   width: '100%',
  },
  row: {
   display: 'flex',
   flexDirection: 'row',
   flexGrow: '1',
   overflowX: 'auto',
   overflowY: 'hidden',
  },
  tray: [
   {
    '': {
     backgroundColor: 'var(--theme1)',
     borderBottom: '1px solid var(--theme4)',
     boxSizing: 'border-box',
     flexShrink: '0',
     overflowX: 'auto',
     overflowY: 'hidden',
     minHeight: 'var(--dimension4)',
     minWidth: 'var(--dimension4)',
    },
    '& > facet(button)': {
     backgroundColor: 'var(--theme1)',
     borderBottom: '1px solid var(--theme4)',
     borderLeft: 'none',
     borderRight: '1px solid var(--theme4)',
     borderTop: 'none',
     marginBottom: '-1px',
    },
   },
  ],
 },
}
