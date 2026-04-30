"use client";

import { authClient } from "@/lib/auth-client";
import { UserIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from "react";

export function UpdateProfile() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    window.location.reload();
  };

  return (
    <Modal>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95">
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-3xl overflow-hidden border-none shadow-2xl">
            <Modal.CloseTrigger />
            <Modal.Header className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
              <Modal.Heading className="text-xl font-bold">
                Update Profile
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-blue-50">
                Update your account information below.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="border-none">
                {/* Eikhane onSubmit handler-ti add kora hoyeche */}
                <form
                  id="update-profile-form"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField className="w-full" name="name" type="text">
                    <Label className="flex items-center gap-2 mb-1">
                      <UserIcon className="size-4" /> Name
                    </Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="image" type="url">
                    <Label className="flex items-center gap-2 mb-1">
                      <PhotoIcon className="size-4" /> Profile Image URL
                    </Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer className="p-6 flex gap-3">
              <Button
                slot="close"
                variant="secondary"
                className="flex-1 rounded-xl"
              >
                Cancel
              </Button>
              {/* Form submit korar jonno type="submit" ebong form ID link kora hoyeche */}
              <Button
                type="submit"
                form="update-profile-form"
                className="flex-1 bg-blue-600 text-white font-bold rounded-xl"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
