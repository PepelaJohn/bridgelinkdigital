// server/contact-us-form-submit.ts

import { ContactUsSchemaType } from "../sections/contact/v1/form";

export async function contactUsFormSubmit(values: ContactUsSchemaType) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        data: null,
        message: result.message || 'Failed to send message',
      };
    }

    return {
      data: result.data,
      message: result.message,
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      data: null,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
