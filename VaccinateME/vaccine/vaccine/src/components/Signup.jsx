"use client"
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, useToast } from "@nextui-org/react";
import { MailIcon } from "../../public/MailIcon";
import { LockIcon } from "../../public/LockIcon";

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSignup = async () => {
    console.log(user)
    try {
      // Validation checks can be performed here if necessary
      setLoading(true);
      const res = await fetch("api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    //   setUser({
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} color="primary">
      Signup
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">Sign Up</ModalHeader>
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
            {/* <Input
              endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              label="Confirm Password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              type="password"
              variant="bordered"
            /> */}
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
            <Button color="primary" onClick={handleSignup} loading={loading}>
              Sign up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
