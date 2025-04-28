import { StricMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'opu-x-react-assets/dist/assets/main.css';
import './assets/fronts/NotoSansKR.css';
import './assets/icons/opusXIcon.css';
import '@/assets/scss/app.scss';
import App from './App.tsx';

// AG grid ------------------------------
import { AllcommunityModule, ModuleRegistry } from 'ag-grid-community';
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

createRoot( document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StricMode>,
);