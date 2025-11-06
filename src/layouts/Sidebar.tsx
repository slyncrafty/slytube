import {
	ArrowDownToLine,
	ChevronDown,
	ChevronUp,
	Clapperboard,
	Clock,
	Home,
	ListVideo,
	Repeat,
	History,
	SquarePlay,
	ThumbsUp,
	CirclePlay,
	Music2,
	Radio,
	Gamepad2,
	Newspaper,
	Trophy,
	Lightbulb,
	Mic,
	Dice6,
	Shirt,
	TvMinimalPlay,
	Download,
	CircleUser,
} from 'lucide-react';
import { Children, useState, type ElementType, type ReactNode } from 'react';
import { Button, buttonStyles } from '../components/Button';
import { subscriptions } from '../data/sidebar';
import { twMerge } from 'tailwind-merge';
import { useSidebarContext } from '../contexts/SidebarContext';
import { PageHeaderFirstSection } from './PageHeader';

export function Sidebar() {
	const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
	return (
		<>
			<aside
				className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
					isLargeOpen ? 'lg:hidden' : 'lg:flex'
				}`}>
				<SmallSidebarItem Icon={Home} title='Home' url='/' />
				<SmallSidebarItem Icon={Repeat} title='Shorts' url='/shorts' />
				<SmallSidebarItem
					Icon={TvMinimalPlay}
					title='Subscriptions'
					url='/subscriptions'
				/>
				<SmallSidebarItem
					Icon={CirclePlay}
					title='YouTube Music'
					url='/music'
				/>
				<SmallSidebarItem Icon={CircleUser} title='You' url='/you' />
				<SmallSidebarItem Icon={Download} title='Downloads' url='/downloads' />
			</aside>
			{isSmallOpen && (
				<div
					onClick={close}
					className='lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50'
				/>
			)}
			<aside
				className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
					isLargeOpen ? 'lg:flex' : 'lg:hidden'
				} ${isSmallOpen ? 'flex z-[999] bg-white max-h-screen' : 'hidden'}`}>
				<div className='lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white'>
					<PageHeaderFirstSection />
				</div>
				<LargeSidebarSection title='' visibleItemCount={4}>
					<LargeSidebarItem isActive IconOrImgUrl={Home} title='Home' url='/' />
					<LargeSidebarItem
						IconOrImgUrl={Repeat}
						title='Shorts'
						url='/shorts'
					/>
					<LargeSidebarItem
						IconOrImgUrl={TvMinimalPlay}
						title='Subscriptions'
						url='/subscriptions'
					/>
					<LargeSidebarItem
						IconOrImgUrl={CirclePlay}
						title='YouTube Music'
						url='/music'
					/>
				</LargeSidebarSection>

				<hr />

				<LargeSidebarSection title='You >'>
					<LargeSidebarItem
						IconOrImgUrl={History}
						title='History'
						url='/history'
					/>
					<LargeSidebarItem
						IconOrImgUrl={ListVideo}
						title='Playlists'
						url='/playlists'
					/>
					<LargeSidebarItem
						IconOrImgUrl={SquarePlay}
						title='Your videos'
						url='/feed'
					/>
					<LargeSidebarItem
						IconOrImgUrl={Clock}
						title='Watch Later'
						url='/playlist?list=WL'
					/>
					<LargeSidebarItem
						IconOrImgUrl={ThumbsUp}
						title='Liked videos'
						url='/playlist?list=LL'
					/>
					<LargeSidebarItem
						IconOrImgUrl={ArrowDownToLine}
						title='Downloads'
						url='/downloads'
					/>
					{/* {playlists.map((playlist) => (
						<LargeSidebarItem
							key={playlist.id}
							IconOrImgUrl={ListVideo}
							title={playlist.name}
							url={`/playlist?list-${playlist.id}`}
						/>
					))} */}
				</LargeSidebarSection>

				<hr />

				<LargeSidebarSection title='Subscriptions >' visibleItemCount={5}>
					{subscriptions.map((subscription) => (
						<LargeSidebarItem
							key={subscription.id}
							IconOrImgUrl={subscription.imgUrl}
							title={subscription.channelName}
							url={`/@${subscription.id}`}
						/>
					))}
				</LargeSidebarSection>

				<hr />

				<LargeSidebarSection title='Explore'>
					<LargeSidebarItem IconOrImgUrl={Music2} title='Music' url='/music' />
					<LargeSidebarItem
						IconOrImgUrl={Clapperboard}
						title='Movies & TV'
						url='/movies'
					/>
					<LargeSidebarItem IconOrImgUrl={Radio} title='Live' url='/live' />
					<LargeSidebarItem
						IconOrImgUrl={Gamepad2}
						title='Gaming'
						url='/gaming'
					/>
					<LargeSidebarItem IconOrImgUrl={Newspaper} title='News' url='/news' />
					<LargeSidebarItem IconOrImgUrl={Trophy} title='Sport' url='/sport' />
					<LargeSidebarItem
						IconOrImgUrl={Lightbulb}
						title='Learning'
						url='/learning'
					/>
					<LargeSidebarItem
						IconOrImgUrl={Shirt}
						title='Fashion & beauty'
						url='/fashion-beauty'
					/>
					<LargeSidebarItem
						IconOrImgUrl={Mic}
						title='Podcasts'
						url='/podcasts'
					/>
					<LargeSidebarItem
						IconOrImgUrl={Dice6}
						title='Playables'
						url='/playables'
					/>
				</LargeSidebarSection>
			</aside>
		</>
	);
}

