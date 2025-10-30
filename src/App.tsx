import './App.css';
import { PageHeader } from './layouts/PageHead';
// import { CategoryPills } from './component/CategoryPills';

function App() {
	return (
		<>
			<div className='max-h-screen flex flex-col'>
				<PageHeader />
				<div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
					<div>Sidebar</div>
					<div className='sticky top-0 bg-white z-10 pb-4'>
						{/* <CategoryPills /> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
