import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, useToast } from "@nextui-org/react";
import { MailIcon } from "../../public/MailIcon";
import { LockIcon } from "../../public/LockIcon";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch("api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setUser({
        email: "",
        password: "",
      });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} color="primary" className="mx-2">
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">Log in</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              label="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox classNames={{ label: "text-small" }}>Remember me</Checkbox>
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={handleLogin} loading={loading}>
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
