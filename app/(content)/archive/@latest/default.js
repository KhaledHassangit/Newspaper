import NewsList from "@/components/news-list"
import { getLatestNews } from "@/lib/news"

export default function LastestNewsPage(){
    const latestNews =  getLatestNews()
    return (
        <>
            <h2>Lastest News</h2>
            <NewsList news={latestNews}/>
        </>
    )
}