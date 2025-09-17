// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// MDX type declarations
declare module "*.mdx" {
	import { SvelteComponent } from "svelte";
	
	export default class extends SvelteComponent {}
	export const metadata: {
		title?: string;
		date?: string;
		time?: string;
		venue?: string;
		location?: string;
		image?: string;
		description?: string;
		program?: string[];
		tickets?: string;
		status?: 'upcoming' | 'past' | 'cancelled';
		featured?: boolean;
	};
}

export {};
