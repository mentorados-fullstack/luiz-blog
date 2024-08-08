import type { PostContent } from '~/types/PostContent.type';

import Post1 from '/public/images/post-1.png';
import Post2 from '/public/images/post-2.png';
import Post3 from '/public/images/post-3.png';
import Post4 from '/public/images/post-4.png';
import Post5 from '/public/images/post-5.png';
import Post6 from '/public/images/post-6.png';
import Post7 from '/public/images/post-7.png';

import Author1 from '/public/images/author-1.png';
import Author2 from '/public/images/author-2.png';
import Author3 from '/public/images/author-3.png';
import Author4 from '/public/images/author-4.png';

export const PostContentMock: PostContent[] = [
	{
		id: 1,
		image: Post1,
		category: 'UI DESIGN',
		publishedAt: 'july 2, 2021',
		title:
			'Understanding color theory: the color wheel and finding complementary colors',
		description:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		avatar: Author1,
		author: 'Leslie Alexander',
		authorRole: 'Ui Designer',
		featured: true
	},
	{
		id: 2,
		image: Post2,
		category: 'INTERNET',
		publishedAt: 'June 28, 2021',
		title: 'How to design a product that can grow itself 10x in year',
		description:
			'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
		avatar: Author2,
		author: 'Jenny Wilson',
		authorRole: 'Product Designer',
		featured: false
	},
	{
		id: 3,
		image: Post3,
		category: '9 TO 5',
		publishedAt: 'June 22, 2021',
		title: 'The More Important the Work, the More Important the Rest',
		description:
			'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
		avatar: Author3,
		author: 'Esther Howard',
		authorRole: 'Entrepreneur',
		featured: false
	},
	{
		id: 4,
		image: Post4,
		category: 'INSPIRATIONS',
		publishedAt: 'June 18, 2021',
		title: 'Email Love - Email Inspiration, Templates and Discovery',
		description:
			'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
		avatar: Author4,
		author: 'Robert Fox',
		authorRole: 'Front-end Engineer',
		featured: false
	},
	{
		id: 5,
		image: Post5,
		category: '9 TO 5',
		publishedAt: 'June 22, 2021',
		title: 'The More Important the Work, the More Important the Rest',
		description:
			'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
		avatar: Author3,
		author: 'Esther Howard',
		authorRole: 'Entrepreneur',
		featured: false
	},
	{
		id: 6,
		image: Post6,
		category: 'INSPIRATIONS',
		publishedAt: 'June 18, 2021',
		title: 'Email Love - Email Inspiration, Templates and Discovery',
		description:
			'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
		avatar: Author4,
		author: 'Robert Fox',
		authorRole: 'Front-end Engineer',
		featured: false
	},
	{
		id: 7,
		image: Post7,
		category: 'INTERNET',
		publishedAt: 'June 28, 2021',
		title: 'How to design a product that can grow itself 10x in year',
		description:
			'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
		avatar: Author2,
		author: 'Jenny Wilson',
		authorRole: 'Product Designer',
		featured: false
	}
];
