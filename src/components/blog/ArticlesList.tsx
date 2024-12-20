import { Article } from "@/types/types"
import ArticlePreview from "@/components/blog/ArticlePreview"

interface ArticlesListProps {
  data: Article[]
}

const ArticlesList = ({ data: articles }: ArticlesListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pb-10">
      {articles.map((article, index) => (
        <ArticlePreview key={article._id} article={article} index={index} />
      ))}
    </ul>
  )
}

export default ArticlesList