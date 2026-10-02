const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Fetch all predefined menu items from backend
 */
export const fetchMenuItems = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/menu`);
    if (!res.ok) {
      throw new Error(`Failed to fetch menu: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('API error in fetchMenuItems:', error);
    throw error;
  }
};

/**
 * Generate PDF with temporary quantities and units
 * Returns a Blob of the generated PDF
 */
export const generateMenuPdf = async (items, customerInfo) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/generate-pdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items, customerInfo }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `PDF generation failed with status ${res.status}`);
    }

    const blob = await res.blob();
    return blob;
  } catch (error) {
    console.error('API error in generateMenuPdf:', error);
    throw error;
  }
};
