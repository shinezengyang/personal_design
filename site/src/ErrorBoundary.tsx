import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: 'system-ui, sans-serif',
            color: '#f87171',
            background: '#0a0a0f',
            minHeight: '100vh',
          }}
        >
          <h1 style={{ fontSize: 20, marginBottom: 12 }}>页面加载出错</h1>
          <p style={{ color: '#94a3b8', marginBottom: 16 }}>
            请把下面这段信息发给开发者，或打开浏览器开发者工具 (F12) → Console 查看红字。
          </p>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontSize: 13,
              background: '#111827',
              padding: 16,
              borderRadius: 8,
            }}
          >
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
