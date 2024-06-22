# Login-SignUpPage

Welcome to the Login-SignUpPage repository! This project showcases a demo web application featuring user authentication and profile management using Google Sign-In.

## Features

- **Google Sign-In:** Users can sign in using their Google account.
- **Profile Display:** Upon successful sign-in, the user's profile information (name, email, gender, birthday, and profile picture) is displayed.
- **Responsive Design:** The application is designed to be responsive and user-friendly across different devices.

## Technologies Used

- **HTML:** Structure and content of the web pages.
- **CSS:** Styling and design of the web pages.
- **JavaScript:** Client-side scripting for interactive functionalities.
- **Google OAuth API:** Integration for secure authentication and profile retrieval.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Login-SignUpPage.git
   cd Login-SignUpPage
   ```

2. **Configure Google OAuth:**
   
   - Obtain a client ID from [Google Cloud Console](https://console.cloud.google.com/).
   - Replace `YOUR_CLIENT_ID` in `profile.html` and `signup.html` with your actual Google client ID.
   - Update the authorized redirect URIs in your Google Cloud Console.

3. **Run the Application:**

   - Open `login.html`, `signup.html`, or `profile.html` in your web browser.
   - Interact with the forms to see the functionality in action.

## Usage

- **Login (`login.html`):** Enter your credentials or sign in with Google.
- **Signup (`signup.html`):** Create a new account by filling out the signup form.
- **Profile (`profile.html`):** View your profile information after successful sign-in.

## Resources

- [Google OAuth Playground](https://developers.google.com/oauthplayground/)
- [Google People API Documentation](https://console.cloud.google.com/apis/library/people.googleapis.com)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)


