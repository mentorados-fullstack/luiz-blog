import { PostsBlog } from '~/components/block/PostsBlog';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
	return (
		<div>
			<main>
				<Container className="pt-7 pb-8">
					<PostsBlog />
				</Container>
			</main>
		</div>
	);
}
