import { DUMMY_NEWS } from "@/NewData"
import { notFound } from "next/navigation"

export default function ImagePage({ params }) {
    const newsSlug = params.slug
    const newsItem = DUMMY_NEWS.find((newsItem => newsItem.slug === newsSlug))
    if (!newsItem) {
        notFound()
    }

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
}