import CommunityLeftbar from '@/components/CommunityLeftbar';

const EventsPage = () => (
  <div className="flex">
    <CommunityLeftbar />
    <div className="flex-1 p-6">
      <h1 className="text-2xl">Events</h1>
      {/* Add Events content here */}
    </div>
  </div>
);

export default EventsPage;
