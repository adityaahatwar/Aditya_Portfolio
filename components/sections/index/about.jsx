// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I'm a Computer Science Engineering student at Jyothy Institute of Technology, Bangalore, with a passion for crafting visually stunning and user-friendly frontend designs. My love for coding blends seamlessly with my creative flair, enabling me to build immersive web experiences. I thrive on exploring new technologies and pushing the boundaries of what's possible on the web. Beyond academics, I enjoy experimenting with design tools and staying updated on the latest frontend trends. My goal is to turn complex problems into simple, elegant solutions that delight users."
				/>
				<section className={about.content}>
					
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'user-group' ]}
							copy="I’m skilled in clear communication, teamwork, and problem-solving, ensuring effective collaboration and practical solutions. I adapt quickly to new tools and manage my time well to meet deadlines. Creativity drives me to bring fresh, valuable ideas to my work."
						/>
						<CopyBlock 
							title="Hobbies"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'heart' ]}
							copy="I’m passionate about sports and outdoor activities, with a background in inter-state basketball and high school volleyball. Trekking allows me to explore nature and challenge myself physically, while cricket remains a favorite pastime that I enjoy with friends. Each of these activities helps me stay active, build teamwork skills, and find balance in life."
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]