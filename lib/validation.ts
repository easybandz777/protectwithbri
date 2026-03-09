/**
 * validation.ts
 * Shared form validation logic used by both the client component and the API route.
 */

export interface ConsultationFormData {
    full_name: string;
    email: string;
    phone?: string;
    best_time?: string;
    interest?: string;
}

export interface ValidationResult {
    ok: boolean;
    errors: Partial<Record<keyof ConsultationFormData, string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateConsultationForm(data: Partial<ConsultationFormData>): ValidationResult {
    const errors: ValidationResult['errors'] = {};

    if (!data.full_name?.trim()) {
        errors.full_name = 'Please enter your full name.';
    }

    if (!data.email?.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!EMAIL_RE.test(data.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }

    return { ok: Object.keys(errors).length === 0, errors };
}
