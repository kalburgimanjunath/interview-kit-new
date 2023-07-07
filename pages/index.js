import Header from '../components/Header';
import BackgroundSlideshow from 'react-background-slideshow';
import {
  MainComponent,
  Button,
  Page,
  Navbar,
  Posts,
  Hero,
  Videos,
} from 'mynewslds-library';
import 'mynewslds-library/dist/output.css';
// import image1 from '../assets/001.jpg';
// import image2 from '../assets/001.jpg';
// import image3 from '../assets/001.jpg';
export default function Home() {
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      image: 'https://picsum.photos/seed/picsum/200/300',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      image: 'https://picsum.photos/seed/picsum/200/300',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ];
  
  return (
    <div className="container mx-auto bg-gray-100">
      {/* <BackgroundSlideshow images={[image1, image2, image3]} /> */}
      <MainComponent
        text="Create React Library Example 😄"
        backgroundColor="orange"
      />
      <Hero image={'https://picsum.photos/200/300'} label="hero" />
      <Posts posts={posts} />
    </div>
  );
}
