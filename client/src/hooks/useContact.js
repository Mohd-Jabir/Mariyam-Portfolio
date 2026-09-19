import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../api/contactApi.js";

export const useContact = () => {
  return useMutation({
    mutationFn: submitContact,
  });
};
