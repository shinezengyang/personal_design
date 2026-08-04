import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './index.css'
import App from './App'
import { ErrorBoundary } from './ErrorBoundary'
import { startLazyImageRescue } from './lib/lazyImages'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('找不到 #root，请检查 index.html')
}

startLazyImageRescue()

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