type SmallSidebarItemProps = {
	Icon: ElementType;
	title: string;
	url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
	return (
		<a
			href={url}
			className={twMerge(
				buttonStyles({ variant: 'ghost' }),
				'py-4 px-1 flex flex-col items-center rounded-lg gap-1'
			)}>
			<Icon className='w-6 h-6' />
			<div className='text-xs'>{title}</div>
		</a>
	);
}

type LargeSidebarSectionProps = {
	children: ReactNode;
	title?: string;
	visibleItemCount?: number;
};

function LargeSidebarSection({
	children,
	title,
	visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const childrenArray = Children.toArray(children).flat();
	const showExpandButton = childrenArray.length > visibleItemCount;
	const visibleChildren = isExpanded
		? childrenArray
		: childrenArray.slice(0, visibleItemCount);
	const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
	return (
		<div>
			{title && <div className='ml-4 mt-2 text-lg mb-1'> {title}</div>}
			{visibleChildren}
			{showExpandButton && (
				<Button
					onClick={() => setIsExpanded((e) => !e)}
					variant='ghost'
					className='w-full flex items-center rounded-lg gap-4 p-3'>
					<ButtonIcon className='w-6 h-6' />
					<div>{isExpanded ? 'Show fewer' : 'Show more'} </div>
				</Button>
			)}
		</div>
	);
}

type LargeSidebarItemProps = {
	IconOrImgUrl: ElementType | string;
	title: string;
	url: string;
	isActive?: boolean;
};

function LargeSidebarItem({
	IconOrImgUrl,
	title,
	url,
	isActive = false,
}: LargeSidebarItemProps) {
	return (
		<a
			href={url}
			className={twMerge(
				buttonStyles({ variant: 'ghost' }),
				`w-full flex items-center rounded-lg gap-4 p-3 ${
					isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : 'undefined'
				}`
			)}>
			{typeof IconOrImgUrl === 'string' ? (
				<img src={IconOrImgUrl} className='w-6 h-6 rounded-full' />
			) : (
				<IconOrImgUrl className='w-6 h-6' />
			)}

			<div className='whitespace-nowrap-overflow-hidden text-ellipsis'>
				{title}
			</div>
		</a>
	);
}
