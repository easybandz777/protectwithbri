/**
 * utils.ts
 * Shared utility helpers.
 */

/**
 * Smoothly scrolls to an element offset by the fixed nav height.
 * Used by Navbar anchor links and mobile menu links.
 */
export function smoothScrollTo(id: string, navHeight = 76): void {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative to `clsx` for the few places we need it.
 */
export function cx(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ');
}
