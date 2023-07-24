"use client";
import EditItemComponent from "@/components/zavady/edit-item-component";
import { useParams } from "next/navigation";

export default function Home() {
  const feedbackId = useParams();
  console.log(feedbackId);
  return <EditItemComponent id={feedbackId.id} />;
}
