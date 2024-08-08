import Image from 'next/image';
import type { PostContent } from '~/types/PostContent.type';

export function ArticleCard({ post }: { post: PostContent }) {
	return (
		<article
			className={`${post.featured && 'lg:flex-row lg:gap-8'} flex flex-col`}
		>
			<Image
				src={post.image}
				className="md:max-w-full"
				alt="A macbook connect in workspace"
			/>
			<div className="flex flex-col gap-[0.6875rem] pt-5">
				<div className="flex items-center gap-3">
					<span className="font-normal text-sm text-white/60">
						{post.category}
					</span>
					<div className="h-1 w-1 rounded-full bg-white/60" />
					<span className="font-normal text-sm text-white/60">
						{post.publishedAt}
					</span>
				</div>
				<p className="font-normal text-2xl text-white leading-[2.375rem]">
					{post.title}
				</p>
				<p
					className={`font-normal text-base text-white/60 leading-7 md:min-h-[8.75rem] lg:min-h-[8.75rem] 2xl:text-lg ${post.featured && 'md:min-h-full'}`}
				>
					{post.description}
				</p>
				<div className="flex gap-4 pt-2">
					<Image
						src={post.avatar}
						className="h-[3.125rem] w-[3.125rem]"
						alt="A avatar from leslie user"
					/>
					<div className="flex flex-col gap-2">
						<span className="font-normal text-sm text-white">
							{post.author}
						</span>
						<span className="font-normal text-sm text-white/60">
							{post.authorRole}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
}
