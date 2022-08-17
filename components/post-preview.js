import Link from 'next/link'

import CoverImage from './cover-image'

export default function PostPreview({
  title,
  heroImage,
  slug,
  description,
}) {
  return (
    <div>
      <div className="mb-5">
      {heroImage?.url && <CoverImage title={title} slug={slug} url={heroImage.url} />}

      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{description}</p>

    </div>
  )
}
