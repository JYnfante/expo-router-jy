// Forked so we can access without importing any React Native code in Node.js environments.

import type { InitialState } from '@react-navigation/routers';

export function findFocusedRoute(state: InitialState) {
	let current: InitialState | undefined = state;

	const newCurrent = current?.routes[current.index ?? 0];

	if (newCurrent != undefined) {
		while (newCurrent.state != null) {
			current = newCurrent.state;
		}
	}

	const route = current?.routes[current?.index ?? 0];

	return route;
}
