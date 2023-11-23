import axios from 'axios';

async function logoutUser() {
  try {
    const response = await axios.post('https://your-django-backend.com/logout', {
      // Include request data if needed
      // user_id: userId,
    }, {
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers if required
        // 'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      // Logout successful
      console.log('User logged out successfully');
      // Perform any necessary frontend actions like redirecting to login page, clearing local storage, etc.
    } else {
      // Logout failed
      console.error('Logout failed:', response.statusText);
      // Handle the error accordingly
    }
  } catch (error) {
    console.error('Error during logout:', error.message);
    // Handle the error accordingly
  }
}
