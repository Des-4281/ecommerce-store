import { FirebaseError } from "firebase/app";

// Turns Firebase error codes messages for users. 
export const authErrorMessage = (err: unknown): string => {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/email-already-in-use":
        return "An account with that email already exists.";
      case "auth/invalid-email":
        return "That email address isn't valid.";
      case "auth/weak-password":
        return "Password must be at least 6 characters.";
      case "auth/invalid-credential":
        return "Wrong email or password.";
      case "auth/too-many-requests":
        return "Too many attempts. Wait a minute and try again.";
    }
    return err.message;
  }
  return "Something went wrong. Please try again.";
};