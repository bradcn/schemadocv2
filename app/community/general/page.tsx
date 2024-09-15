import CommunityLeftbar from '@/components/CommunityLeftbar';

const GeneralPage = () => (
  <div className="flex">
    <CommunityLeftbar />
    <div className="flex-1 p-6">
      <h1 className="text-2xl">General Discussions</h1>
      {/* Add General Discussions content here */}
    </div>
  </div>
);

export default GeneralPage;
