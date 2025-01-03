"use client"

import { ClientReviewsType } from "@/types/types"
import ImageSection from "@/components/common/ImageSection"
import ClientReviewsList from "@/components/home/ClientReviewsList"

interface ClientReviewsProps {
  data: ClientReviewsType
}

const ClientReviews = ({ data }: ClientReviewsProps) => {
  const { imageSection, reviews } = data
  return (
    <>
      <ImageSection data={imageSection} />
      <section className="max-w-screen-xl mx-auto">
        <ClientReviewsList reviews={reviews} />
      </section>
    </>
  )
}

export default ClientReviews