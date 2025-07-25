import { Container, Theme } from './settings/types';
import BoxerWebsite from './components/generated/BoxerWebsite';

const theme: Theme = 'light';
const container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  // Remove unnecessary useMemo since BoxerWebsite is always the same
  const generatedComponent = <BoxerWebsite />;

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;
