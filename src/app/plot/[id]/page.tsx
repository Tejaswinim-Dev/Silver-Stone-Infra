import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import PlotViewClient from "./PlotViewClient";

export default async function PlotDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const plot = properties.find((p) => p.id === resolvedParams.id);

  if (!plot) {
    return notFound();
  }

  return <PlotViewClient plot={plot} />;
}
