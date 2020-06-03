import Link from 'next/link'
import RichText from 'prismic-reactjs'

const PostPreview = ({slug, title, date, excerpt}) =>{

    return (
        <div>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a>
                    <RichText render={title} />
                </a>
            </Link>
            <p>{excerpt}</p>
            <p>{date}</p>
        </div>
    )
}

export default PostPreview

