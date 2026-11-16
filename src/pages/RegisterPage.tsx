import { useState } from "react";
import type { SubmitEvent } from "react"; // CHANGED: was FormEvent
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { auth } from "../firebaseConfig";
import { authErrorMessage } from "../authErrors";


const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (err) {
        setError(authErrorMessage(err));
      } 
    };


  return (
    <Container style={{ maxWidth: 420 }}>
      <h1 className="mb-4">Create an account</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit" className="w-100">Register</Button>
      </Form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </Container>
  );
};

export default RegisterPage;