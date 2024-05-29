export async function fetchAPI(url, options = {}) {
    try {
        // // Make the API request using fetch
        // const response = await fetch(url, options);
        
        // // Check if the response is successful
        // if (!response.ok) {
        //     throw new Error('Failed to fetch data');
        // }
        
        // // Parse JSON response and return data
        // const data = await response.json();
        // return data;
        return null;
    } catch (error) {
        // Handle errors
        console.error('API call error:', error.message);
        throw error;
    }
}