import { Videos, Button } from 'mynewslds-library';
import VideoBlub from '../../components/VideoBlub';
export default function index() {
  const videos = [
    {
      title: 'abc',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
  ];
  return (
    <div>
      <div className="m-6 ml-2">
        <a
          label="Create Tutorial"
          href="/createtutorial"
          className="bg-green-600 border-2 border-zinc-800 p-2 "
          primary
        >
          Create Tutorial
        </a>
      </div>
      {/* <Videos items={videos} /> */}
      <VideoBlub items={videos} title="Assigned to You" />
      <VideoBlub items={videos} title="Recommended" />
      <VideoBlub items={videos} title="Programming" />
      <VideoBlub items={videos} title="Social" />
    </div>
  );
}
