import AudioRecordering from '../components/AudioRecordering';
import VideoRecording from '../components/VideoRecording';
export default function Createtutorial() {
  const sidelinks = [
    { title: 'Create New', link: '#create', current: false },
    { title: 'Draft', link: '#draft', current: false },
    { title: 'Audio', link: '#draft', current: false },
  ];
  const Sidebar = () => {
    return sidelinks.map((item) => {
      return (
        <div className="bg-pink-200 p-2 shadow-md hover:bg-pink-400 cursor-pointer">
          <a href={item.link}>{item.title}</a>
        </div>
      );
    });
  };

  return (
    <div className="m-4">
      <h3 className="font-bold shadow-md text-medium border-color-gray-600 pb-2">
        Create Tutorial
      </h3>
      <div className="flex grid grid-cols-4 gap-4">
        <div className="shadow-lg">
          <Sidebar />
          <div>
            <h3 className="w-full font-bold m-2">All Recordings</h3>
            <div id="recordings"></div>
          </div>
        </div>
        <div className="shadow-lg p-4">
          <div id="create" className="flex w-full">
            <div>
              <div>
                <div>Title</div>
                <div>
                  <input type="text" name="title" />
                </div>
              </div>
              <div>
                <div>Transcription</div>
                <div>
                  <textarea rows="10" cols="30" name="transcription" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-4">
          <div>Preview</div>
          <div>
            <AudioRecordering />
          </div>
          <div>Video Recording</div>
          {/* <div>
            <VideoRecording />
          </div> */}
        </div>
        <div className="shadow-lg p-4">
          <div className="border-2 w-full border-color-black-600 h-50">
            <video width="320" height="240" controls>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
