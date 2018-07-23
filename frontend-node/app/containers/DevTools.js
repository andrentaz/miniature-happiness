import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


/**
 * Very useful component that always show the application state
 * Rendered only in development mode
 */
export default createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h"
	           changePositionKey="ctrl-w">
		<LogMonitor />
	</DockMonitor>
);
