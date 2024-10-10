import Link from "next/link";
import { DUMMY_NEWS } from "@/NewData";
import NewsList from "@/components/news-list";

export default  function NewsPage(){
    return (
        <main>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS}/>
        </main>
    )

}