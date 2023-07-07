import Topics from './topics';
import Link from 'next/link';
import { LESSONS } from './lessons';
// export const topics = [
//   {
//     id: 1,
//     title: 'Introduction',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//   <div>
//   <div>What will you learn in this page? What will you learn in this page?</div>
//   <ul class="m-4 list-disc">
//   <li>A brief background of sliders</li>
//   <li>What are sliders</li>
//   </ul>
//   </div>`,
//     index: 1,
//   },
//   {
//     id: 2,
//     title: 'Basics',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//     <div>
//     <div>What will you learn in this page?</div>
//     <ul class="m-4 list-disc">
//     <li>A brief background of sliders</li>
//     <li>What are sliders</li>
//     </ul>
//     </div>`,
//     index: 2,
//   },
//   {
//     id: 3,
//     title: 'Basics 2 1',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//     <div>
//     <div>What will you learn in this page?</div>
//     <ul class="m-4 list-disc">
//     <li>A brief background of sliders</li>
//     <li>What are sliders</li>
//     </ul>
//     </div>`,
//     index: 3,
//   },
//   {
//     id: 4,
//     title: 'Basics 2',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//     <div>
//     <div>What will you learn in this page?</div>
//     <ul class="m-4 list-disc">
//     <li>A brief background of sliders</li>
//     <li>What are sliders</li>
//     </ul>
//     </div>`,
//     index: 4,
//   },
//   {
//     id: 5,
//     title: 'Basics 3',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//     <div>
//     <div>What will you learn in this page?</div>
//     <ul class="m-4 list-disc">
//     <li>A brief background of sliders</li>
//     <li>What are sliders</li>
//     </ul>
//     </div>`,
//     index: 5,
//   },
//   {
//     id: 6,
//     title: 'Basics 4',
//     subtitle: 'Slider Introduction',
//     sideheader: 'Foundation',
//     content: `
//     <div>
//     <div>What will you learn in this page?</div>
//     <ul class="m-4 list-disc">
//     <li>A brief background of sliders</li>
//     <li>What are sliders</li>
//     </ul>
//     </div>`,
//     index: 6,
//   },
// ];
export default function index() {
  return (
    <div className="m-20">
      {LESSONS &&
        LESSONS.map((item) => {
          return (
            <Link href={`./lessons/${item.title}`}>
              <div>
                <img src={item.image} width={200} height={200} />
              </div>
              <div>{item.title}</div>
            </Link>
          );
        })}
      {/* {/* {topics &&
        topics.map((item) => {
          return (
            <>
              <Topics title={item.title} />
            </>
          );
        })}
      <Topics items={topics} selectedItem={0} /> */}
    </div>
  );
}
