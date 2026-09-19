import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../api/ContactApi.js";

export const useContact = () => {
  return useMutation({
    mutationFn: submitContact,
  });
};
