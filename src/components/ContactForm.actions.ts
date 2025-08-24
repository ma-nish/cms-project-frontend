'use server'

export async function submitContactForm(formData: FormData) {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  // Basic validation
  if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    const response = await fetch(`${process.env.PAYLOAD_API_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rawFormData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('API Error:', errorData)
      return { success: false, error: 'Failed to submit form. Please try again.' }
    }

    return { success: true }
  } catch (error) {
    console.error('Submission Error:', error)
    return { success: false, error: 'A network error occurred.' }
  }
}
