import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here
test('email validity', () => {
  render(<LoginForm />)
  const emailText = screen.getByText("Email Address");
  const passwordText = screen.getByText("Password");
  expect(emailText).toBeInTheDocument();
  expect(passwordText).toBeInTheDocument();
});

test('email should match the emailformat', ()=> {
  render(<LoginForm />)
  const validEmail = 'user@gmail.com';
  const emailInput = screen.getByText("Email Address");
  emailInput.value = validEmail;
  expect(emailInput.value).toBe(validEmail);
});
 
test('invalid email returns an error',  () => {
  render(<LoginForm />);
  const invalidEmail = 'user@.com';
  const emailInput = screen.getByText("Email Address");
  emailInput.value = invalidEmail;
  const signInButton = screen.getByText("Sign In");
  fireEvent.click(signInButton);

  const errorEmail = screen.getByText("Invalid email address");
  expect(errorEmail).toBeInTheDocument();

});