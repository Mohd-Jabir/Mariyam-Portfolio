import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { submitFeedback,getFeedback } from "../api/feedbackApi.js";

export const useFeedback = () => {
  const queryClient = useQueryClient();

  const feedbackQuery = useQuery({
    queryKey: ["feedback"],
    queryFn: getFeedback,
  });

  const feedbackMutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feedback"],
      });
    },
  });

  return {
    feedback: feedbackQuery.data?.feedback || [],
    count: feedbackQuery.data?.count || 0,
    isLoading: feedbackQuery.isLoading,
    isError: feedbackQuery.isError,
    error: feedbackQuery.error,

    submitFeedback: feedbackMutation.mutate,
    isSubmitting: feedbackMutation.isPending,
    submitError: feedbackMutation.error,
    submitSuccess: feedbackMutation.isSuccess,
  };
};
