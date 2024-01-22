import { Model } from '@/shared/components/ui/Model'
import { Post } from '@/posts/Post'
import { AddPost } from '@/posts/AddPost'

type PostListProps = {
  openAddPostModel: boolean
  onCloseAddPostModel: () => void
}

export function PostList({ openAddPostModel, onCloseAddPostModel }: PostListProps) {
  return (
    <>
      <Model open={openAddPostModel} onCloseModel={onCloseAddPostModel}>
        <AddPost onCancel={onCloseAddPostModel}/>
      </Model>

      <ul className="flex justify-center gap-4 flex-wrap mt-8">
        <Post author={"author"} text={"text"}/>
      </ul>
    </>
  )
}
