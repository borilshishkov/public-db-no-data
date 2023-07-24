import { apiDeleteFeedback } from "@/api-requests";
import useFeedbackStore from "@/store";
import { Feedback } from "@prisma/client";
import { MouseEvent, useCallback } from "react";
import { toast } from "react-toastify";

interface Props {
  feedback: Feedback;
}

function confirmDelete(message: string): boolean {
  return window.confirm(message);
}

export function ZavadaItem({ feedback }: Props): JSX.Element {
  const store = useFeedbackStore();

  const onDelete = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const confirmed = confirmDelete("Opravdu chcete smazat?");

      if (confirmed) {
        store.setPageLoading(true);
        apiDeleteFeedback(feedback.id)
          .then(() => {
            store.setPageLoading(false);
            toast.info("Feedback deleted successfully");
            store.deleteFeedback(feedback.id);
          })
          .catch((error: any) => {
            toast.error(error.toString());
            store.setPageLoading(false);
          });
      }
    },
    [feedback.id]
  );

  return (
    <div className="relative my-5 rounded-lg bg-white p-8 text-gray-700">
      <div className="absolute left-0 top-0 -ml-4 -mt-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-pink-500 text-2xl font-bold text-white"></div>
      <button
        type="button"
        className="absolute right-4 top-2 cursor-pointer border-none bg-transparent font-bold"
        onClick={onDelete}
      >
        X
      </button>
    </div>
  );
}
