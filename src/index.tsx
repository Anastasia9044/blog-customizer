import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import App from './app';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
