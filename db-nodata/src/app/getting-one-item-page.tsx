"use client";
import FeedbackComponent from "@/components/one-item-component";
import { useParams } from "next/navigation";

export default function Home() {
  const feedbackId = useParams();
  return <FeedbackComponent id={feedbackId} />;
}
