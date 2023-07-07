import VideoBlub from '../components/VideoBlub';

export default function LearningCenter() {
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
  const v1 = [
    'The three most important things to consider before the interview',
    'How to give a good introduction of yourself',
    'What are the Most Common Things Companies Look for in a Candidate?',
    'Research the company',
    'Interview Preparation: Research the Company',
    'Interview Preparation: Research the Role',
  ];
  const v2 = [
    '3 Important Things to Think About Before the Interview',
    '3 Things to Ask About During the Interview',
    'Interview Best Practices: 4 Things to Remember',
    'How to improve your presentation skills',
    'How to answer: What are your strengths and weaknesses',
    'How to answer: Why do you find this job interesting',
  ];
  const v3 = [
    'Preparing for the Case Interview',
    'Prepare the Case Interview',
    'Presentation Set Up: Best Practices',
    'How to Best Deliver Your Case Presentation',
    'How to Avoid Getting Nervous During the Case Interview',
  ];
  return (
    <div className="m-20">
      <h1 className="font-bold text-lg uppercase pb-20">
        make a look around the Learning Center
      </h1>
      <p>
        We believe that you can shine best when the stress of the unknown is
        removed from the equation. Here you will find materials that can prepare
        you better for recruitment processes.
      </p>
      <p>
        <a
          href="./remotejobacademy"
          target="_new"
          className="font-bold text-blue-700"
        >
          Don’t forget to check regularly for updates and new content!
        </a>
      </p>
      <VideoBlub
        items={videos}
        title="First steps into recruitment process"
        subtitle="Are you about to jump into your first round of job interviews? Find out what our experts share below."
      />
      <VideoBlub
        items={videos}
        title="Useful at any stage of job search"
        subtitle="Looking for a new job? Take a look at the materials below and get ready for the next recruitment process."
      />
      <VideoBlub
        items={videos}
        title="Case interview tips & tricks"
        subtitle="Getting ready for a case interview? Find out how to deliver the best presentation!"
      />
    </div>
  );
}
